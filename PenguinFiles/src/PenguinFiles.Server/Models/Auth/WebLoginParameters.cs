using Newtonsoft.Json;

namespace PenguinFiles.Models.Auth
{
    public class WebLoginParameters
    {
        [JsonProperty("username")]
        public string Username { get; set; }

        [JsonProperty("password")]
        public string Password { get; set; }
    }
}