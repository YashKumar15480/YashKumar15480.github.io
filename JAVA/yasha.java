import java.util.*;

/**
 * yasha
 */
// public class yasha {

//     public static void main(String[] args) {
        
//         Scanner sc = new Scanner(System.in);
        
//         String name[] = new String[200];
//         int am_don[] = new int[200];

//         System.out.print("Total number of data entered = ");
//         int n=sc.nextInt();

//         System.out.println("Enter "+n+" names");
//         for(int i=0;i<n;i++)name[i]=sc.next();

//         System.out.println("Enter "+n+" donations");
//         for(int i=0;i<n;i++)am_don[i]=sc.nextInt();
        
//         int sum=0;
//         for(int i=0;i<n;i++)sum=sum+am_don[i];
//         System.out.println("Total amount collected as donation = "+sum);


//         int highest = 0;
//         int index = 0;
//         for(int i=0;i<n;i++)
//             {
//                 if(am_don[i]>highest) 
//                 {
//                     highest=am_don[i];
//                     index = i;
//                 } 
//         }  


//         System.out.println("highest donor = "+name[index]+" : "+ am_don[index]);


//     }
// }

public class yasha {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        String name;
        double amount;
        String highestDonor = "";
        double highestAmount = 0;
        
        for (int i = 1; i <= 4; i++) {
            System.out.print("Enter name of donor #" + i + ": ");
            name = scanner.nextLine();

            System.out.print("Enter amount donated by " + name + ": $");
            amount = scanner.nextDouble();
            scanner.nextLine(); 

            if (amount > highestAmount) {
                highestDonor = name;
                highestAmount = amount;
            }
        }
        
        System.out.println("\nThe highest donor is " + highestDonor + " with a donation of $" + highestAmount);
    }
}
