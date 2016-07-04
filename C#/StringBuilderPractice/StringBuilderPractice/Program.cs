using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StringBuilderPractice
{
    class Program
    {
        static void Main(string[] args)
        {
            var builder = new StringBuilder();
            /*
            builder.Append('-', 10);
            builder.AppendLine();
            builder.Append("Header");
            builder.AppendLine();
            builder.Append('-', 10);

            builder.Replace('-', '+');

            builder.Remove(0, 10);

            builder.Insert(0, "-", 10);
            */

            builder
                .Append('-', 10)
                .AppendLine()
                .Append("Header")
                .AppendLine()
                .Append('-', 10)
                .Replace('-', '+')
                .Remove(0, 10)
                .Insert(0, "-", 10);

            Console.WriteLine(builder);

            var test = new string('=', 10);
            Console.WriteLine(test);

            Console.WriteLine("First Char: " + builder[0]);
        }
    }
}
