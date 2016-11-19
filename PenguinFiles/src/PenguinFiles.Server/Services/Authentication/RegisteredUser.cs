using LiteDB;
using System;

namespace PenguinFiles.Services.Authentication
{
    public class RegisteredUser
    {
        public string Username { get; set; }

        public byte[] PasswordKey { get; set; }

        public byte[] CryptoSalt { get; set; }

        public PasswordCryptoConfiguration PasswordCryptoConfiguration { get; set; }

        public Guid Identifier { get; set; }

        [BsonId]
        public ObjectId DatabaseIdentifier { get; set; }
    }
}