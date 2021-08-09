import React from "react";
import { Row, Col, Card, Button, Image, Divider, Form, Input } from "antd";
import "./css/styles.css";
import "./css/bootstrap.min.css";
import "antd/dist/antd.css";
import Navbar from "./Components/Navbar/Navbar";
import Layout from "./Components/Home/Layout";

const { Meta } = Card;
const { TextArea } = Input;

function App() {
  return (
    <div>
      <Navbar />
      <Layout />
    </div>
  );
}

export default App;
