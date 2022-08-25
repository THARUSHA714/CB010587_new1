if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw1.js')
    .then((reg)=>{
        console.log("Your Service worker is registered",reg);
    })
    .catch((err)=>{
        console.log("Your Service worker is not registered",err);
    })
}