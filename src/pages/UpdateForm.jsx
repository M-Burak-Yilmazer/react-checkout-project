const UpdateForm = ({ formData, handleChange, handleSubmit, text }) => {
  return (
    <article
      id="add-product"
      className=" mb-4 mt-4 col col-lg-6 mx-auto border rounded-2
      bg-opacity-50 bg-light"
    >
      <h1 style={{ color: "#ff006e" }} className="text-center mt-1">
        Update Toy Item
      </h1>
      <form class="p-2" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="add-name" class="form-label">
            Product Name
          </label>
          <input
            type="text"
            class="form-control"
            name="name"
            id="add-name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div class="mb-3">
          <label for="add-price" class="form-label">
            Product Price
          </label>
          <input
            type="number"
            class="form-control"
            id="add-price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div class="mb-3">
          <label for="add-quantity" class="form-label">
            Product Quantity
          </label>
          <input
            type="number"
            name="amount"
            class="form-control"
            id="add-quantity"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <label for="add-image" class="form-label">
          Product Image
        </label>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon3">
            https://example.com/
          </span>
          <input
            type="url"
            class="form-control"
            id="add-image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            aria-describedby="basic-addon3"
            required
          />
        </div>
        <div class="text-center">
          <button type="submit" class="add-to-cart btn btn-success btn-sm">
            <i class="fa-solid fa-cart-plus me-2"></i>Save To Toys
          </button>
        </div>
      </form>
    </article>
  );
};

export default UpdateForm;
