const apiKey='47530343367936e133c62869ed49faf8';

const baseURL='https://api.themoviedb.org/3';
const imageBaseURL='https://image.tmdb.org/t/p/original';


//categories 
const contentCategories={
    // genre:'/genre/movie/list?api_key=',
    treandingAllDay:'/trending/all/day?api_key=',
    nowPlaying:'/movie/now_playing?api_key=',
    popular:'/movie/popular?api_key=',
    topRated:'/movie/top_rated?api_key=',
    upComing:'/movie/upcoming?api_key=',

}

//Bootup
    

const content=document.querySelector('#content')


const carousel_1=document.querySelector('.carousel_1')
const fetch_And_treandingALLday=()=>{
    fetch(`${baseURL}${contentCategories.treandingAllDay}${apiKey}`)
    .then(response=>response.json())
    .then(result=>{
    const moviesIMG=result.results
    moviesIMG.forEach((val)=>{
        const poster_url=`${imageBaseURL}${val.poster_path}`
        let imagecontent=document.createElement('img');
            imagecontent.src=poster_url;
            carousel_1.appendChild(imagecontent)
        // console.log(poster_url)
    })
    })
    .catch(error=>console.log('error',error))

}

const carousel_2=document.querySelector('.carousel_2')
const fetch_And_nowPlaying=()=>{
    fetch(`${baseURL}${contentCategories.nowPlaying}${apiKey}`)
    .then(response=>response.json())
    .then(result=>{
        const moviesIMG=result.results
        moviesIMG.forEach((val)=>{
        const poster_url=`${imageBaseURL}${val.poster_path}`
        let imagecontent=document.createElement('img');
            imagecontent.src=poster_url;
            carousel_2.appendChild(imagecontent)
        // console.log(poster_url)
    })
    })
    .catch(error=>console.log('error',error))
}

const carousel_3=document.querySelector('.carousel_3')
const fetch_And_Popular=()=>{
    fetch(`${baseURL}${contentCategories.popular}${apiKey}`)
    .then(response=>response.json())
    .then(result=>{
        const moviesIMG=result.results
        moviesIMG.forEach((val)=>{
        const poster_url=`${imageBaseURL}${val.poster_path}`
        let imagecontent=document.createElement('img');
            imagecontent.src=poster_url;
            carousel_3.appendChild(imagecontent)
        // console.log(poster_url)
    })
    })
    .catch(error=>console.log('error',error))
}

const carousel_4=document.querySelector('.carousel_4')
const fetch_And_TopRated=()=>{
    fetch(`${baseURL}${contentCategories.topRated}${apiKey}`)
    .then(response=>response.json())
    .then(result=>{
        const moviesIMG=result.results
        moviesIMG.forEach((val)=>{
        const poster_url=`${imageBaseURL}${val.poster_path}`
        let imagecontent=document.createElement('img');
            imagecontent.src=poster_url;
            carousel_4.appendChild(imagecontent)
        // console.log(poster_url)
    })
    })
    .catch(error=>console.log('error',error))
}


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


fetch_And_treandingALLday();
fetch_And_nowPlaying();
fetch_And_Popular();
fetch_And_TopRated();