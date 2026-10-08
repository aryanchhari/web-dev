let name = ["Aryan", "Shub" ,"Anitamax","urmmm", "yoyoyo" ,"aino","raiden"]
// for (let a = 0; a<2; a++){
//     console.log(name[a]);
// }

// for (let a = 1; a<4; a++){
//     console.log(name[a]);
// }

for (let a = 6; a>=0; a--){
    console.log(name[a]);
}

name.forEach(function(value) {
    console.log(value);
});

let result = name.map(function(value){
    return value.toUpperCase()

});
console.log(result);

let me = name.filter(function(value){
return value.length > 4
});
console.log(me);

let cc = [10,20,30,40,50,60,70,80];
let ab = cc.filter(function(value){
    return value > 20

});
console.log(ab);

let cb = [10,20,30,40,50,60,70,80];
console.log(cb.find(x => x > 20));




