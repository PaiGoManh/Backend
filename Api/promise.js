let sum= new Promise(function (resolve, reject) {
    const a=10;
    const b=2;
    const c=a+b;
    if(c>15){
        resolve();
    }else{
        reject();
    }
});

sum.
    then(function () {
        console.log("C is greater than 15");
    }).
        catch(function() {
            console.log("C is less than 15");
        });
