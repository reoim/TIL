using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReferenceTypeAndValueType
{
    public class Person
    {
        public int Age;
    }

    class Program
    {
        static void Main(string[] args)
        {

            var number = 1;
            Increment(number);
            Console.WriteLine(number);

            var person = new Person() { Age = 20 };
            getOld(person);
            Console.WriteLine(person.Age);

        }

        public static void Increment(int number)
        {
            number += 10;
        }

        public static void getOld(Person person)
        {
            person.Age += 10;
        }
    }
}
