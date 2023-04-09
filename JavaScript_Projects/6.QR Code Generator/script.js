const qrText = document.querySelector('#qr-Text')
const sizes = document.querySelector('#sizes')
const qrContainer = document.querySelector('#qr-Container')
const error = document.querySelector('.error');
const download=document.querySelector('#download')
//generate button
const generate = () => {
    isEmptyInput();
};

// download button
const downloadbtn = () => {
    let image=document.querySelector('#qr-Container img');
    if(image!==null){
        error.classList.remove('active')
        let imageArr=image.getAttribute('src')
        download.setAttribute('href',imageArr)
    }else{
        error.classList.add('active')
    }
}

const isEmptyInput = () => {
    qrText.value.length > 0 ? [generateQRcode(), error.classList.remove('active')] : error.classList.add('active');
}

sizes.addEventListener('change', (e) => {
    size = e.target.value;
    isEmptyInput();
})

let size = sizes.value;
const generateQRcode = () => {
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: qrText.value,
        height: size,
        width: size,
        colorLight: '#FFFFFF',
        colorDark: '#141D2F',

    })
}