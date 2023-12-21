import axios from "axios";
import React, { useEffect, useState } from "react";

const taxRate = 0.18;
const shipping = 25;

const CardTotal = ({ product }) => {
  const totalPrice = product.reduce(
    (acc, product) =>
      product.price * product.dampingRate * product.amount + acc,
    0
  );




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
