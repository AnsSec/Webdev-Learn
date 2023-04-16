const apiKey='47530343367936e133c62869ed49faf8';

const ApiEndpoint='https://api.themoviedb.org/3';
const Apipath={
    fetchAllCategories:`${ApiEndpoint}/genre/movie/list?api_key=${apiKey}&language=en-US`
}


//Bootup
const init=()=>{
    fetch_And_Build_AllSection();
}

const fetch_And_Build_AllSection=()=>{
    fetch(Apipath.fetchAllCategories)
    .then(res=>res.json())
    .then(res=>{
        const categories=res.genres;
        if(Array.isArray(categories)&&categories.length)
        {
           categories.forEach(categories=>{
            fetchAndBuildMovieSection(categories);
           })
        }
        // console.table(categories) 
    })
    .catch(err=>console.log(err))
}

const fetchAndBuildMovieSection=(categories)=>{
    console.log(categories)
}

window.addEventListener('load',()=>{
    init();
})

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
