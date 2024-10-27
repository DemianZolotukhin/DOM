// DOM Manipulation

// GetElementById()

// const title = document.getElementById('main-heading');

// console.log(title)

// GetElementByClassName()

// const listItem = document.getElementsByClassName('list-items')

// console.log(listItem)

// getElementsByTagName()

// const listItems = document.getElementsByTagName('li')

// console.log(listItems)

// querySelector()

// const container = document.querySelector('div');

// console.log(container)

// querySelectorAll()

// const container = document.querySelectorAll('div');

// console.log(container)


// const title = document.querySelector('#main-heading')

// title.style.color = 'red';


const listItems = document.querySelectorAll('.list-items');

for (let i = 0; i < listItems.length; i++) {
    if (i % 2 !== 0) {
        listItems[i].style.fontSize = '2rem';
    }
}

console.log(listItems);

