using Nancy;
using Nancy.ModelBinding;
using PenguinFiles.Models.Auth;
using PenguinFiles.Models.Auth.Responses;
using PenguinFiles.Utilities;

namespace PenguinFiles.Modules
{
    public class AuthenticationModule : NancyModule
    {
        public AuthenticationModule()
        {
            Post("/login", p =>
            {
                var loginParams = this.BindJson<WebLoginParameters>();

                var loginResponse = new WebLoginResponse
                {

                };
                return Response.AsJson(loginResponse);
            });
        }
    }
}