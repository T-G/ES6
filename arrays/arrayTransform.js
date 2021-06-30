
const menuItems = [
    {item: "Blue Cheese Salad", price: 8},
    {item: "Spicy Chicken Rigatoni", price: 18},
    {item: "Ponzu Glazed Salmon", price: 23},
    {item: "Philly Cheese Steak", price: 13},
    {item: "Baked Italian Chicken Sub", price: 12},
    {item: "Pan Seared Ribeye", price: 31},
];

// Reduce is an array method
// It can be used to transform an array into any datat type including arrays
// Reduce method iterates over all items in an array 
// Reduce method always returns the accumulator
// The purpose of the accumulator is like a storage
// It has to return everytime the function has to run
// Here we can add together all the prices to the menuItem

// menuItems.reduce((accumulator, menuItem) => {}, 0);
const total = menuItems.reduce((accumulator, menuItem) => {
    console.log(`
        accumulator: ${accumulator},
        menu item price: ${menuItem.price}
    `);
    return accumulator + menuItem.price;
}, 0);

console.log(`Total: ${total}`);
