import React, { useState, useEffect } from "react";
import { getVehicles, createVehicle } from "../api";
import { Link } from "react-router-dom";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    getVehicles()
      .then((response) => {
        setVehicles(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching vehicles:", error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    createVehicle({ name })
      .then((response) => {
        setVehicles([...vehicles, response.data]);
        setName("");
      })
      .catch((error) => {
        console.error(
          "There was an error creating the vehicle:",
          error.response.data
        );
      });
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>Vehicles</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          style={{ marginRight: "10px", padding: "8px" }}
        />
        <button
          type="submit"
          style={{ padding: "8px 16px", cursor: "pointer" }}
        >
          Add Vehicle
        </button>
      </form>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {vehicles.map((vehicle) => (
          <li
            key={vehicle.id}
            style={{
              marginBottom: "10px",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            {vehicle.name}
          </li>
        ))}
      </ul>
      <Link
        to="/issues"
        style={{
          marginLeft: "10px",
          textDecoration: "none",

          margin: "auto",
        }}
      >
        <button style={{ padding: "8px 16px", cursor: "pointer" }}>
          Go to Issues
        </button>
      </Link>
    </div>
  );
};

export default Vehicles;
