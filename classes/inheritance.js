class Product {
    constructor(name, price, discountable) {
        this.name = name;
        this.price = price;
        this.discountable = discountable;
    }

    isDiscountable() {
        return this.discountable;
    }
}

//new Product()

// INHERITANCE
class SaleProduct extends Product {
    constructor(name, price, discountable, percentOff){
        // super constructor
        super(name, price, discountable);
        this.percentOff = percentOff;
    }

    getSalePrice() {
        // if this.discountable, then calc discount
        if (super.isDiscountable()){
            return this.price * ((100 - this.percentOff) / 100);
        }
        // else say it's not eligible for discount
        return `Product: ${this.name} is not eligible for a discount`;
    }
}

const sp1 = new SaleProduct("Coffee Maker", 99.99, false, 20);
console.log(sp1.getSalePrice());