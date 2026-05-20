const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos mediante variables de entorno
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get('/', (req, res) => {
  res.json({ status: "success", message: "¡Hola desde la API de Node.js!" });
});

app.get('/db-check', async (req, res) => {
  try {
    const dbRes = await pool.query('SELECT NOW();');
    res.json({ status: "connected", timestamp: dbRes.rows[0].now });
  } catch (err) {
    res.status(500).json({ status: "error", error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Aplicación escuchando en el puerto ${port}`);
});
