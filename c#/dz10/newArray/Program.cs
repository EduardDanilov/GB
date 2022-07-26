
string[] ArrayGenerator(string[] array)
{
    string[] newArray = new string[array.Length];
    for (int i = 0; i < array.Length; i = i+2)
    {
        newArray[i] = array[i] + array[i + 1];   
    }
    return newArray;
}

void ShowArray(string[] array)
{
    for (int i = 0; i < array.Length; i++)
    {
        Console.Write(array[i] + " ");
    }
    Console.WriteLine();
}

string[] words = {"wer", "hts", "Akl", "psr", "ort", "emx", "xvn", "Yng"};

ShowArray((ArrayGenerator(words)));