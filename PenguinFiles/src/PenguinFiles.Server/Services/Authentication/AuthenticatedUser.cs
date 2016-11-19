using System;
using System.Security.Claims;
using System.Security.Principal;

namespace PenguinFiles.Services.Authentication
{
    public class AuthenticatedUser : IIdentity
    {
        public string AuthenticationType { get; set; } = "Default";
        
        public bool IsAuthenticated { get; set; }

        public string Name { get; set; }
    }
}