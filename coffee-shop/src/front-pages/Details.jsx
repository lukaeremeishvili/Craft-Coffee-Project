import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchData, getIngredientDetails } from "../components/dataFetch";
import { convertGelToUsd } from "../services/exchange";
import "./details.css";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [convertedPrice, setConvertedPrice] = useState(null);
  const [isUsd, setIsUsd] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const { products, ingredients } = await fetchData(
        import.meta.env.VITE_API_URL,
        import.meta.env.VITE_API_KEY
      );
      const product = products.find((p) => p._uuid === id);
      setProduct(product);
      setIngredients(ingredients);
    };

    fetchProductDetails();
  }, [id]);

  const handleConvert = async () => {
    if (product) {
      const gelAmount = parseFloat(product.totalPrice.replace(/[^\d.-]/g, ""));
      if (isUsd) {
        setConvertedPrice(product.totalPrice);
        setIsUsd(false);
      } else {
        const usdAmount = await convertGelToUsd(gelAmount);
        setConvertedPrice(`$${usdAmount.toFixed(2)}`);
        setIsUsd(true);
      }
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const { description, flavor, strength } = getIngredientDetails(
    product.selectedIngredients,
    ingredients
  );

  return (
    <div className="details-container">
      <h1>{product.title}</h1>
      <p>
        <strong>Price:</strong> {convertedPrice || product.totalPrice}
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Strength:</strong> {strength}
      </p>
      <p>
        <strong>Status:</strong> {product.caffeine}
      </p>
      <p>
        <strong>Flavor:</strong> {flavor}
      </p>
      <p>
        <strong>Country:</strong> {product.country}
      </p>
      <button onClick={handleConvert} className="convert-button">
        {isUsd ? "Convert to GEL" : "Convert to USD"}
      </button>
    </div>
  );
};

export default Details;
