//Services:Metotların gruplandırıldığı klasör
//default:Dışarıdan userServices import edildiğinde default olarak UserService sınıfının import edilmesini sağlar
export default class UserService {
    constructor(loggerService) {
        this.users = []
        this.loggerService = loggerService
    }
    add(user) {
        this.users.push(user)
        this.loggerService.log(user)
    }

    list() {
        return this.users
    }

    getById(id) {
        //find:Verilen şarta göre bir veri döndürür
        return this.users.find(u => u.id === id)
    }


}