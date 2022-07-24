void kolichestvoChisel(int[] number)
{
    int count = 0;
    for(int i = 0; i < number.Length; i++)
        if (number[i] > 0) count = count + 1;
    Console.WriteLine(count);
}

int maxNumbers = 10;
int[] myArray = new int[maxNumbers];
for (int i = 0; i < maxNumbers; i++)
{
    Console.Write("Введите значения: ");
    myArray[i] = Convert.ToInt32(Console.ReadLine());
}
    
kolichestvoChisel(myArray);