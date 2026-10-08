let name = ["Aryan", "Shub" ,"Anitamax","urmmm", "yoyoyo" ,"aino","raiden"]

let a = name.findIndex((value) => {
return value === "yoyoyo";
});
console.log(a);

let b = name.join(" ");
console.log(b);


let f = [10,30,20,40,22,50,343,24209,32,34,43985,234,5437];
f.sort(function(a,b){
    return a - b;

});
console.log(f);

f.sort(function(a,b){
    return b - a;

});
console.log(f);

let dc = name.slice(0,2);
console.log(dc);

let cd = name.slice(1,5);
console.log(cd);

