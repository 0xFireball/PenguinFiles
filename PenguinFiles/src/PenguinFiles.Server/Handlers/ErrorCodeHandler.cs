using Nancy;
using Nancy.ErrorHandling;
using Nancy.Responses;
using Nancy.ViewEngines;
using System;

namespace PenguinFiles.Handlers
{
    public class ErrorCodeHandler : IStatusCodeHandler
    {
        private IViewRenderer _viewRenderer;

        public ErrorCodeHandler(IViewRenderer viewRenderer)
        {
            _viewRenderer = viewRenderer;
        }

        public void Handle(HttpStatusCode statusCode, NancyContext context)
        {
            context.Response = new RedirectResponse("/")
                .WithStatusCode(statusCode);
        }

        public bool HandlesStatusCode(HttpStatusCode statusCode, NancyContext context)
        {
            return statusCode == HttpStatusCode.NotFound;
        }
    }
}