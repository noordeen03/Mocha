var MyClass = require("../src/MyClass");
var object = new MyClass();
var chai = require("chai");
var expect = chai.expect;
var sinon = require("sinon");
var chaiAsPromise = require("chai-as-promised");
chai.use(chaiAsPromise);

describe.skip("Test Suit",function(){
    it("Test the add method",function(){
        expect(object.add(3,1)).to.be.equal(4);
    });

    it("Spy the add functions",function(){
        //Spying on a function that is like how many times it is called , with what parameters kind of stuffs.
        var spy = sinon.spy(object,"add");
        var args1 = 10;
        var args2 = 20;
        object.callAnotherFunc(args1,args2);
        expect(spy.calledOnce).to.be.true;
    });

    it("Mock the sayHello functions",function(){
        //Mock is used to test the function but actually not by executing it.test only whether it is invoked or not.
        //Function that does not have impact on the calling function
        var mock = sinon.mock(object);
        var expectation = mock.expects("sayHello");
        expectation.exactly(1);
        object.callAnotherFunc(10,20);
        mock.verify();
    });

});

describe.skip("Test Suit for stub",function(){
    it("Stub the add method",function(){
        //Assume that the function going to return particular value and proceeding on as it is expected is known as stub
        var stub = sinon.stub(object,"add");
        stub.withArgs(10,20).onFirstCall().returns(100).onSecondCall().returns(200);
        expect(object.callAnotherFunc(10,20)).to.be.equal(100);
        expect(object.callAnotherFunc(10,20)).to.be.equal(200);
    });

});

describe("Test Suit for promises",function(){
        it("test the promises",function(){
            this.timeout(0);
            // object.testPromise().then(function(result){
            //     expect(result).to.be.equal(300);
            //     done();
            // }); 
            return expect(object.testPromise()).to.eventually.equal(60);
        });
}); 