import React, { useState } from "react";
import ProductForm from "../components/ProductForm";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import UpdateForm from "./UpdateForm";
const initialState = {
  name: "",
  image: "",
  price: "",
  dampingRate: 0.8,
  amount: "",
};

const UpdateProduct = () => {
  const location = useLocation();
  const [formData, setFormData] = useState(location.state);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_URL}${formData.id}`, formData);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
    // getData();
    setFormData(initialState);
  };

  return (
    <div className="container">
      <UpdateForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        
      />
    </div>
  );
};

export default UpdateProduct;
