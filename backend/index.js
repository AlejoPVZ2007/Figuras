const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysqladmin',  // ← tu contraseña de MySQL
    database: 'Figuras'
});

db.connect(err => {
    if (err) {
        console.error('❌ Error al conectar:', err);
        return;
    }
    console.log('✅ Conectado a MySQL');
});

app.get('/figuras', (req, res) => {
    db.query(`
    SELECT f.idFigura, f.nombre, f.tamanio, f.fecha, f.imagen, s.nombre AS serie
    FROM Figuras f
    LEFT JOIN Serie s ON f.idSerie = s.idSerie
    `, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
    });
});

app.get('/figuraPorId', (req, res) => {
    db.query(`
        SELECT f.idFigura, f.nombre, f.tamanio, f.fecha, f.imagen, s.nombre AS serie, s.icono 
        FROM Figuras f INNER JOIN Serie s 
        ON f.idSerie = s.idSerie
        `, (err, results) => {
            if(err) return res.status(500).json({ error: err});
            res.json(results);
        });
});

app.listen(3000, () => console.log('🚀 Servidor en http://localhost:3000'));