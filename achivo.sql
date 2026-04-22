-- Microsoft SQL Server Management Studio

USE MASTER;

CREATE DATABASE Figuras;

USE Figuras;

CREATE TABLE Usuarios(
    idUsuario INT PRIMARY KEY IDENTITY(1,1),
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    edad INT,
    telefono INT,
    correo VARCHAR(100),
    contraseña VARCHAR(200),
    genero VARCHAR(10) DEFAULT 'NO DEFINIDO',
)

CREATE TABLE Serie(
    idSerie INT PRIMARY KEY IDENTITY(1,1),
    nombre VARCHAR(100),
)

CREATE TABLE Figuras(
    idFigura INT PRIMARY KEY IDENTITY(1,1),
    nombre VARCHAR(100),
    tamaño VARCHAR(10),
    
    idSerie INT,

    FOREIGN KEY (idSerie) REFERENCES Series(idSerie),
)