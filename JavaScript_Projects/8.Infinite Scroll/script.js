const container = document.querySelector('.container');

let limit = 4;
let pageCount = 1;
let postCount = 1;

const getPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`);
    const data = await response.json();
    console.log(data);

    data.map((currEle, Index) => {
        const htmlData = `
            <div class="post">
            <p class="post-id">${postCount++}</p>
            <h2 class="title">${currEle.title}</h2>
            <p class="post-info">${currEle.body}></p>
            </div>`

            container.insertAdjacentHTML('beforeend',htmlData);
    });
};


getPost();

window.addEventListener('scroll',()=>{
    const {scrollHeight,scrollTop,clientHeight}=document.documentElement;
    if(scrollTop+clientHeight>=scrollHeight){
        getPost();
    }
})