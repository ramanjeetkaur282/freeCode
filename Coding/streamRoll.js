const streamRoll=function(arr){
    const flat=[].concat(...arr);
    console.log(flat.some(Array.isArray)?streamRoll(flat):flat);
    return flat.some(Array.isArray)?streamRoll(flat):flat;
}

streamRoll([1, [2], [3, [[4]]]]);