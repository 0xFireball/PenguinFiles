﻿using Nancy;
using Nancy.Authentication.Forms;
using PenguinFiles.Models.Auth;
using PenguinFiles.Models.Auth.Responses;
using PenguinFiles.Services.Authentication;
using PenguinFiles.Utilities;
using System;
using System.Text.RegularExpressions;

namespace PenguinFiles.Modules
{
    public class AuthenticationModule : NancyModule
    {
        public AuthenticationModule()
        {
            Get("/checkauth", p =>
            {
                if (Context.CurrentUser != null)
                {
                    //user is logged in
                    return new Response().WithStatusCode(HttpStatusCode.OK);
                }
                return new Response().WithStatusCode(HttpStatusCode.Unauthorized);
            });

            Post("/login", p =>
            {
                var loginParams = this.BindJson<WebLoginParameters>();

                var userManagerConnection = new WebLoginUserManager();
                var matchingUser = userManagerConnection.FindUserByUsername(loginParams.Username);

                //Ensure validity of credentials
                if (matchingUser == null || !userManagerConnection.CheckPassword(loginParams.Password, matchingUser))
                {
                    //Login failed
                    return new Response().WithStatusCode(HttpStatusCode.Unauthorized);
                }
                var expiryTime = DateTime.Now.AddDays(1);
                return this.Login(matchingUser.Identifier, expiryTime);
            });

            Post("/register", p =>
            {
                var signupParams = this.BindJson<WebSignupParameters>();

                //validate

                //check username
                if (signupParams.Username.Length < 3)
                {
                    return Response.AsJson(new RegistrationErrorResponse
                    {
                        Message = "username must be at least 3 characters"
                    }).WithStatusCode(HttpStatusCode.Unauthorized);
                }

                Regex validUsernameRegex = new Regex("^[a-zA-Z0-9]*$");
                if (!validUsernameRegex.IsMatch(signupParams.Username))
                {
                    return Response.AsJson(new RegistrationErrorResponse
                    {
                        Message = "username must be alphanumeric"
                    }).WithStatusCode(HttpStatusCode.Unauthorized);
                }

                //check password
                if (signupParams.Password.Length < 8)
                {
                    return Response.AsJson(new RegistrationErrorResponse
                    {
                        Message = "password must be at least 8 characters"
                    }).WithStatusCode(HttpStatusCode.Unauthorized);
                }

                //Store account in database! First check for conflicts and stuff
                //Creation should throw a security exception
                try
                {
                    var userManagerConnection = new WebLoginUserManager();
                    //This can take a bit of time, as crypto stuff has to be generated
                    userManagerConnection.RegisterUser(signupParams);
                }
                catch
                {
                    // security error
                    return Response.AsJson(new RegistrationErrorResponse
                    {
                        Message = "username is taken"
                    }).WithStatusCode(HttpStatusCode.Unauthorized);
                }

                //success!
                return new Response().WithStatusCode(HttpStatusCode.OK); //success
            });
        }
    }
}