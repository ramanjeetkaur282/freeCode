const smallestCommons=function(arr){
    const [min,max]=arr.sort((a,b)=>a-b);
    const range=Array(max-min+1)
    .fill(0)
    .map((_,i)=>i+min);
    console.log(range);
    const upperBound=range.reduce((prod,curr)=>prod*curr);
    console.log("UpperBound",upperBound);
    for(let i=max;i<upperBound;i+=max){
        const divisible=range.every((value)=>i%value===0);
        console.log("Divisible",divisible);
        if(divisible) r
        return i;
        console.log(i);
    }
    return arr;
}

smallestCommons([1,5]);