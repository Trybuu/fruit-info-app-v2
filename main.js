async function start(){
    try{
        const response = await fetch("https://www.fruityvice.com/api/fruit/all");
        const data = await response.json();
        console.log(data);
    }catch(e){
        console.log("There was a problem with fetching the data");
    }
    
}

start();