const apiKey='47530343367936e133c62869ed49faf8';

const baseURL='https://api.themoviedb.org/3';
const imageBaseURL='https://image.tmdb.org/t/p/original';


//categories 
const contentCategories={
    genre:'/genre/movie/list?api_key=',
    treandingAllDay:'/trending/all/day?api_key=',
    leatest:'/movie/latest?api_key=',
    nowPlaying:'/movie/now_playing?api_key=',
    popular:'/movie/popular?api_key=',
    topRated:'/movie/top_rated?api_key=',
    upComing:'/movie/upcoming?api_key=',

}

//Bootup
const init=()=>{
    fetch_And_Build_Genre();
}

const content=document.querySelector('#content')

const fetch_And_Build_Genre=()=>{
    fetch(`${baseURL}${contentCategories.genre}${apiKey}`)
    .then(response => response.json())
    .then(result=>{
        const categories=result.genres
        categories.forEach((val)=>{
            let contentCategories=document.createElement('div');
            contentCategories.classList.add('carousel')
            contentCategories.innerHTML=val.name;
            content.appendChild(contentCategories)
            console.log(`${val.id}=${val.name}`);
        })
    })
    .catch(error=>console.log('error',error));

}



// const fetchAndBuildMovieSection=(categories)=>{
//     // let categories_name=categories.id
//     console.log(categories)
// }

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
