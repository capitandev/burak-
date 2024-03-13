import ProductModel from "../schema/Produc.model";
class ProductService {
    private readonly productModel;
//produx servive 
    constructor() {
      this.productModel = ProductModel;
  }
}
export default ProductService;