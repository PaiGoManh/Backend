let controller = new AbortController()

const apiCall = async () =>{
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/todos",{
            signal: controller.signal
        });
        console.log(await res.json());
    }catch(err){
        if(err.name === "AbortError"){
            console.log("Fetch API Aborted")
        }

    }
}

apiCall();
controller.abort();