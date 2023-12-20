import axios from "axios";
import React, { useEffect, useState } from "react";

const taxRate = 0.18;
const shipping = 25;

const CardTotal = ({ product }) => {
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState(product.amount);
  const [totalPrice, setTotalPrice] = useState(0);

  const getProduct = async () => {
    try {
      const res = await axios(process.env.REACT_APP_URL);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []); // Run once on mount to fetch initial data

  useEffect(() => {
    setAmount(data.amount);
  }, [data]); // Update amount when data changes

  useEffect(() => {
    // Calculate subtotal based on the updated amount
    const subTotal = data?.map(
      (item) =>
        Number(item.amount) *
        (Number(item.price) - Number(item.price) * Number(item.dampingRate))
    );
    const newTotalPrice = subTotal?.reduce((sum, int) => sum + int, 0) || 0;

    // Calculate tax and total
    const tax = newTotalPrice * taxRate;
    const total = newTotalPrice + tax + shipping;

    // Update state
    setTotalPrice(newTotalPrice);

    // You may want to set tax and total to states as well if needed

    // Log for debugging
    console.log("New Total Price:", newTotalPrice);
  }, [amount, data]);

  return (
    <table className="table w-100 text-light">
      <tbody>
        <tr className="text-end">
          <th className="text-start">Subtotal</th>
          <td>
            $<span className="subtotal">{totalPrice.toFixed(2)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Tax(18%)</th>
          <td>
            $<span className="tax">{(totalPrice * taxRate).toFixed(2)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Shipping</th>
          <td>
            $<span className="shipping">{shipping.toFixed(2)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Total</th>
          <td>
            $
            <span className="total">
              {(totalPrice + totalPrice * taxRate + shipping).toFixed(2)}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CardTotal;
