//form loading

// const form = [...document.querySelector('.form').children];

// form.forEach((item, i) => {

//     setTimeout(() => {

//         item.getElementsByClassName.opacity = 1;

//     }, 1*100    )

// })


const form = [...document.querySelector('.form').children];

form.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 1;
    }, i*100);
})