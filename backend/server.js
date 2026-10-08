const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT || 5432),
  database: process.env.DB_NAME || "gofurniture",
  user: process.env.DB_USER || "gofurniture",
  password: process.env.DB_PASSWORD || "gofurniture"
});

app.get("/api/health", async (req,res)=>{
  try {
    await pool.query("SELECT 1");
    res.json({status:"ok", database:"connected"});
  } catch (err) {
    res.status(503).json({status:"error", database:"disconnected"});
  }
});

app.get("/api/products", async (req,res)=>{
  try {
    const result = await pool.query(
      "SELECT id,name,description,price,icon FROM products ORDER BY id"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({error:"Unable to load products"});
  }
});

app.post("/api/products", async (req,res)=>{
  const {name,description,price,icon} = req.body;
  if(!name || price === undefined){
    return res.status(400).json({error:"name and price are required"});
  }
  try {
    const result = await pool.query(
      "INSERT INTO products(name,description,price,icon) VALUES($1,$2,$3,$4) RETURNING *",
      [name,description || "",price,icon || "🪑"]
    );
    res.status(201).json(result.rows[0]);
  } catch(err) {
    console.error(err);
    res.status(500).json({error:"Unable to create product"});
  }
});

app.listen(port, ()=>{
  console.log(`Go Furniture API listening on port ${port}`);
});
