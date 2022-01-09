using System;

namespace Variable
{
    class Program
    {
        static void Main(string[] args)
        {
            int box1 = 21; // box1이라는 상자를 만들고 21이라는 값을 넣습니다.
            char box2 = 'A'; // box2이라는 상자를 만들고 A라는 값을 넣습니다.
            bool box3 = true; // box3이라는 상자를 만들고 true라는 값을 넣습니다.

            Console.WriteLine(box1); // box1의 값을 화면에 출력합니다.
            Console.WriteLine(box2); // box2의 값을 화면에 출력합니다.
            Console.WriteLine(box3); // box3의 값을 화면에 출력합니다.

            box1 = 42; // box1이라는 상자에 42라는 값을 덮어씁니다. 
            box2 = 'B'; // box2이라는 상자에 B라는 값을 덮어씁니다. 
            box3 = false; // box3이라는 상자에 flase라는 값을 덮어씁니다. 

            Console.WriteLine(box1); // box1의 값을 화면에 출력합니다.
            Console.WriteLine(box2); // box2의 값을 화면에 출력합니다.
            Console.WriteLine(box3); // box3의 값을 화면에 출력합니다.
        }
    }
}