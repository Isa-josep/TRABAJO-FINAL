CREATE DATABASE ALUMNOS;
USE ALUMNOS;
CREATE TABLE DATOS(
    ID INT NOT NULL AUTO_INCREMENT,
    NOMBRE VARCHAR(100) NOT NULL,
    APELLIDO_PATERNO VARCHAR(50) NOT NULL,
    APELLIDO_MATERNO VARCHAR(50) NOT NULL,
    CORREO VARCHAR(150) NOT NULL,
    ESPECIALIDAD VARCHAR(20) NOT NULL,
    GRUPO VARCHAR(20) NOT NULL,
    CONTRASEÑA VARCHAR(150) NOT NULL,
    PRIMARY KEY(ID)
);