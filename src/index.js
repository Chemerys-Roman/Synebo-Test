const selectInput = document.querySelector('.select__element_input');
const selectOptions = document.querySelectorAll('.dropdown__element_option');
const checkedOption = document.querySelector('.checked');
const dropDownElement = document.querySelector('.select__element_dropdown');
const navElements = document.querySelectorAll('.nav__element')
const popupElements = document.querySelectorAll('.regtype__type')
const signinElement = document.querySelector('.regtype__type_signin')
const regElement = document.querySelector('.regtype__type_reg')
const popupHider = document.querySelector('.popup')
const userElement = document.querySelector('.user__element_name')
addEventListener('click', selectOption)
addEventListener('submit', enterSearch)

function getDefaultSelection(checkedOption){
    if(checkedOption) {
        selectInput.textContent = checkedOption.textContent;
    }
};


function selectOption(event){
    console.log(event.target)
    if(event.target.classList.contains('dropdown__element_option')){
        selectOptions.forEach(optionElement => {
            if(optionElement === event.target) {
                if(event.target.classList.contains('checked')){
                    return;
                }
                event.target.classList.add('checked')
                selectInput.textContent = event.target.textContent
            } else {
                optionElement.classList.remove('checked')
            }
        });
    }
   const isHidden = dropDownElement.classList.contains('drop');
    if(event.target.classList.contains('buttons__button_dropdown')){
        isHidden && dropDownElement.classList.remove('drop')
    } else {
        if(!isHidden) {dropDownElement.classList.add('drop');
            console.log(dropDownElement.lastChild)}
    }

    if(event.target.classList.contains('regtype__type')) {
        popupElements.forEach(element => {
            if (element === event.target) {
                if (event.target.classList.contains('checked')) {
                    return;
                }
                event.target.classList.add('checked')
            } else {
                element.classList.remove('checked')
            }
        })
        if (event.target.classList.contains('checked')) return;
        event.target.classList.add('checked')
    }
    if(event.target.classList.contains('popup__element_signin')) {

        if (!signinElement.classList.contains('checked')) {
            signinElement.classList.add('checked')
            regElement.classList.remove('checked')
        }
    }
    if(event.target.classList.contains('nav__element')){
        navElements.forEach( navElement => {
            if(navElement === event.target) {
                if(event.target.classList.contains('nav-checked')){
                    return;
                }
                event.target.classList.add('nav-checked')
            } else {
                navElement.classList.remove('nav-checked')
            }
        })
        if(event.target.classList.contains('nav-checked')) return;
        event.target.classList.add('nav-checked')
    }
    if(event.target === popupHider){
        event.target.classList.add('hide')
    }
    if(event.target === userElement){
        popupHider.classList.remove('hide')
    }
}


function enterSearch(event){
    console.log(event.target)
    event.preventDefault()
    if(event.target.classList.contains('search_form')) {
        event.target.textContent = '';
    }
    if(event.target.classList.contains('form__element_button')){
        event.preventDefault()
    }
}

getDefaultSelection(checkedOption);