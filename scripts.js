const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')

buttonShowAll.addEventListener('click', ()=> clickShowAll(menuOptions))
buttonMapAll.addEventListener('click', clickMapAll)

function clickShowAll(productsArray) {

   let myList = ''

    productsArray.forEach((list) => {

        myList += `
        <li>
        <img src=${list.src}>
        <p class="option-burguer">${list.name}</p>
        <p class="burguer-price">R$ ${list.price.toFixed(2)}</p>
        </li>
        `
    });

    list.innerHTML = myList

}

function clickMapAll() {

    const newValue = menuOptions.map((list) => ({
        ...list,
        price: list.price * 0.9

    }))

    clickShowAll(newValue)
}



