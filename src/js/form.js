// form loading

const form = [...document.querySelector('.form').children];

form.forEach((item, i) => {

    setTimeout(() => {

        item.style.opacity = 1;

    }, i*100);

})

//validation 

const name = document.querySelector('.name') || null;
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const password = document.querySelector('.submit-btn');

if(name == null){ //means login page is open

}