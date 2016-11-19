using Nancy;
using Nancy.ModelBinding;
using PenguinFiles.Models.Auth;
using PenguinFiles.Models.Auth.Responses;

namespace PenguinFiles.Modules
{
    public class AuthenticationModule : NancyModule
    {
        public AuthenticationModule()
        {
            Post("/login", p =>
            {
                var loginParams = this.Bind<WebLoginParameters>();

                var loginResponse = new WebLoginResponse
                {

                };
                return Response.AsJson(loginResponse);
            });
        }
    }
}