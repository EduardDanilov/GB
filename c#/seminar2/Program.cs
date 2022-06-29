//Принимает двухзначное число и выдает максимальную цифру
/*int number = new Random().Next(10,100);
int findBiggestNumber(int arg)
{
    Console.WriteLine("Current random number is " + number);
    int firstDigit = arg / 10;
    int secondDigit = arg % 10;
    int max;
    if (firstDigit > secondDigit) max = firstDigit;
    else max = secondDigit;
    return max;
}
int result = findBiggestNumber(number);
Console.WriteLine("Max number is " + result);
*/



//Убирает среднюю цифру из трехзначного числа
/*
int number = new Random().Next(100,1000);
Console.WriteLine("Current number is " + number);
int cutMidDigit(int arg)
{
    int firstNumber = arg / 100;
    int secondNumber = arg % 10;
    int resultNumber = firstNumber * 10 + secondNumber;
    return resultNumber;
}

int result = cutMidDigit(number);
Console.WriteLine(result);
*/


//Проверка на кратность числам
/*
Console.Write("Для проверки на кратность числам 7 и 23 введите число: ");
int number = Convert.ToInt32(Console.ReadLine());
int kratnost(int arg)
{
    if (arg % 7 == 0 && arg % 23 == 0) Console.WriteLine("Число " + arg + " кратно 7 и 23");
    else Console.WriteLine("Число " + arg + " не кратно 7 и 2");
    return arg;
}
kratnost(number);
*/