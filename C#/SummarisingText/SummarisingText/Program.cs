using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SummarisingText
{
    class Program
    {
        static void Main(string[] args)
        {
            var sentence = "This is going to be really really really really really really really really really really really really really really really really really really really really really really long text";
            var summary = StringUtility.SummarizeText(sentence, 10);
            Console.WriteLine(summary);

        }

       
    }
}
