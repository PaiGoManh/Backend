let promise= new Promise(function (resolve, reject) {
    const num = Math.random();
    const a=.3;
    console.log("num",num)
    if(num >= 0.5){
        resolve(a);
    }else{
        reject("Promise failed");
    }
});

promise
    .then(function (msg) {
        console.log(msg);
    }).
        catch(function(errmsg) {
            console.log(errmsg);
        })
    .finally( function (){
        console.log("Always display")
    })
