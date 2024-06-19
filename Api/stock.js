

async function super_hero(url){
    try{
        const response = await fetch(url);
        const result = await response.json();
        // const ticker = result.ticker
        // console.log('ticker:',ticker)
        // const v= result.results.v;
        // console.log(v)


        console.log(result)
    } catch(error) {
        console.error(error)
    }
    finally{
        console.log("Finished")
    }
}

super_hero(`https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?apiKey=gAgHMYHvySylOiiE2FKpJ5PyRqpkFRel`)