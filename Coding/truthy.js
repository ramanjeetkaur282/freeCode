const truthy=function(collection,pre)
{
    console.log(
        collection.every
        (
            function(element)
        {
        return element.hasOwnProperty(pre) && Boolean(element[pre])
        }
        )
        );
    return collection.every(function(element){
        return element.hasOwnProperty(pre) && Boolean(element[pre])
    })
}

truthy([
{name: "Quincy", role: "Founder", isBot: false}, 
{name: "Naomi", role: "", isBot: false}, 
{name: "Camperbot", role: "Bot", isBot: true}],
 "isBot");