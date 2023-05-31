const convertHTML=function(str){
    const htmlEntities={
        "&":"&amp;",
        ">":"&gt;",
        "<":"&lt;",
        "'":"&apos;",
        '"':"&quot;"
    }
    console.log(str.split("").map(entity=>htmlEntities[entity]||entity).join(""));
    return str.split("").map(entity=>htmlEntities[entity]||entity).join("");
}

convertHTML("Dolce & Gabbana");
