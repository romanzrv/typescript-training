abstract class Product {
    productName : string = "Default";
    price :number = 1000;
    abstract changeName(name: string): void;

    calcPrice(){
        return this.price;
    }
}
