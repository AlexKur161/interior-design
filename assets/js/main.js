let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let nextFill = document.querySelector('.next-fill-svg')
let nextStroke = document.querySelector('.next-stroke-svg')
let prevFill = document.querySelector('.prev-fill-svg')
let prevStroke = document.querySelector('.prev-stroke-svg')
let info = document.querySelector('.quality-mini')
let cards = document.querySelectorAll('.card-ani')
let card = document.querySelector('.card-show')
let form = document.getElementById('form')
let formPopap = document.getElementById('form-popap')
let showPopap = document.querySelectorAll('.show-popap')
let closePopap = document.querySelector('.img-close')
let fonPopap = document.querySelector('.popap')
let shadow = document.querySelector('.shadow-screen')

fonPopap.addEventListener('click', (e) => {
    if ( e.target == shadow || e.target == closePopap ){
        fonPopap.classList.add('hide-popap') 
    }
})
showPopap.forEach(item => {
    item.addEventListener('click', (e) => {
        fonPopap.classList.remove('hide-popap')
    })    
})

next.addEventListener('click',() => {
    next.setAttribute("disabled", "")
    prev.removeAttribute("disabled")
info.classList.add('tt')
cards.forEach(item => {
    item.classList.add('ss')
}) 
card.classList.add('kk')
setTimeout(() => {
    card.classList.remove('tuprev')
    info.classList.remove('oneprev')
    cards.forEach(item => {
        item.classList.remove('friprev')
    })
},)
nextFill.classList.add('fill-svg-gray')
nextStroke.classList.add('stroke-svg-gray')
nextFill.classList.remove('fill-svg-orange')
nextStroke.classList.remove('stroke-svg-orange')
prevFill.classList.add('fill-svg-orange')
prevStroke.classList.add('stroke-svg-orange')
prevFill.classList.remove('fill-svg-gray')
prevStroke.classList.remove('stroke-svg-gray')
})

prev.addEventListener('click',() => {
    prev.setAttribute("disabled", "")
    next.removeAttribute("disabled")
    card.classList.add('tuprev')
    info.classList.add('oneprev')
    cards.forEach(item => {
        item.classList.add('friprev')
    })
    setTimeout(() => {
        info.classList.remove('tt')
        cards.forEach(item => {
            item.classList.remove('ss')
        }) 
        card.classList.remove('kk')
    },)
    prevFill.classList.remove('fill-svg-orange')
    prevStroke.classList.remove('stroke-svg-orange')
    prevFill.classList.add('fill-svg-gray')
    prevStroke.classList.add('stroke-svg-gray')
    nextFill.classList.remove('fill-svg-gray')
    nextStroke.classList.remove('stroke-svg-gray')
    nextFill.classList.add('fill-svg-orange')
    nextStroke.classList.add('stroke-svg-orange')
    })

    const validation = new JustValidate('#form');
    const validation2 = new JustValidate('#form-popap');
    let selector = document.getElementById("phone");
    let im = new Inputmask("+7(999)999-99-99");
    let selector2 = document.getElementById("phone2");
    let im2 = new Inputmask("+7(999)999-99-99");
    im.mask(selector)
    im2.mask(selector2)
        validation
        .addField('#name', [
    {
        rule: 'required',
        errorMessage: 'Введите имя'
    },
    {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Мин кл-во символов в имени 2'
    },
    {
        rule: 'maxLength',
        value: 20,
        errorMessage: 'Недопустимое количество символов'
    },
    ])
.addField('#phone', [
    {
        rule: 'required',
        errorMessage: 'Введите телефон',
    },
    {
        rule: 'minLength',
        value: 11,
        errorMessage: 'Мин кл-во символов номера 11'
    },
    {
        rule: 'maxLength',
        value: 16,
        errorMessage: 'Макс кл-во символов номера 12'
    },
    ])
    .onSuccess( async event => {
        let response = await fetch('/send.php', {
            method: 'POST',
            body: new FormData(form)
        });
        let result = await response.json();
        console.log(result)
        alert(result.message);
    })

    validation2
    .addField('#name', [
{
    rule: 'required',
    errorMessage: 'Введите имя'
},
{
    rule: 'minLength',
    value: 2,
    errorMessage: 'Мин кл-во символов в имени 2'
},
{
    rule: 'maxLength',
    value: 20,
    errorMessage: 'Недопустимое количество символов'
},
])
.addField('#phone2', [
{
    rule: 'required',
    errorMessage: 'Введите телефон',
},
{
    rule: 'minLength',
    value: 11,
    errorMessage: 'Мин кл-во символов номера 11'
},
{
    rule: 'maxLength',
    value: 16,
    errorMessage: 'Макс кл-во символов номера 12'
},
])
.onSuccess( async event => {
    let response = await fetch('/send.php', {
        method: 'POST',
        body: new FormData(formPopap)
    });
    let result = await response.json();
    console.log(result)
    alert(result.message);
})

    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 480px
            920: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 640px
            1060: {
              slidesPerView: 2,
              spaceBetween: 20
            }
          },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
      });
      const swiper2 = new Swiper('.swiper-project', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 480px
            600: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            // when window width is >= 640px
            1060: {
              slidesPerView: 3,
              spaceBetween: 20
            }
          },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
      });