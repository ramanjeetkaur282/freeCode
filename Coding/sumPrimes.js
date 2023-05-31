const sumPrimes=function(num){
    function isPrime(num){
        const sqrt=Math.sqrt(num);
        for(let i=2;i<=sqrt;i++){
            if(num%i===0) return false;
        }
        return true;

    }
    let sum=0;
    for(let i=2;i<=num;i++){
        if (isPrime(i)){
            sum+=i;
        }
    }
    console.log(sum);
    return sum;
}

sumPrimes(10);