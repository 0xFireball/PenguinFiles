using Newtonsoft.Json;

namespace PenguinFiles.Models.Auth.Responses
{
    public class RegistrationErrorResponse
    {
        [JsonProperty("msg")]
        public string Message { get; }
    }
}