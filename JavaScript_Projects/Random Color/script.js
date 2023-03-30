const btn=document.querySelector('#btn');
const colorCode=document.querySelector('#color-code');

//random color generator
const getColor = () => {
    const randomNumber=Math.floor(Math.random()*16777215);
    const randomHexCode=`#${randomNumber.toString(16)}`
    document.body.style.backgroundColor=randomHexCode;
    colorCode.innerText=randomHexCode;
    navigator.clipboard.writeText(randomHexCode);
}

//initial code
getColor();

//event lisner
btn.addEventListener('click',getColor);