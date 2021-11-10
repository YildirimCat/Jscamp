//userComponents kullanıcının ekranda gördüğü her şeydir.

import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component eklendi.")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Müslüm","Gürses","Aksaray");
let user2 = new User(2,"Kara","Gözlü","Aksaray");

//Kullanıcı ekleme sayfası
userService.add(user1)
userService.add(user2)

//Kullanıcıları listeleme sayfası
console.log(userService.list())

//Kullanıcı detaylarına gidilen sayfa
console.log(userService.getById(2))
