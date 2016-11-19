﻿namespace PenguinFiles.Models.Auth
{
    public class WebSignupParameters
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public bool IUnderstand { get; set; }
        public bool IAccept { get; set; }
    }
}