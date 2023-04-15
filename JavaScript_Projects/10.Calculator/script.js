const input=document.querySelectorAll('.btninput');
const output=document.querySelector('#inputBox');

let string="";
let inputarr=Array.from(input);

inputarr.forEach(input=>{
    input.addEventListener('click',(e)=>{
        if(e.target.innerHTML==='='){
            string=eval(string);
            output.value=string;
        }
        else if(e.target.innerHTML==='AC'){
            string="";
            output.value=string;
        }
        else if(e.target.innerHTML==='DEL'){
            string = string.substring(0,string.length-1);
            output.value=string
        }
        else{
            string += e.target.innerHTML;
        output.value= string;
        }
        
    })

})
