const clickCount = document.querySelector(".clickCount");
const imgContainer = document.querySelector(".imgContainer");

let likecount = 1;

const doubleclick = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');
    imgContainer.appendChild(heart);

}

imgContainer.addEventListener('dblclick', (e) => {
    clickCount.innerText = likecount++;
    doubleclick(e);
});