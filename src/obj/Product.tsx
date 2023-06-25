class Product {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
  // amount: number

  constructor(
    id: string,
    title: string,
    description: string,
    category: string,
    image: string,
    price: number
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.image = image;
    this.price = price;
    // this.amount = 0
  }
}

export default Product;
