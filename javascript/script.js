const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//tính năng nhập email & hiện thông tin cá nhân
const info = document.getElementById('personal-info-auth-open');
const emailForm = document.getElementById('emailCheck');
const auth = document.getElementById('personal-info-auth-locked')
const hideButtonPI = document.getElementById('hidePersonalInfo')

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

//nút ẩn thông tin cá nhân
hideButtonPI.addEventListener('click', () => {
        info.classList.add('hide')
        auth.classList.remove('hide')
    });

//ẩn các phần cần thiết trong phần thông tin nghề nghiệp

const cardsContent = document.querySelectorAll('.cardcontent');
cardsContent.forEach(param => param.classList.add('hide'));
const extendButtons = document.querySelectorAll('.extendButton');
extendButtons.forEach(param => param.classList.add('trans'));

//chức năng của phần kinh nghiệm

let jobextension = 1;
const jobcardbutton = document.getElementById('jobcardbutton');
const jobcontent = document.getElementById('jobcardcontent')

jobcardbutton.addEventListener('click', () => {
    // console.log("a")
    if(jobextension) {
        jobcontent.classList.remove('hide');
        jobcardbutton.textContent = "Collapse"
        jobextension = 0
    } else {
        jobcontent.classList.add('hide');
        jobcardbutton.textContent = "Extend"
        jobextension = 1
    }
})
const jobcardarea = document.querySelector('.experience')

jobcardarea.addEventListener('mouseenter', () => jobcardbutton.classList.remove('trans'))
jobcardarea.addEventListener('mouseleave', () => jobcardbutton.classList.add('trans'))

//chức năng của phần học vấn

let jobextension2 = 1;
const jobcardbutton2 = document.getElementById('jobcardbutton2');
const jobcontent2 = document.getElementById('jobcardcontent2')

jobcardbutton2.addEventListener('click', () => {
    // console.log("a")
    if(jobextension2) {
        jobcontent2.classList.remove('hide');
        jobcardbutton2.textContent = "Collapse"
        jobextension2 = 0
    } else {
        jobcontent2.classList.add('hide');
        jobcardbutton2.textContent = "Extend"
        jobextension2 = 1
    }
})
const jobcardarea2 = document.querySelector('.education')

jobcardarea2.addEventListener('mouseenter', () => jobcardbutton2.classList.remove('trans'))
jobcardarea2.addEventListener('mouseleave', () => jobcardbutton2.classList.add('trans'))

//chức năng của phần hoạt động

let jobextension3 = 1;
const jobcardbutton3 = document.getElementById('jobcardbutton3');
const jobcontent3 = document.getElementById('jobcardcontent3')

jobcardbutton3.addEventListener('click', () => {
    // console.log("a")
    if(jobextension3) {
        jobcontent3.classList.remove('hide');
        jobcardbutton3.textContent = "Collapse"
        jobextension3 = 0
    } else {
        jobcontent3.classList.add('hide');
        jobcardbutton3.textContent = "Extend"
        jobextension3 = 1
    }
})
const jobcardarea3 = document.querySelector('.activity')

jobcardarea3.addEventListener('mouseenter', () => jobcardbutton3.classList.remove('trans'))
jobcardarea3.addEventListener('mouseleave', () => jobcardbutton3.classList.add('trans'))

//chức năng của phần sở thích

let jobextension4 = 1;
const jobcardbutton4 = document.getElementById('jobcardbutton4');
const jobcontent4 = document.getElementById('jobcardcontent4')

jobcardbutton4.addEventListener('click', () => {
    // console.log("a")
    if(jobextension4) {
        jobcontent4.classList.remove('hide');
        jobcardbutton4.textContent = "Collapse"
        jobextension4 = 0
    } else {
        jobcontent4.classList.add('hide');
        jobcardbutton4.textContent = "Extend"
        jobextension4 = 1
    }
})
const jobcardarea4 = document.querySelector('.hobby')

jobcardarea4.addEventListener('mouseenter', () => jobcardbutton4.classList.remove('trans'))
jobcardarea4.addEventListener('mouseleave', () => jobcardbutton4.classList.add('trans'))

//chức năng của phần ngôn ngữ

let jobextension5 = 1;
const jobcardbutton5 = document.getElementById('jobcardbutton5');
const jobcontent5 = document.getElementById('jobcardcontent5')

jobcardbutton5.addEventListener('click', () => {
    // console.log("a")
    if(jobextension5) {
        jobcontent5.classList.remove('hide');
        jobcardbutton5.textContent = "Collapse"
        jobextension5 = 0
    } else {
        jobcontent5.classList.add('hide');
        jobcardbutton5.textContent = "Extend"
        jobextension5 = 1
    }
})
const jobcardarea5 = document.querySelector('.language')

jobcardarea5.addEventListener('mouseenter', () => jobcardbutton5.classList.remove('trans'))
jobcardarea5.addEventListener('mouseleave', () => jobcardbutton5.classList.add('trans'))

//chức năng của phần kỹ năng

let jobextension6 = 1;
const jobcardbutton6 = document.getElementById('jobcardbutton6');
const jobcontent6 = document.getElementById('jobcardcontent6')

jobcardbutton6.addEventListener('click', () => {
    // console.log("a")
    if(jobextension6) {
        jobcontent6.classList.remove('hide');
        jobcardbutton6.textContent = "Collapse"
        jobextension6 = 0
    } else {
        jobcontent6.classList.add('hide');
        jobcardbutton6.textContent = "Extend"
        jobextension6 = 1
    }
})
const jobcardarea6 = document.querySelector('.skill')

jobcardarea6.addEventListener('mouseenter', () => jobcardbutton6.classList.remove('trans'))
jobcardarea6.addEventListener('mouseleave', () => jobcardbutton6.classList.add('trans'))