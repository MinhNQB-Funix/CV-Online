const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const info = document.getElementById('personal-info-auth-open');
const emailForm = document.getElementById('emailCheck');
const auth = document.getElementById('personal-info-auth-locked')

info.classList.add('hide');

emailForm.addEventListener('submit', (placeholder) => {
    placeholder.preventDefault()
    if (regex.test(document.getElementById("emailField").value)) {
        info.classList.remove('hide')
        auth.classList.add('hide')
    }
    else {
        alert("sai cu phap email!")
    }
});

let extension = 1;
const extendButton = document.getElementById('extendButton');
const cardsContent = document.querySelectorAll('.cardcontent');

cardsContent.forEach(param => param.classList.add('hide'));
extendButton.addEventListener('click', () => {
    console.log("a")
    if(extension) {
        cardsContent.forEach(param => param.classList.remove('hide'));
        extendButton.textContent = "Collapse Cards"
        extension = 0
    } else {
        cardsContent.forEach(param => param.classList.add('hide'));
        extendButton.textContent = "Extend Cards"
        extension = 1
    }
})


