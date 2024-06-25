import React, { useState, useEffect } from "react";
import { getComponents, createComponent } from "../api";
import { Link } from "react-router-dom";

const Components = () => {
  const [components, setComponents] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    getComponents()
      .then((response) => {
        setComponents(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching components:", error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    createComponent({ name, price })
      .then((response) => {
        setComponents([...components, response.data]);
        setName("");
        setPrice("");
      })
      .catch((error) => {
        console.error(
          "There was an error creating the component:",
          error.response.data
        );
      });
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>Components</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          style={{ marginRight: "10px", padding: "8px" }}
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          style={{ marginRight: "10px", padding: "8px" }}
        />
        <button
          type="submit"
          style={{ padding: "8px 16px", cursor: "pointer" }}
        >
          Add Component
        </button>
      </form>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {components.map((component) => (
          <li
            key={component.id}
            style={{
              marginBottom: "10px",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            {component.name} - ${component.price}
          </li>
        ))}
      </ul>
      <Link
        to="/vehicles"
        style={{
          marginLeft: "10px",
          textDecoration: "none",

          margin: "auto",
        }}
      >
        <button style={{ padding: "8px 16px", cursor: "pointer" }}>
          Go to Vehicles
        </button>
      </Link>
    </div>
  );
};

export default Components;
