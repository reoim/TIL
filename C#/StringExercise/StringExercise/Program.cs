using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StringExercise
{
    class Program
    {
        static void Main(string[] args)
        {


            /*
            Write a program and ask the user to enter a few numbers separated by a hyphen. 
            Work out if the numbers are consecutive. For example, if the input is "5-6-7-8-9" or "20-19-18-17-16", 
            display a message: "Consecutive"; otherwise, display "Not Consecutive".
            */


            
            Console.WriteLine("Input a few numbers seperated by a hyphen");
            Console.WriteLine("EX> 5-6-7-8-9");

            var inputNum = Console.ReadLine();
            var stringNumbers = inputNum.Split('-');
            var numbers = new List<int>();
            bool consecutive = true;
            foreach (var n in stringNumbers)
            {
                numbers.Add(Int32.Parse(n));   
            }

            numbers.Sort();


            
            for (var i = 1; i < numbers.Count; i++)
            {
                if (numbers[i] != numbers[i-1]+1)
                {
                    consecutive = false;
                    break;

                }
               
            }
            
            if(consecutive)
                Console.WriteLine("Consecutive");
            else
                Console.WriteLine("Not Consecutive");

    


            

        }
    }
}
