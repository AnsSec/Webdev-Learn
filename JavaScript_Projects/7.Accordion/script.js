const item = document.querySelectorAll(".item");
const open = document.querySelectorAll(".iconOpen");
const close = document.querySelectorAll(".iconClose");

item.forEach((item, Index) => {
    close.forEach((close) => {
        close.style.display = 'none';
    })
    item.addEventListener('click', () => {
        const result = item.classList.toggle('active');
        if (result) {
            close.forEach((closeitem, closeIndex) => {
                if (closeIndex === Index) {
                    closeitem.style.display = "block";
                }
                else {
                    closeitem.style.display = "none";
                }
            })
            open.forEach((openItem, openIndex) => {
                if (openIndex === Index) {
                    openItem.style.display = "none";
                } else {
                    openItem.style.display = "block";
                }
            });
        }
        else {
            close.forEach((closeItem) => {
                closeItem.style.display = 'none';
            });
            open.forEach((openItem) => {
                openItem.style.display = 'block';
            });
        }

    });

});
