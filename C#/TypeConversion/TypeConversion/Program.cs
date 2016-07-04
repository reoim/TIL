using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TypeConversion
{
    class Program
    {
        static void Main(string[] args)
        {

            try
            {
                var number = "1234";
                byte b = Convert.ToByte(number);
                Console.WriteLine(b);

            }
            catch (Exception)
            {

                Console.WriteLine("You can not convert it");
            }
        }
    }
}
