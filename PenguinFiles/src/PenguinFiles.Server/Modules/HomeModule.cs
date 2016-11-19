using Nancy;
using Nancy.Responses;

namespace PenguinFiles.Modules
{
    public class HomeModule : NancyModule
    {
        public HomeModule()
        {
            //Send the user to the client app
            Get("/", _ => View["index"]);
        }
    }
}