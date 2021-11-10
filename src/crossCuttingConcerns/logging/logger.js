//crossCuttingConcerns:Loglama,doğrulama ve cache barındıır.
//DI uygulandı.
export class BaseLogger {
    log(data) {
        console.log("Default logger: " + data)
    }
}
export class ElasticLogger extends BaseLogger {
    //override
    log(data) {
        console.log("Logged to Elastic: " + data)
    }
}
export class MongoLogger extends BaseLogger {
    //override
    log(data) {
        console.log("Logged to Mongo: " + data)
    }
}