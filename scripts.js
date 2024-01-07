const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all')


buttonFilterAll.addEventListener('click', clickFilterAll)
buttonSumAll.addEventListener('click', clickSumAll)
buttonShowAll.addEventListener('click', () => clickShowAll(menuOptions))
buttonMapAll.addEventListener('click', clickMapAll)


function currencyFormat(value){

    const formatValue = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    return formatValue
}


function clickShowAll(productsArray) {

    let myList = ''

    productsArray.forEach(list => {

        myList += `
        <li>
        <img src=${list.src}>
        <p class="option-burguer">${list.name}</p>
        <p class="burguer-price"> ${currencyFormat(list.price)}</p>
    </li>
    `
    });

    list.innerHTML = myList
}

function clickMapAll() {

    const newPrices = menuOptions.map(list => ({
        ...list,
        price: list.price * 0.9
    }))

    clickShowAll(newPrices)
}

function clickSumAll(){

    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
    <li>
    <p class="option-burguer">O valor total dos produtos é <br> ${currencyFormat(totalValue)}</p>
    </li>
`
}

function clickFilterAll(){

    const filterJustVegan = menuOptions.filter((productsVegan) => productsVegan.vegan)

    clickShowAll(filterJustVegan)
}

