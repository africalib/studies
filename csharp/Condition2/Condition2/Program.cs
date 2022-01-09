using System;

namespace Condition2
{
    class Program
    {
        static void Main(string[] args)
        {
            char pressedBtn = 'A'; // 내가 누른 스위치 버튼

            switch (pressedBtn)
            {
                case 'A': // 만약에 내가 누른 스위치 버튼이 A라면
                    Console.WriteLine("거실의 등이 켜집니다.");
                    break;

                case 'B': // 만약에 내가 누른 스위치 버튼이 B라면
                    Console.WriteLine("화장실의 등이 켜집니다.");
                    break;
            }
        }
    }
}