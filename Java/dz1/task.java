// Написать программу вычисления n-ого треугольного числа

import java.util.Scanner;

public class task {
    
    public static void main(String[] args) {
        
        //T = (1/2)* n * (n+1)
        int userNumber = userInput();
        System.out.println("Пользователь ввел число " + userNumber);
        Double findNumber = (0.5 * userNumber * (userNumber+1));
        int outputNumber = findNumber.intValue();
        System.out.println(outputNumber);
        
    }

    public static Integer userInput()
    {
        
        Scanner in = new Scanner(System.in);
        System.out.print("Введите число: ");
        int number = in.nextInt();
        in.close();
        return number;

    }

}