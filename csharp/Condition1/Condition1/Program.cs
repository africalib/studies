using System;

namespace Condition1
{
    class Program
    {
        static void Main(string[] args)
        {
            bool validCard = true; // 유효 카드 여부
            int cardBalance = 3000; // 카드 잔액

            if (validCard) // 유효한 카드가 맞다면
            {
                if (cardBalance >= 1300)  // 카드 잔액이 1,300원 이상이라면
                {
                    Console.WriteLine("버스를 탈 수 있습니다.");
                }
            }
        }
    }
}