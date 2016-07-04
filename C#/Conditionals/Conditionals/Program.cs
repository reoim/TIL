using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Conditionals
{
    class Program
    {
        static void Main(string[] args)
        {



            var random = new Random();

            const int passwordLength = 10;

            var buffer = new char[passwordLength];

            for (var i = 0; i < passwordLength; i++)
                buffer[i] = (char)('a' + random.Next(0, 26));
                

           var password = new string(buffer);

           Console.WriteLine(password);

            /*
            var season = Season.Autumn;


            switch(season)
            {
                case Season.Spring:
                    Console.WriteLine("It's Spring!");
                    break;

                case Season.Summer:
                    Console.WriteLine("Summer");
                    break;

                case Season.Autumn:
                    Console.WriteLine("It's Autumn!");
                    break;

                case Season.Winter:
                    Console.WriteLine("Winter!!");
                    break;

            }

            */




            /*
            Console.WriteLine("Insert Number.");
            var number = Int32.Parse(Console.ReadLine());
            if (1 < number)
            {
                if(number < 10)
                    Console.WriteLine("Valid");
                else
                    Console.WriteLine("Try Again");
            }
            else
                Console.WriteLine("Try again");

            */

            /*
            Console.WriteLine("input 2 number");
            var number1 = Int32.Parse(Console.ReadLine());
            var number2 = Int32.Parse(Console.ReadLine());

            if(number1 < number2)
                Console.WriteLine(number2);
            else
                Console.WriteLine(number1);
            */




        }
    }
}
