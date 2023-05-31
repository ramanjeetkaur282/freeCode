const dropElements=function(arr,func){
    console.log(arr.length>0 && !func(arr[0])?(dropElements(arr.slice(1),func)):arr);
    return arr.length>0 && !func(arr[0])?(dropElements(arr.slice(1),func)):arr;
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;})