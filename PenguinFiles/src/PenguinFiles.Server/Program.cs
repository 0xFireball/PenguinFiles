﻿using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace PenguinFiles
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddCommandLine(args)
                .AddJsonFile(Path.Combine(Directory.GetCurrentDirectory(), "hosting.json"), false)
                .Build();

            var host = new WebHostBuilder()
                .UseKestrel()
                .UseConfiguration(config)
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();
            host.Run();
        }
    }
}