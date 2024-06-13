function async(a,callback){
    console.log("Hello",a);
    setTimeout(function(){
        callback(10,2)
    }, 5000);
}

function div(a,b){
    let c=a/b;
    console.log("div:"+c);
}

async("Multiplication",div)