const ApiKey=require('dotenv');

// scroll animation 
const navBar=document.querySelector('#navBar');
const handleScroll = () => {
    const scrollvall=window.scrollY;
    navBar.classList.remove('active');
    if (scrollvall>1){
        navBar.classList.add('active');
    }else{
        navBar.classList.remove('active');
    }
};
window.addEventListener('scroll',handleScroll);
