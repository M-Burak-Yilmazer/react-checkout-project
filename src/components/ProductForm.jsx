import { useState } from "react";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");

  console.log(name, price, quantity, image);
  
  const handleSave = (e) => {
    e.preventDefault();
  };

  return (
    <article
      id="add-product"
      className="  mb-4 mt-4 col col-lg-6 mx-auto border rounded-2
      bg-opacity-50 bg-light
      "
    >
      <h1 className="text-center text-light">New Product</h1>
      <form onSubmit={handleSave} className="p-2">
        <div className="mb-3">
          <label htmlFor="add-name" className="form-label">
            Product Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            id="add-name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-price" className="form-label">
            Product Price
          </label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            className="form-control"
            id="add-price"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-quantity" className="form-label">
            Product Quantity
          </label>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            className="form-control"
            id="add-quantity"
            required
          />
        </div>
        <label htmlFor="add-image" className="form-label">
          Product Image
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            https://example.com/
          </span>
          <input
            onChange={(e) => setImage(e.target.value)}
            type="url"
            className="form-control"
            id="add-image"
            aria-describedby="basic-addon3"
            required
          />
        </div>
        <div className="text-center">
          <button type="submit" className="add-to-cart btn btn-success btn-sm">
            <i className="fa-solid fa-cart-plus me-2"></i>Save To Product
          </button>
        </div>
      </form>
    </article>
  );
};

export default ProductForm;
