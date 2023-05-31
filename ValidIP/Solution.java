import java.util.*;
import java.lang.*;
import java.io.*;

/*
 * inputArr, represents the list containing N elements.
 */
public class Solution
{
	public static void  funcMeanMode(int[] inputArr)
	
	{   int[] ans=new int[2];
		
		int index = 0  ;
        int soFar = 1 ; 
        int count = 1 ; 
		int sum = 0;
		int mean= sum / inputArr.length;
           for (int i = 0; i < inputArr.length; i++) {
        sum += inputArr[i];
    }
                
        for(int k =1;   k < inputArr.length; k++){

            if (inputArr[k-1] == inputArr[k]){
                count++ ; }
            if(count > soFar)
            { 
                soFar = count ; 
                index = k ; 
            }
            else {
                count = 1 ; 
            }
        }
        int mode= inputArr[index] ; 
		ans[0]=mean;
		ans[1]=mode;
		System.out.println(ans);
	}

	public static void main(String[] args)
	{
		Scanner in = new Scanner(System.in);
		//input for inputArr
		int inputArr_size = in.nextInt();
		int inputArr[] = new int[inputArr_size];
		for(int idx = 0; idx < inputArr_size; idx++)
		{
			inputArr[idx] = in.nextInt();
		}
		
		
		funcMeanMode(inputArr);
	}
}