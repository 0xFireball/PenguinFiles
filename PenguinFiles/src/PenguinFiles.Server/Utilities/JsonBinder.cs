using Nancy;
using Newtonsoft.Json;
using System.IO;

namespace PenguinFiles.Utilities
{
    public static class JsonBinder
    {
        public static T BindJson<T>(this NancyModule module) where T : new()
        {
            T result = default(T);
            using (var sr = new StreamReader(module.Request.Body))
            {
                result = JsonConvert.DeserializeObject<T>(sr.ReadToEnd());
            }
            return result;
        }
    }
}