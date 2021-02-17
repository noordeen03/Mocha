class MyClass{
    constructor(){
        console.log("Initiated...");
    }

    add = (a,b) => a+b ;

    sayHello(){
        console.log("Hello World");
    }

    callAnotherFunc = (a,b) => {this.sayHello();return this.add(a,b);}

    testPromise(){
        return new Promise(function(resolve,reject){
            setTimeout(()=> resolve(3),2000);
        }).then(function(result){
            return result * 10;
        });
    }

}

module.exports = MyClass;