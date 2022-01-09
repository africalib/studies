using System;

namespace Function
{
    class Program
    {
        static void Main(string[] args)
        {
            int money = 1000; // 인자1
            string button = "Orange Juice"; // 인자2
            string result = Machine(money, button); // 함수를 호출하고 함수의 반환 값을 변수에 저장
            Console.WriteLine(result);
        }

        static string Machine(int money, string button) // 돈과 버튼을 입력 받음
        {
            switch (button)
            {
                case "Apple Juice": // 입력 버튼이 사과 주스라면
                    if (money >= 1000) // 입력한 돈이 1,000원 이상이라면
                        return "Apple Juice"; // 사과 주스를 반환
                    break;

                case "Orange Juice": // 입력 버튼이 오렌지 주스라면
                    if (money >= 900) // 입력한 돈이 900원 이상이라면
                        return "Orange Juice"; // 오렌지 주스를 반환
                    break;
            }

            return "None"; // 아무 것도 없음
        }
    }
}
