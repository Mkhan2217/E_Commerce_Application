import axios from "axios";

const Product_API_BASE_URL = "http://localhost:8085/product/list";

class ProductService {
  getProduct() {
    return axios.get(Product_API_BASE_URL);
  }

  createProduct(product) {
    return axios.post("http://localhost:8085/product/add", product);
  }
  updateProductById(id, product) {
    return axios.put("http://localhost:8085/product" + "/" + id, product);
  }
  getProductById(id) {
    return axios.get("http://localhost:8085/product" + "/" + id);
  }
  deleteProduct(id) {
    return axios.delete("http://localhost:8085/product" + "/" + id);
  }
}

export default new ProductService();
