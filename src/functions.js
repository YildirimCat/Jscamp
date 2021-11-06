//Default argument:Elma
//Default argumentları func. imzasının sonlarına koymak iyi bir yaklaşımdır.
function addToCart(quantity,productName="Elma") {
    console.log("Sepete Eklendi: " + productName + " adet: " + quantity);
}

addToCart(5);
addToCart("Yumurta",20);
addToCart("Limon",10);


//Arrow function:Tıpkı normal veri tipi gibi tanımlanır.
let sayHello = ()=>{
    console.log("Hello world!");
}
sayHello();

//Arrow operatörü olmadan kullanım
let sayHello2 = function(){
    console.log("Hello world 2!");
}
sayHello2();

//Object creation
let product1 = {productName:"Elma",unitPrice:10,quantity:5}

//Takes an object as an argument
function addToCart2(product){
    console.log("Ürün: " + product.productName)
    console.log("Birim fiyatı: " + product.unitPrice)
    console.log("Adet: " + product.quantity)    
}
addToCart2(product1);

let product2 = {productName:"Elma",unitPrice:10,quantity:5}
let product3 = {productName:"Elma",unitPrice:10,quantity:5}

//Önemli!
product2 = product3
product2.productName = "Karpuz"
//Prints Karpuz:Reference Type
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
//Prints 20:Value Type
console.log(sayi1)

//Birden fazla ürünü(nesneyi) sepete ekle
function addToCart3(products){
    console.log(products)
}

//Array 3 tane nesneyi tutuyor
let products = [
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5},
    {productName:"Muz",unitPrice:10,quantity:5}
]

addToCart3(products)

//Rest operatörü:Toplama-->(Variable argument in java)
//Rest operatörünü de yine en son argüman olarak kullanmak iyi yaklaşımdır
function add(param,...numbers){
    let total = 0
    for(let i = 0;i < numbers.length;i++){
        total += numbers[i]
    }
    console.log(param)
    console.log(total)
}

add(20,30)

//Spread işlemi:Ayrıştırma
let numbers = [1,5,12,68]
console.log(Math.max(...numbers))
//console.log(Math.max(1,5,12,68))

//Destruction
//Arrayin ilk nesnesi icAnadolu değişkenine atıldı
//4.eleman bir dizi ve onun içindeki dizileri de ayrı ayrı destruct edebiliriz
let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]] = [
    {name:"İç Anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"},
    [
        ["Aksaray","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]

console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(marmara)
console.log(karadeniz)
console.log(icAnadoluSehirleri)
console.log(marmaraSehirleri)
console.log(karadenizSehirleri)


//Nesnelerde destruction kullanımı
let newProductName,newUnitPrice,newQuantity
({ productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity}
     = {productName:"Elma",unitPrice:10,quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)