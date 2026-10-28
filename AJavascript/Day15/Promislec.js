let p = new Promise(function(resolve,reject){
    console.log("your order");

     resolve("SS");
    reject("FF");
    
});

console.log(p);
