import React, { useState, useEffect } from "react";
import { getIssues, createIssue, getVehicles, getComponents } from "../api";

const Issues = () => {
  const [issues, setIssues] = useState([]);
  const [description, setDescription] = useState("");
  const [vehicleId, setVehicleId] = useState("");
  const [componentId, setComponentId] = useState("");
  const [isNewComponent, setIsNewComponent] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const [components, setComponents] = useState([]);

  useEffect(() => {
    getIssues().then((response) => {
      setIssues(response.data);
    });
    getVehicles().then((response) => {
      setVehicles(response.data);
    });
    getComponents().then((response) => {
      setComponents(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newIssue = {
      description,
      vehicle: vehicleId,
      component: componentId,
      is_new_component: isNewComponent,
    };
    createIssue(newIssue)
      .then((response) => {
        setIssues([...issues, response.data]);
        setDescription("");
        setVehicleId("");
        setComponentId("");
        setIsNewComponent(false);
      })
      .catch((error) => {
        console.error(
          "There was an error creating the issue:",
          error.response.data
        );
      });
  };

  // Helper functions to find vehicle and component names by ID
  const getVehicleName = (id) => {
    const vehicle = vehicles.find((vehicle) => vehicle.id === id);
    return vehicle ? vehicle.name : "";
  };

  const getComponentName = (id) => {
    const component = components.find((component) => component.id === id);
    return component ? component.name : "";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Issues</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "600px",
          margin: "0 auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          marginBottom: "10rem",
        }}
      >
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
          style={{ marginBottom: "10px", padding: "10px", width: "100%" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <select
            value={vehicleId}
            onChange={(e) => setVehicleId(e.target.value)}
            required
            style={{ marginRight: "10px", padding: "10px", flex: 1 }}
          >
            <option value="">Select Vehicle</option>
            {vehicles.map((vehicle) => (
              <option key={vehicle.id} value={vehicle.id}>
                {vehicle.name}
              </option>
            ))}
          </select>
          <select
            value={componentId}
            onChange={(e) => setComponentId(e.target.value)}
            required
            style={{ marginLeft: "10px", padding: "10px", flex: 1 }}
          >
            <option value="">Select Component</option>
            {components.map((component) => (
              <option key={component.id} value={component.id}>
                {component.name} - {component.price}$
              </option>
            ))}
          </select>
        </div>
        <label style={{ marginTop: "10px" }}>
          <input
            type="checkbox"
            checked={isNewComponent}
            onChange={(e) => setIsNewComponent(e.target.checked)}
          />
          Use New Component
        </label>
        <button
          type="submit"
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Issue
        </button>
      </form>
      <table
        style={{
          width: "80%",
          margin: "0 auto",
          borderCollapse: "collapse",
          border: "1px solid #ccc",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>
              Description
            </th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>
              Vehicle
            </th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>
              Component
            </th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>New</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id} style={{ borderBottom: "1px solid #ccc" }}>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                {issue.description}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                {getVehicleName(issue.vehicle)}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                {getComponentName(issue.component)}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                {issue.is_new_component ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Issues;
