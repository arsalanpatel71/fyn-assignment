import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getIssues, getComponents } from "../api";

const RevenueChart = () => {
  const [data, setData] = useState([]);
  const [issues, setIssues] = useState([]);
  const [components, setComponents] = useState([]);

  useEffect(() => {
    Promise.all([getIssues(), getComponents()])
      .then(([issuesResponse, componentsResponse]) => {
        const formattedIssues = issuesResponse.data.map((issue) => ({
          id: issue.id,
          description: issue.description,
          vehicleId: issue.vehicle,
          componentId: issue.component,
          isNewComponent: issue.is_new_component,
        }));
        setIssues(formattedIssues);
        setComponents(componentsResponse.data);
        const formattedData = issuesResponse.data.map((issue) => ({
          date: issue.created_at, 
          description: issue.description,
          vehicle: getVehicleName(issue.vehicle),
          component: getComponentCost(issue.component),
          isNewComponent: issue.is_new_component,
        }));
        setData(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const calculateRevenue = (issue) => {
    if (issue.is_new_component) {
      const component = components.find((comp) => comp.id === issue.component);
      if (component) {
        return parseFloat(component.price);
      }
    } else {
      return parseFloat(issue.repair_price);
    }
    return 0; 
  };

  const getVehicleName = (id) => {
    const issue = issues.find((issue) => issue.id === id);
    return issue ? issue.vehicle : "";
  };

  const getComponentCost = (id) => {
    const issue = issues.find((issue) => issue.id === id);
    if (issue && issue.is_new_component) {
      const component = components.find((comp) => comp.id === issue.component);
      return component ? parseFloat(component.price) : 0;
    }
    return parseFloat(issue ? issue.repair_price : 0);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#f0f0f0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "90%",
          height: "90%",
          maxWidth: "1200px",
          maxHeight: "800px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <h1 style={{ textAlign: "center", margin: "20px 0" }}>Revenue Chart</h1>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
            <Line type="monotone" dataKey="component" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
