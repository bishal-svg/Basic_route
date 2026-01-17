const DBconnection=async ()=>{
    try{
        await mongoose.connect()

    }
    catch(err){
console.log(err)
    }
}