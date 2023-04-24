'use strict'

const accordionInfoBtn = document.querySelectorAll('#aside-info__accordion-top')
const accordionInfoList = document.querySelectorAll('.aside-info__accordion-list')
const accordionInfoArrow = document.querySelectorAll('.aside-info__top-arrow')

accordionInfoBtn.forEach((button, index) => {
  button.addEventListener('click', (e) => {
    accordionInfoBtn[index].classList.toggle('accordion__top--active')
    accordionInfoList[index].classList.toggle('accordion__list--active')
    accordionInfoArrow[index].classList.toggle('accordion__arrow--active')
  })
})

const accordionFilterBtn = document.querySelectorAll('#aside-filter__accordion-top')
const accordionFilterList = document.querySelectorAll('.aside-filter__accordion-list')
const accordionFilterArrow = document.querySelectorAll('.aside-filter__top-arrow')

accordionFilterBtn.forEach((button, index) => {
  button.addEventListener('click', (e) => {
    accordionFilterBtn[index].classList.toggle('accordion__top--active')
    accordionFilterList[index].classList.toggle('accordion__list--active')
    accordionFilterArrow[index].classList.toggle('accordion__arrow--active')
  })
})

//_________*BLOCK*Cotent-top______

const contentTopBox = document.querySelector('#content__showing-box')
const contentTopList = document.querySelector('#content__showing-list')
const contentTopNumber = document.querySelector('#content__showing-number')

const contentTopItem = document.querySelectorAll('.content__showing-item')

contentTopBox.addEventListener('click', () => {
  contentTopList.classList.toggle('content__showing--active')
})

contentTopItem.forEach((item) => {
  item.addEventListener('click', () => {
    contentTopNumber.textContent = item.textContent
  })
})

// ______CREATE TICKET_____
const cteareBtn = document.querySelector('#content__create-btn')
const contentForm = document.querySelector('#content__form')

cteareBtn.addEventListener('click', () => {
  contentForm.classList.toggle('content__form--active')
})

//_________________POPUP *NEW TAG*_________________

const btnNewTag = document.querySelector('#form__new-tag')

const popup = document.querySelector('.popup')
const popupClose = document.querySelector('.popup__close')
const popupInput = document.querySelector('#popup__input')

// ----------OPEN POPUP----------
btnNewTag.addEventListener('click', (e) => {
  // if (navList.classList.contains('header__menu--active')) menu()
  popup.classList.add('show')
  document.body.style.cssText = `overflow: hidden;`
})

// adding # to the beginning of input
popupInput.addEventListener('click', () => {
  popupInput.value = '#'
})

// close on click on overlay
popupClose.addEventListener('click', (e) => {
  popup.classList.remove('show')
  document.body.style.cssText = ''
})

// close on click on overlay
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.remove('show')
    document.body.style.cssText = ''
  }
})

// close on press of escape button
document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' && popup.classList.contains('show')) {
    popup.classList.remove('show')
    document.body.style.cssText = ''
  }
})

//__________BURGER AND FILTER__________

const asideInfo = document.querySelector('.aside-info')
const burger = document.querySelector('.burger')
const asidefilter = document.querySelector('.aside-filter')
const filterBtn = document.querySelector('.content__filter-btn')

//____BURGER___
burger.addEventListener('click', menu)

function menu() {
  if (burger.classList.contains('burger-filter--active')) {
    burger.classList.remove('burger-filter--active')
    asidefilter.classList.remove('aside-filter--active')
    document.body.classList.remove('body--active')
    return
  }

  burger.classList.toggle('burger--active')
  asideInfo.classList.toggle('aside-info--active')
  
  if(document.body.classList.contains('body--active') && !burger.classList.contains('burger--active')) {
    document.body.classList.remove('body--active')
  } else {
    document.body.classList.add('body--active')
  }
}

//_____FILTER____

filterBtn.addEventListener('click', filters)

function filters() {
  burger.classList.add('burger-filter--active')
  asidefilter.classList.add('aside-filter--active')

  if (document.body.classList.contains('body--active')) {
    document.body.classList.remove('body--active')
  } else {
    document.body.classList.add('body--active')
  }
}


//__________Mobile content arrow_____

const contentBox = document.querySelectorAll('.content__body-box')
const contentBtn = document.querySelectorAll('.content__body-btn')

contentBtn.forEach((button, index) => {
  button.addEventListener('click', (e) => {
    contentBox[index].classList.toggle('content__body-activeBox')
    contentBtn[index].classList.toggle('content__body-activeBtn')
  })
})
