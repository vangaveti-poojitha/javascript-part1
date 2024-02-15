document.getElementById('button').onclick=function(){
    const visa=document.getElementById('visa').checked
    const master=document.getElementById('mastercard').checked
     const paypal=document.getElementById('paypal').checked
    if(visa){
        console.log('visa');
    }
    else if(master){
        console.log('master');
    }
    else if(paypal){
        console.log('paypal');
    }
    else{
        console.log('pls check one');
    }
}