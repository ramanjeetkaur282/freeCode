const oddSum=function(num){
    let prev=0;
    let curr=1;
    let sum=0;
    while(curr<=num){
        if(curr%2!==0){
            sum+=curr;
        }
        console.log("Current",+curr);
        console.log("Previous",+prev);
        curr+=prev;
        prev=curr-prev;
    }
    console.log(sum);
    return sum;
}

oddSum(4000000);