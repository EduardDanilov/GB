char cifraTri(int arg)
{
    string tretyaCifra = Convert.ToString(arg);
    int itog;
    if (tretyaCifra.Length < 3)
    {
        itog = 0;
    }
    else 
    {
        itog = tretyaCifra[2];
    }    
    return Convert.ToChar(itog);
}

int newCifra = new Random().Next(0,300000);
Console.WriteLine("Заданное число: " + newCifra);
if (cifraTri(newCifra) == 0)
{
    Console.WriteLine("Третьей цифры нет");
}
else
{
    Console.WriteLine("Третья цифра: " + cifraTri(newCifra));
}