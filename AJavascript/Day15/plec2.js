let p = new Promise(function(resolve,reject){
    console.log("your order");

    resolve("SS");
    reject("FF");
    
});

p
.then(function(resolve){
    console.log(resolve);
    
})

.catch(function(reject){
    console.log(reject);
    
});
