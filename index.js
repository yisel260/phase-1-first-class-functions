function receivesAFunction (sayHi){
    return sayHi();
}
receivesAFunction(function(){return 'Hello!'});

function sayHi(){
    console.log ('Hello!')
}
function  returnsANamedFunction(){ 
    return sayHi

}
function returnsAnAnonymousFunction (){
    return function () {
        sayHi();
        
    }
}