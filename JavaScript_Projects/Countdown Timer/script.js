const endDate="30 April 2023 01:24 PM"
const newDate=document.querySelector("#end-date")
newDate.innerText=endDate;

function clock(){
    const end=new Date(endDate);
    const now=new Date();
    const diff=(end-now)/1000;
    console.log(diff)

    // conver to days 

}

clock();