import ProductModel from "../schema/Produc.model";

class ProductService {
  private readonly productModel;

  constructor() {
    this.productModel = ProductModel;
  }
}

export default ProductService;