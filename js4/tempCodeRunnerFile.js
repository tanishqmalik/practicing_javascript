async function twice(){
    try{

        const message2= await getvaluewithDelay("happy",250)
        console.log(message2);
    }
    catch (e){
        console.error(e)
    }
    finally{
        console.log("finally")
    }
}