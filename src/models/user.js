//model:Componentlerde kullanıcıdan alınıp API'ye gönderilen 
//veya kullanıcıya gösterilen veri tiplerine verilen genel isim

export default class User {
    constructor(id, firstName, lastName, city) {
        this.id = id;
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
    }
}