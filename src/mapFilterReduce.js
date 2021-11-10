//Sepetteki nesneler
let cart = [
    {id:1,productName:"Telefon",quantity:3,unitPrice:4000},
    {id:2,productName:"Bardak",quantity:2,unitPrice:30},
    {id:3,productName:"Kalem",quantity:1,unitPrice:20},
    {id:4,productName:"Şarj cihazı",quantity:2,unitPrice:100},
    {id:5,productName:"Kitap",quantity:3,unitPrice:30},
    {id:6,productName:"Pot",quantity:5,unitPrice:150},
]

//map():Dizide dolaşır ve istenilene göre yeni bir array döndürebilir
//Birden fazla satır için {} curly bracket kullanılır
cart.map(product=>{
    console.log(product.productName + " : " + product.quantity*product.unitPrice)
})


//filter():Filtreleme durumlarında kullanılır
//Yeni bir array oluşturup onu döndürebilir
let quantityOver2 = cart.filter(product=>product.quantity > 2)
console.log(quantityOver2);

//reduce():Arrayde dolaşır ve toplanmış(accumulated) sonucu döndürür
//Çok sık kullanılmaz
let total = cart.reduce((acc,product)=>acc + product.unitPrice*product.quantity,0)
console.log(total)












//Ruhsat nesnesini sepete ekler
function addToChart(sepet) {
    sepet.push({id:7,productName:"Ruhsat",quantity:1,unitPrice:20})
}

addToChart(cart)
console.log(cart)

