console.log("Merhaba Stannis Kralım!")

//var yerine let kullanılır.
//var keywordü ile tanımlanan değişken her blokta manipüle edilebiliyor.
//Bu istemediğimiz bir şeydir.
//Farklı bloklardaki aynı isimli değişkenler birbirinden etkilenmemelidir.
//Buna block scope denir.


let dolarDun = 9.20
let dolarBugun = 9.30

//JS typesafe değildir!
// dolarBugun = "Jon" bu geçerlidir.

console.log(dolarBugun)

//dolarYarın undefined
//console.log(dolarYarın)

const euroDun = 11.2
// euroDun = 11 euroDun const oldugu için read-only'dir.
//const keywordü de block scope'a sahiptir.
console.log(euroDun)


//Arrays
//Arrayler içinde her tipte veri aynı anda saklanabilir. 
let konutKredileri = ["Konut kredisi","Emlak konut kredisi","Kamu konut kredisi"]

//Arraydeki elemanları yazdır.
console.log(konutKredileri)

//Arraydeki verileri html üreterek yazdırdık.
console.log("<ul>")
for(let i = 0;i < konutKredileri.length;i++){
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")

