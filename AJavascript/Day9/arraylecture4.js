let a = [10,20,30,40,50,60,70,80,90];

console.log(a);

a.splice(1,4);
console.log(a);

let aa = ["si","go","la","ma","po","eg","te"];
aa.splice(1,1,"Aryan" , "Fino");
console.log(aa);

let aaa = ["si","go","la","ma","po","eg","te"];
aaa.splice(0,3,"MOmo" , "San");
console.log(aaa);

let aaaa = ["si","go","la","ma","po","eg","te"];
let aaaaa = [10,20,30,40,50,60,70,80,90];
let b = aaaa.concat(aaaaa);
console.log(b);

let bb = b.every((v) => {
    return v.length >=2;
})

console.log(bb);

let bbb = b.some((z) => {
    return z === "si";

})

console.log(bbb);



