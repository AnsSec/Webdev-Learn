const endDate="31 March 2023 01:24 PM"
const newDate=document.querySelector("#end-date")
newDate.innerText=endDate;

const inputs=document.querySelectorAll("input")

function clock(){
    const end=new Date(endDate);
    const now=new Date();
    const diff=(end-now)/1000;
    console.log(diff)

    // for Non negative numbers 
    if(diff<0) return;

    // convert to days 
    inputs[0].value=Math.floor(diff/3600/24);
    // convert to hours
    inputs[1].value=Math.floor(diff/3600)%24;
    // convert to minutes
    inputs[2].value=Math.floor(diff/60)%60;
    // convert to second 
    inputs[3].value=Math.floor(diff)%60;
}

// initial call 
clock();

// setInterval for update value without page refresh
setInterval(()=>{
    clock();
},1000
)
