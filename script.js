let qrurl="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let img=document.querySelector('.img');
let imgforqr=document.querySelector('.imgofqr').classList;
console.log(imgforqr);
function myfunction(){
    let myimg=document.getElementsByClassName("myimg");
    let inpfield=document.querySelector('.inpfield input').value;
    if(inpfield.length>0){
        console.log(inpfield);
    img.src=`${qrurl+inpfield}`;
    imgforqr.add('anotherclass');  
    }
    else{
        img.src="https://images.unsplash.com/photo-1525785967371-87ba44b3e6cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVycm9yfGVufDB8fDB8fHww";
        imgforqr.add('anotherclass'); 
    }
     
}
