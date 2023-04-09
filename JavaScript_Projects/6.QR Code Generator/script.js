const qrText=document.querySelector('#qr-Text')
const sizes=document.querySelector('#sizes')
const qrContainer=document.querySelector('#qr-Container')
const error=document.querySelector('.error');

//generate button
const  generate=()=>{
    if(qrText.value.length>0){
        generateQRcode();
        error.classList.remove('active')
    }else
    {
        error.classList.add('active')
    }
   
};

// download button
const download=()=>{
    
}

sizes.addEventListener('change',(e)=>{
    size=e.target.value;
})

let size=sizes.value;
const generateQRcode=()=>{
    qrContainer.innerHTML="";
    new QRCode(qrContainer,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:'#FFFFFF',
        colorDark:'#141D2F',

    })
}