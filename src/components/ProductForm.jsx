import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductForm = ({ getProducts }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");

  const handleSave = async (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      price,
      amount: quantity,
      image,
      dampingRate: 0.8,
    };
    await postProduct(newProduct);

    setImage("");
    setName("");
    setPrice("");
    setQuantity("");
    navigate("/productlist");
  };
  const postProduct = async (newProduct) => {
    try {
      const res = await axios.post(process.env.REACT_APP_URL, newProduct);
      console.log(res);
      // Call getProducts only after the POST request is successful
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article
      id="add-product"
      className="  mb-4 mt-4 col col-lg-6 mx-auto border rounded-2
      bg-opacity-50 bg-light
      "
    >
      <h1 style={{color:"#ff006e"}} className="text-center ">New Toy Item 🧸</h1>
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
            value={name}
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
            value={price}
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
            value={quantity}
            min={1}
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
            value={image}
            required
          />
        </div>
        <div className="text-center">
          <button type="submit" className="add-to-cart btn btn-success btn-sm">
            🎁 Save To Toys
          </button>
        </div>
      </form>
    </article>
  );
};

export default ProductForm;
