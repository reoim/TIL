using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Arrays
{
    class Program
    {
        static void Main(string[] args)
        {

            int[,] array2D = new int[4, 2] { { 1, 2 }, { 3, 4 }, { 5, 6 }, { 7, 8 } };

            Console.WriteLine(array2D.Length);
            Console.WriteLine(array2D.Rank);
            Console.WriteLine(array2D.GetLength(0));
            Console.WriteLine(array2D.GetLength(1));
            Console.WriteLine("======================");

            foreach (int i in array2D)
            {
                Console.WriteLine(i);
            }
        }
    }
}
