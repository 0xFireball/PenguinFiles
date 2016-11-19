using Nancy;
using Nancy.Authentication.Forms;
using PenguinFiles.Models.Auth;
using PenguinFiles.Services.Authentication;
using PenguinFiles.Utilities;
using System;

namespace PenguinFiles.Modules
{
    public class AuthenticationModule : NancyModule
    {
        public AuthenticationModule()
        {
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


            });
        }
    }
}