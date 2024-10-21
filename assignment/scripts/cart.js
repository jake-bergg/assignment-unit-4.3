console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;


function addItem(item) {
    console.log('in addItem');
    if (isFull()) {
        return false;
    }
    else {
        basket.push(item);
        return true;
    }
}

function empty() {
    console.log('in empty');
    basket.length = 0;
    console.log(basket);
}

function isFull() {
    console.log('in isFull');
    if (basket.length >= maxItems) {
        return true;
    }
    else {
        return false;
    }
}

function listItems() {
    console.log('in listItems');
    for (let item of basket){
        console.log(item);
    }
}

function removeItem(item) {
    const index = basket.indexOf(item);
    if (index !== -1) {
        return basket.splice(index, 1)[0];
    }
    else {
        return null;
    }
}


addItem('Thing 1');
addItem('Thing 2');
addItem('Thing 3');
addItem('Thing 4');
addItem('Thing 5');
addItem('Thing 6');

listItems();

removeItem('Thing 1');

empty();





// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
