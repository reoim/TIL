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


            /*
            Write a program and ask the user to enter a few numbers separated by a hyphen. 
            If the user simply presses Enter, without supplying an input, exit immediately; 
            otherwise, check to see if there are duplicates. If so, display "Duplicate" on the console.
            */

            Console.WriteLine("Input a few numbers seperated by a hyphen");
            Console.WriteLine("EX> 5-6-7-8-9");

            var inputNum2 = Console.ReadLine();
            if (String.IsNullOrWhiteSpace(inputNum2))
                return;
            
            var numbers2 = new List<int>();
            bool isDuplicate = true;
            foreach (var n in inputNum2.Split('-'))
                numbers2.Add(Int32.Parse(n));

            numbers2.Sort();

            for (var i = 1; i < numbers2.Count; i++)
            {
                if (numbers2[i] != numbers2[i - 1])
                {
                    isDuplicate = false;
                }
                else
                {
                    isDuplicate = true;
                    break;
                }

            }
            if (isDuplicate)
                Console.WriteLine("Duplicate");


            /*
            Write a program and ask the user to enter a time value in the 24-hour time format (e.g. 19:00). 
            A valid time should be between 00:00 and 23:59. If the time is valid, display "Ok"; otherwise, 
            display "Invalid Time". If the user doesn't provide any values, consider it as invalid time. 
            */

            Console.WriteLine("Input time value in the 24 hour time format. (e.g. 19:00)");

            var timeValue = Console.ReadLine();
            bool isValid = true;
            if (String.IsNullOrWhiteSpace(timeValue))
                isValid = false;

            var stringValue = timeValue.Split(':');
            var hourValue = Int32.Parse(stringValue[0]);
            var minuteValue = Int32.Parse(stringValue[1]);

            if (hourValue < 24)
            {
                if (minuteValue < 60)
                    isValid = true;
            }
            else if (hourValue == 24)
            {
                if (minuteValue == 0)
                    isValid = true;
                else
                    isValid = false;
            }
            else
                isValid = false;


            if(isValid)
                Console.WriteLine("Valid");
            else
                Console.WriteLine("Invalid");


            /*
            Write a program and ask the user to enter a few words separated by a space. 
            Use the words to create a variable name with PascalCase. For example, 
            if the user types: "number of students", display "NumberOfStudents". 
            Make sure that the program is not dependent on the input. So, if the user types "NUMBER OF STUDENTS", 
            the program should still display "NumberOfStudents"
            */

            Console.WriteLine("Enter a few words separated by a space");
            var inputWords = Console.ReadLine();
            
            var result = "";
            foreach (var word in inputWords.Split(' '))
            {
               var PascalWord = char.ToUpper(word[0]) + word.ToLower().Substring(1);
                result += PascalWord;

            }

            Console.WriteLine(result);



        }
    }
}
