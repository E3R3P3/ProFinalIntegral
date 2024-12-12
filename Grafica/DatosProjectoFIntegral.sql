create database db_PrjItegral;
-- Crear la tabla de Marcas
CREATE TABLE Marcas (
    MarcaID INT PRIMARY KEY IDENTITY(1,1),
    Marca VARCHAR(50) NOT NULL
);

-- Para MySql

CREATE TABLE Marcas (
    MarcaID INT AUTO_INCREMENT PRIMARY KEY,
    Marca VARCHAR(50) NOT NULL
);


use db_PrjItegral;

select*from Carros;

select*from Marcas;

-- Insertar las marcas en la tabla Marcas
INSERT INTO Marcas (Marca) VALUES 
('Toyota'),
('Honda'),
('Hyundai'),
('Kia'),
('Suzuki'),
('Nissan'),
('Volkswagen');

-- Crear la tabla de vehículos con la columna MarcaID y Modelo
CREATE TABLE Carros (
    MarcaID INT,
    Modelo VARCHAR(50),
    Año INT,
    Generacion VARCHAR(50),
    Tipo_Motor VARCHAR(50),
    Consumo_Ciudad_L100km DECIMAL(4,1),
    Consumo_Carretera_L100km DECIMAL(4,1),
    Consumo_Mixto_L100km DECIMAL(4,1),
    Promedio_kmL_Ciudad DECIMAL(4,2),
    Promedio_kmL_Carretera DECIMAL(4,2),
    Promedio_kmL_Mixto DECIMAL(4,2),
    FOREIGN KEY (MarcaID) REFERENCES Marcas(MarcaID)
);

select*from carros;
-- Insertar los datos del Toyota Yaris en la tabla Vehiculos
INSERT INTO Carros (MarcaID, Modelo, Año, Generacion, Tipo_Motor, Consumo_Ciudad_L100km, Consumo_Carretera_L100km, Consumo_Mixto_L100km, Promedio_kmL_Ciudad, Promedio_kmL_Carretera, Promedio_kmL_Mixto)
VALUES 
(1, 'Yaris', 2024, '4ta generación', 'Gasolina 1.5L', 6.7, 5.1, 5.8, 14.88, 19.97, 17.00),
(1, 'Yaris', 2023, '4ta generación', 'Gasolina 1.5L', 6.9, 5.3, 5.9, 14.45, 19.12, 16.57),
(1, 'Yaris', 2022, '4ta generación', 'Gasolina 1.5L', 7.1, 5.4, 6.1, 14.02, 18.28, 16.14),
(1, 'Yaris', 2021, '4ta generación', 'Gasolina 1.5L', 7.1, 5.4, 6.1, 14.02, 18.28, 16.14),
(1, 'Yaris', 2020, '4ta generación', 'Gasolina 1.5L', 7.1, 5.4, 6.1, 14.02, 18.28, 16.14),
(1, 'Yaris', 2019, '3ra generación', 'Gasolina 1.5L', 7.1, 5.4, 6.1, 14.02, 18.28, 16.14),
(1, 'Yaris', 2018, '3ra generación', 'Gasolina 1.5L', 7.1, 5.4, 6.1, 14.02, 18.28, 16.14),
(1, 'Yaris', 2017, '3ra generación', 'Gasolina 1.5L', 7.1, 5.4, 6.1, 14.02, 18.28, 16.14),
(1, 'Yaris', 2016, '3ra generación', 'Gasolina 1.5L', 7.1, 5.4, 6.1, 14.02, 18.28, 16.14),
(1, 'Yaris', 2015, '3ra generación', 'Gasolina 1.5L', 7.1, 5.4, 6.1, 14.02, 18.28, 16.14),
(1, 'Yaris', 2014, '3ra generación', 'Gasolina 1.3L', 7.8, 6.4, 7.1, 12.75, 15.72, 14.02),
(1, 'Yaris', 2013, '2da generación', 'Gasolina 1.3L', 7.8, 6.4, 7.1, 12.75, 15.72, 14.02),
(1, 'Yaris', 2012, '2da generación', 'Gasolina 1.3L', 7.8, 6.4, 7.1, 12.75, 15.72, 14.02),
(1, 'Yaris', 2011, '2da generación', 'Gasolina 1.3L', 7.8, 6.4, 7.1, 12.75, 15.72, 14.02),
(1, 'Yaris', 2010, '2da generación', 'Gasolina 1.3L', 7.8, 6.4, 7.1, 12.75, 15.72, 14.02),
(1, 'Yaris', 2009, '2da generación', 'Gasolina 1.3L', 7.8, 6.4, 7.1, 12.75, 15.72, 14.02),
(1, 'Yaris', 2008, '2da generación', 'Gasolina 1.3L', 7.8, 6.4, 7.1, 12.75, 15.72, 14.02),
(1, 'Yaris', 2007, '2da generación', 'Gasolina 1.3L', 7.8, 6.4, 7.1, 12.75, 15.72, 14.02),
(1, 'Yaris', 2006, '1ra generación', 'Gasolina 1.0L', 8.4, 6.9, 7.6, 11.90, 14.87, 13.16),
(1, 'Yaris', 2005, '1ra generación', 'Gasolina 1.0L', 8.4, 6.9, 7.6, 11.90, 14.87, 13.16),
(1, 'Yaris', 2004, '1ra generación', 'Gasolina 1.0L', 8.4, 6.9, 7.6, 11.90, 14.87, 13.16),
(1, 'Yaris', 2003, '1ra generación', 'Gasolina 1.0L', 8.4, 6.9, 7.6, 11.90, 14.87, 13.16),
(1, 'Yaris', 2002, '1ra generación', 'Gasolina 1.0L', 8.4, 6.9, 7.6, 11.90, 14.87, 13.16),
(1, 'Yaris', 2001, '1ra generación', 'Gasolina 1.0L', 8.4, 6.9, 7.6, 11.90, 14.87, 13.16),
(1, 'Yaris', 2000, '1ra generación', 'Gasolina 1.0L', 8.4, 9.7, 6.1, 11.90, 14.87, 13.16);


select*from carros;
-- Insertar los datos de Kia Rio en la tabla Vehiculos
INSERT INTO Carros (MarcaID, Modelo, Año, Generacion, Tipo_Motor, Consumo_Ciudad_L100km, Consumo_Carretera_L100km, Consumo_Mixto_L100km, Promedio_kmL_Ciudad, Promedio_kmL_Carretera, Promedio_kmL_Mixto)
VALUES 
(4, 'Rio', 2024, '4ta generación', 'Gasolina 1.0L Turbo', 6.7, 5.1, 5.8, 14.88, 19.97, 17.01),
(4, 'Rio', 2023, '4ta generación', 'Gasolina 1.0L Turbo', 6.7, 5.1, 5.8, 14.88, 19.97, 17.01),
(4, 'Rio', 2022, '4ta generación', 'Gasolina 1.6L', 7.1, 5.4, 6.1, 14.02, 18.28, 16.15),
(4, 'Rio', 2021, '4ta generación', 'Gasolina 1.6L', 7.1, 5.4, 6.1, 14.02, 18.28, 16.15),
(4, 'Rio', 2020, '4ta generación', 'Gasolina 1.6L', 7.1, 5.4, 6.1, 14.02, 18.28, 16.15),
(4, 'Rio', 2019, '4ta generación', 'Gasolina 1.6L', 7.1, 5.4, 6.1, 14.02, 18.28, 16.15),
(4, 'Rio', 2018, '4ta generación', 'Gasolina 1.6L', 7.1, 5.4, 6.1, 14.02, 18.28, 16.15),
(4, 'Rio', 2017, '4ta generación', 'Gasolina 1.6L', 7.1, 5.4, 6.1, 14.02, 18.28, 16.15),
(4, 'Rio', 2016, '3ra generación', 'Gasolina 1.6L', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(4, 'Rio', 2015, '3ra generación', 'Gasolina 1.6L', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(4, 'Rio', 2014, '3ra generación', 'Gasolina 1.6L', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(4, 'Rio', 2013, '3ra generación', 'Gasolina 1.4L', 8.4, 6.9, 7.6, 11.90, 14.49, 13.16),
(4, 'Rio', 2012, '3ra generación', 'Gasolina 1.4L', 8.4, 6.9, 7.6, 11.90, 14.49, 13.16),
(4, 'Rio', 2011, '2da generación', 'Gasolina 1.4L', 8.7, 7.1, 7.8, 11.49, 14.03, 12.82),
(4, 'Rio', 2010, '2da generación', 'Gasolina 1.4L', 8.7, 7.1, 7.8, 11.49, 14.03, 12.82),
(4, 'Rio', 2009, '2da generación', 'Gasolina 1.4L', 8.7, 7.1, 7.8, 11.49, 14.03, 12.82),
(4, 'Rio', 2008, '2da generación', 'Gasolina 1.4L', 8.7, 7.1, 7.8, 11.49, 14.03, 12.82),
(4, 'Rio', 2007, '2da generación', 'Gasolina 1.4L', 8.7, 7.1, 7.8, 11.49, 14.03, 12.82),
(4, 'Rio', 2006, '2da generación', 'Gasolina 1.5L', 9.0, 6.9, 7.8, 11.10, 14.49, 12.82),
(4, 'Rio', 2005, '1ra generación', 'Gasolina 1.5L', 9.0, 6.9, 7.8, 11.10, 14.49, 12.82),
(4, 'Rio', 2004, '1ra generación', 'Gasolina 1.5L', 9.0, 6.9, 7.8, 11.10, 14.49, 12.82),
(4, 'Rio', 2003, '1ra generación', 'Gasolina 1.5L', 9.0, 6.9, 7.8, 11.10, 14.49, 12.82),
(4, 'Rio', 2002, '1ra generación', 'Gasolina 1.5L', 9.0, 6.9, 7.8, 11.10, 14.49, 12.82),
(4, 'Rio', 2001, '1ra generación', 'Gasolina 1.5L', 9.0, 6.9, 7.8, 11.10, 14.49, 12.82),
(4, 'Rio', 2000, '1ra generación', 'Gasolina 1.5L', 9.0, 6.9, 7.8, 11.10, 14.49, 12.82);



INSERT INTO Carros (MarcaID, Modelo, Año, Generacion, Tipo_Motor, Consumo_Ciudad_L100km, Consumo_Carretera_L100km, Consumo_Mixto_L100km, Promedio_kmL_Ciudad, Promedio_kmL_Carretera, Promedio_kmL_Mixto)
VALUES 
(3, 'Tucson', 2024, '4ta generación', 'Gasolina 2.5L', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(3, 'Tucson', 2023, '4ta generación', 'Gasolina 1.6L Turbo Híbrido', 6.7, 5.8, 6.2, 17.42, 20.40, 18.62),
(3, 'Tucson', 2023, '4ta generación', 'Gasolina 2.5L Híbrido', 6.7, 5.8, 6.2, 17.42, 20.40, 18.62),
(3, 'Tucson', 2022, '4ta generación', 'Gasolina 2.5L', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(3, 'Tucson', 2021, '4ta generación', 'Gasolina 2.5L', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(3, 'Tucson', 2020, '4ta generación', 'Gasolina 2.5L', 8.4, 6.9, 7.6, 11.90, 14.49, 13.16),
(3, 'Tucson', 2019, '3ra generación', 'Gasolina 2.0L Turbo', 8.7, 7.1, 7.8, 11.49, 14.03, 12.82),
(3, 'Tucson', 2018, '3ra generación', 'Gasolina 2.0L Turbo', 8.7, 7.1, 7.8, 11.49, 14.03, 12.82),
(3, 'Tucson', 2017, '3ra generación', 'Gasolina 2.0L Turbo', 8.7, 7.1, 7.8, 11.49, 14.03, 12.82),
(3, 'Tucson', 2016, '3ra generación', 'Gasolina 2.0L Turbo', 8.7, 7.1, 7.8, 11.49, 14.03, 12.82),
(3, 'Tucson', 2015, '2da generación', 'Gasolina 2.0L', 9.4, 7.1, 8.1, 10.64, 14.08, 12.35),
(3, 'Tucson', 2014, '2da generación', 'Gasolina 2.0L', 9.4, 7.1, 8.1, 10.64, 14.08, 12.35),
(3, 'Tucson', 2013, '2da generación', 'Gasolina 2.0L', 9.4, 7.1, 8.1, 10.64, 14.08, 12.35),
(3, 'Tucson', 2012, '2da generación', 'Gasolina 2.0L', 9.4, 7.1, 8.1, 10.64, 14.08, 12.35),
(3, 'Tucson', 2011, '2da generación', 'Gasolina 2.0L', 9.4, 7.1, 8.1, 10.64, 14.08, 12.35),
(3, 'Tucson', 2010, '2da generación', 'Gasolina 2.0L', 9.4, 7.1, 8.1, 10.64, 14.08, 12.35),
(3, 'Tucson', 2009, '2da generación', 'Gasolina 2.0L', 9.4, 7.1, 8.1, 10.64, 14.08, 12.35),
(3, 'Tucson', 2008, '2da generación', 'Gasolina 2.0L', 9.4, 7.1, 8.1, 10.64, 14.08, 12.35),
(3, 'Tucson', 2007, '2da generación', 'Gasolina 2.0L', 9.4, 7.1, 8.1, 10.64, 14.08, 12.35),
(3, 'Tucson', 2006, '1ra generación', 'Gasolina 2.0L', 10.6, 6.8, 8.2, 9.43, 14.71, 12.20),
(3, 'Tucson', 2005, '1ra generación', 'Gasolina 2.0L', 10.4, 6.6, 8.0, 9.70, 15.15, 12.25),
(3, 'Tucson', 2004, '1ra generación', 'Gasolina 2.0L', 10.4, 6.6, 8.0, 9.70, 15.15, 12.25);



select*from Carros where Año = 2019-4;

INSERT INTO Carros (MarcaID, Modelo, Año, Generacion, Tipo_Motor, Consumo_Ciudad_L100km, Consumo_Carretera_L100km, Consumo_Mixto_L100km, Promedio_kmL_Ciudad, Promedio_kmL_Carretera, Promedio_kmL_Mixto)
VALUES 
(7, 'Jetta', 2024, '7ma generación', 'Gasolina 1.5L Turbo', 7.1, 5.9, 6.4, 14.08, 16.95, 15.63),
(7, 'Jetta', 2023, '7ma generación', 'Gasolina 1.5L Turbo', 7.1, 5.9, 6.4, 14.08, 16.95, 15.63),
(7, 'Jetta', 2022, '7ma generación', 'Gasolina 1.5L Turbo', 7.1, 5.9, 6.4, 14.08, 16.95, 15.63),
(7, 'Jetta', 2021, '7ma generación', 'Gasolina 1.4L Turbo', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(7, 'Jetta', 2020, '6ta generación', 'Gasolina 1.4L Turbo', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(7, 'Jetta', 2019, '6ta generación', 'Gasolina 1.4L Turbo', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(7, 'Jetta', 2018, '6ta generación', 'Gasolina 1.4L Turbo', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(7, 'Jetta', 2017, '6ta generación', 'Gasolina 1.4L Turbo', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(7, 'Jetta', 2016, '6ta generación', 'Gasolina 2.0L', 8.4, 6.9, 7.6, 11.90, 14.49, 13.16),
(7, 'Jetta', 2015, '6ta generación', 'Gasolina 2.0L', 8.4, 6.9, 7.6, 11.90, 14.49, 13.16),
(7, 'Jetta', 2014, '5ta generación', 'Gasolina 2.0L', 8.7, 7.1, 7.8, 11.49, 14.08, 12.82),
(7, 'Jetta', 2013, '5ta generación', 'Gasolina 2.0L', 8.7, 7.1, 7.8, 11.49, 14.08, 12.82),
(7, 'Jetta', 2012, '5ta generación', 'Gasolina 2.5L', 9.0, 7.1, 7.8, 11.11, 14.08, 12.82),
(7, 'Jetta', 2011, '5ta generación', 'Gasolina 2.5L', 9.0, 7.1, 7.8, 11.11, 14.08, 12.82),
(7, 'Jetta', 2010, '5ta generación', 'Gasolina 2.5L', 9.0, 7.1, 7.8, 11.11, 14.08, 12.82),
(7, 'Jetta', 2009, '5ta generación', 'Gasolina 2.5L', 9.0, 7.1, 7.8, 11.11, 14.08, 12.82),
(7, 'Jetta', 2008, '5ta generación', 'Gasolina 2.5L', 9.0, 7.1, 7.8, 11.11, 14.08, 12.82),
(7, 'Jetta', 2007, '5ta generación', 'Gasolina 2.5L', 9.0, 7.1, 7.8, 11.11, 14.08, 12.82),
(7, 'Jetta', 2006, '5ta generación', 'Gasolina 2.5L', 9.0, 7.1, 7.8, 11.11, 14.08, 12.82),
(7, 'Jetta', 2005, '5ta generación', 'Gasolina 2.0L', 9.4, 6.9, 7.8, 10.64, 14.49, 12.82),
(7, 'Jetta', 2004, '5ta generación', 'Gasolina 2.0L', 9.4, 6.9, 7.8, 10.64, 14.49, 12.82),
(7, 'Jetta', 2003, '5ta generación', 'Gasolina 2.0L', 9.4, 6.9, 7.8, 10.64, 14.49, 12.82),
(7, 'Jetta', 2002, '5ta generación', 'Gasolina 2.0L', 9.4, 6.9, 7.8, 10.64, 14.49, 12.82),
(7, 'Jetta', 2001, '5ta generación', 'Gasolina 1.9L Turbo', 9.4, 6.9, 7.8, 10.64, 14.49, 12.82),
(7, 'Jetta', 2000, '5ta generación', 'Gasolina 1.9L Turbo', 9.4, 6.9, 7.8, 10.64, 14.49, 12.82);


INSERT INTO Carros (MarcaID, Modelo, Año, Generacion, Tipo_Motor, Consumo_Ciudad_L100km, Consumo_Carretera_L100km, Consumo_Mixto_L100km, Promedio_kmL_Ciudad, Promedio_kmL_Carretera, Promedio_kmL_Mixto)
VALUES 
(6, 'Sentra', 2024, '8va generación', 'Gasolina 1.4L Turbo', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(6, 'Sentra', 2023, '8va generación', 'Gasolina 1.4L Turbo', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(6, 'Sentra', 2022, '8va generación', 'Gasolina 1.4L Turbo', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(6, 'Sentra', 2021, '8va generación', 'Gasolina 1.4L Turbo', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(6, 'Sentra', 2020, '7ma generación', 'Gasolina 1.8L', 8.4, 6.9, 7.6, 11.90, 14.49, 13.16),
(6, 'Sentra', 2019, '7ma generación', 'Gasolina 1.8L', 8.4, 6.9, 7.6, 11.90, 14.49, 13.16),
(6, 'Sentra', 2018, '7ma generación', 'Gasolina 1.8L', 8.4, 6.9, 7.6, 11.90, 14.49, 13.16),
(6, 'Sentra', 2017, '7ma generación', 'Gasolina 1.8L', 8.4, 6.9, 7.6, 11.90, 14.49, 13.16),
(6, 'Sentra', 2016, '6ta generación', 'Gasolina 1.8L', 8.7, 7.1, 7.8, 11.49, 14.08, 12.82),
(6, 'Sentra', 2015, '6ta generación', 'Gasolina 1.8L', 8.7, 7.1, 7.8, 11.49, 14.08, 12.82),
(6, 'Sentra', 2014, '6ta generación', 'Gasolina 1.8L', 8.7, 7.1, 7.8, 11.49, 14.08, 12.82),
(6, 'Sentra', 2013, '6ta generación', 'Gasolina 1.8L', 8.7, 7.1, 7.8, 11.49, 14.08, 12.82),
(6, 'Sentra', 2012, '5ta generación', 'Gasolina 2.0L', 9.0, 7.1, 7.8, 11.11, 14.08, 12.82),
(6, 'Sentra', 2011, '5ta generación', 'Gasolina 2.0L', 9.0, 7.1, 7.8, 11.11, 14.08, 12.82),
(6, 'Sentra', 2010, '5ta generación', 'Gasolina 2.0L', 9.0, 7.1, 7.8, 11.11, 14.08, 12.82),
(6, 'Sentra', 2009, '5ta generación', 'Gasolina 2.0L', 9.0, 7.1, 7.8, 11.11, 14.08, 12.82),
(6, 'Sentra', 2008, '5ta generación', 'Gasolina 2.0L', 9.0, 7.1, 7.8, 11.11, 14.08, 12.82),
(6, 'Sentra', 2007, '5ta generación', 'Gasolina 2.0L', 9.0, 7.1, 7.8, 11.11, 14.08, 12.82),
(6, 'Sentra', 2006, '5ta generación', 'Gasolina 2.0L', 9.0, 7.1, 7.8, 11.11, 14.08, 12.82),
(6, 'Sentra', 2005, '4ta generación', 'Gasolina 1.8L', 9.4, 7.1, 8.1, 10.64, 14.08, 12.35),
(6, 'Sentra', 2004, '5ta generación', 'Gasolina 1.8L', 9.4, 7.1, 8.1, 10.64, 14.08, 12.35),
(6, 'Sentra', 2003, '5ta generación', 'Gasolina 1.8L', 9.4, 7.1, 8.1, 10.64, 14.08, 12.35),
(6, 'Sentra', 2002, '5ta generación', 'Gasolina 1.8L', 9.4, 7.1, 8.1, 10.64, 14.08, 12.35),
(6, 'Sentra', 2001, '4ta generación', 'Gasolina 1.8L', 9.8, 7.4, 8.4, 10.20, 13.51, 11.90),
(6, 'Sentra', 2000, '4ta generación', 'Gasolina 1.8L', 9.8, 7.4, 8.4, 10.20, 13.51, 11.90);


INSERT INTO Carros (MarcaID, Modelo, Año, Generacion, Tipo_Motor, Consumo_Ciudad_L100km, Consumo_Carretera_L100km, Consumo_Mixto_L100km, Promedio_kmL_Ciudad, Promedio_kmL_Carretera, Promedio_kmL_Mixto)
VALUES 
(5, 'Swift', 2024, '6ta generación', 'Gasolina 1.2L Hybrid', 5.3, 4.0, 4.7, 18.87, 25.00, 21.28),
(5, 'Swift', 2023, '6ta generación', 'Gasolina 1.2L Hybrid', 5.3, 4.0, 4.7, 18.87, 25.00, 21.28),
(5, 'Swift', 2022, '6ta generación', 'Gasolina 1.2L Hybrid', 5.3, 4.0, 4.7, 18.87, 25.00, 21.28),
(5, 'Swift', 2021, '6ta generación', 'Gasolina 1.2L Hybrid', 5.3, 4.0, 4.7, 18.87, 25.00, 21.28),
(5, 'Swift', 2020, '5ta generación', 'Gasolina 1.2L Mild Hybrid', 5.9, 4.7, 5.3, 16.95, 21.28, 18.87),
(5, 'Swift', 2019, '5ta generación', 'Gasolina 1.2L Mild Hybrid', 5.9, 4.7, 5.3, 16.95, 21.28, 18.87),
(5, 'Swift', 2018, '5ta generación', 'Gasolina 1.2L', 6.1, 4.8, 5.4, 16.39, 20.83, 18.52),
(5, 'Swift', 2017, '5ta generación', 'Gasolina 1.2L', 6.1, 4.8, 5.4, 16.39, 20.83, 18.52),
(5, 'Swift', 2016, '5ta generación', 'Gasolina 1.2L', 6.1, 4.8, 5.4, 16.39, 20.83, 18.52),
(5, 'Swift', 2015, '5ta generación', 'Gasolina 1.2L', 6.1, 4.8, 5.4, 16.39, 20.83, 18.52),
(5, 'Swift', 2014, '4ta generación', 'Gasolina 1.2L', 6.4, 5.1, 5.7, 15.63, 19.61, 17.54),
(5, 'Swift', 2013, '4ta generación', 'Gasolina 1.2L', 6.4, 5.1, 5.7, 15.63, 19.61, 17.54),
(5, 'Swift', 2012, '4ta generación', 'Gasolina 1.2L', 6.4, 5.1, 5.7, 15.63, 19.61, 17.54),
(5, 'Swift', 2011, '4ta generación', 'Gasolina 1.2L', 6.4, 5.1, 5.7, 15.63, 19.61, 17.54),
(5, 'Swift', 2010, '3ra generación', 'Gasolina 1.5L', 7.1, 5.4, 6.1, 14.08, 18.52, 16.39),
(5, 'Swift', 2009, '3ra generación', 'Gasolina 1.5L', 7.1, 5.4, 6.1, 14.08, 18.52, 16.39),
(5, 'Swift', 2008, '3ra generación', 'Gasolina 1.5L', 7.1, 5.4, 6.1, 14.08, 18.52, 16.39),
(5, 'Swift', 2007, '3ra generación', 'Gasolina 1.5L', 7.4, 5.7, 6.4, 13.51, 17.54, 15.63),
(5, 'Swift', 2006, '3ra generación', 'Gasolina 1.5L', 7.4, 5.7, 6.4, 13.51, 17.54, 15.63),
(5, 'Swift', 2005, '2da generación', 'Gasolina 1.5L', 7.8, 5.9, 6.7, 12.82, 16.95, 14.93),
(5, 'Swift', 2004, '2da generación', 'Gasolina 1.0L', 7.2, 5.4, 6.1, 13.89, 18.52, 16.39),
(5, 'Swift', 2004, '2da generación', 'Gasolina 1.3L', 7.8, 5.9, 6.7, 12.82, 16.95, 14.93),
(5, 'Swift', 2003, '2da generación', 'Gasolina 1.0L', 7.2, 5.4, 6.1, 13.89, 18.52, 16.39),
(5, 'Swift', 2003, '2da generación', 'Gasolina 1.3L', 7.8, 5.9, 6.7, 12.82, 16.95, 14.93),
(5, 'Swift', 2002, '2da generación', 'Gasolina 1.0L', 7.2, 5.4, 6.1, 13.89, 18.52, 16.39),
(5, 'Swift', 2002, '2da generación', 'Gasolina 1.3L', 7.8, 5.9, 6.7, 12.82, 16.95, 14.93),
(5, 'Swift', 2001, '2da generación', 'Gasolina 1.0L', 7.2, 5.4, 6.1, 13.89, 18.52, 16.39),
(5, 'Swift', 2001, '2da generación', 'Gasolina 1.3L', 7.8, 5.9, 6.7, 12.82, 16.95, 14.93),
(5, 'Swift', 2000, '1ra generación', 'Gasolina 1.0L', 7.4, 5.6, 6.3, 13.51, 17.86, 15.87),
(5, 'Swift', 2000, '1ra generación', 'Gasolina 1.3L', 7.8, 5.9, 6.7, 12.82, 16.95, 14.93);


INSERT INTO Carros (MarcaID, Modelo, Año, Generacion, Tipo_Motor, Consumo_Ciudad_L100km, Consumo_Carretera_L100km, Consumo_Mixto_L100km, Promedio_kmL_Ciudad, Promedio_kmL_Carretera, Promedio_kmL_Mixto)
VALUES 
(4, 'K5', 2023, '12va generación', 'Gasolina', 6.9, 5.3, 5.9, 14.49, 18.87, 16.95),
(4, 'K5', 2022, '12va generación', 'Gasolina', 7.1, 5.4, 6.1, 14.08, 18.52, 16.39),
(4, 'K5', 2021, '11va generación', 'Gasolina', 7.8, 6.0, 6.7, 12.82, 16.67, 14.93),
(4, 'K5', 2020, '11va generación', 'Gasolina', 7.8, 6.0, 6.7, 12.82, 16.67, 14.93),
(4, 'K5', 2019, '11va generación', 'Gasolina', 7.8, 6.0, 6.7, 12.82, 16.67, 14.93),
(4, 'K5', 2018, '10ma generación', 'Gasolina', 8.4, 6.7, 7.4, 11.90, 14.93, 13.51),
(4, 'K5', 2017, '10ma generación', 'Gasolina', 8.4, 6.7, 7.4, 11.90, 14.93, 13.51),
(4, 'K5', 2016, '10ma generación', 'Gasolina', 8.4, 6.7, 7.4, 11.90, 14.93, 13.51),
(4, 'K5', 2015, '9na generación', 'Gasolina', 8.4, 6.7, 7.4, 11.90, 14.93, 13.51),
(4, 'K5', 2014, '9na generación', 'Gasolina', 8.4, 6.7, 7.4, 11.90, 14.93, 13.51),
(4, 'K5', 2013, '9na generación', 'Gasolina', 8.4, 6.7, 7.4, 11.90, 14.93, 13.51),
(4, 'K5', 2012, '8va generación', 'Gasolina', 8.4, 6.7, 7.4, 11.90, 14.93, 13.51),
(4, 'K5', 2011, '8va generación', 'Gasolina', 8.4, 6.7, 7.4, 11.90, 14.93, 13.51),
(4, 'K5', 2010, '7ma generación', 'Gasolina', 8.7, 6.9, 7.8, 11.49, 14.49, 12.82),
(4, 'K5', 2009, '7ma generación', 'Gasolina', 8.7, 6.9, 7.8, 11.49, 14.49, 12.82),
(4, 'K5', 2008, '7ma generación', 'Gasolina', 8.7, 6.9, 7.8, 11.49, 14.49, 12.82),
(4, 'K5', 2007, '6ta generación', 'Gasolina', 8.7, 6.9, 7.8, 11.49, 14.49, 12.82),
(4, 'K5', 2006, '6ta generación', 'Gasolina', 8.7, 6.9, 7.8, 11.49, 14.49, 12.82),
(4, 'K5', 2005, '5ta generación', 'Gasolina', 8.7, 6.9, 7.8, 11.49, 14.49, 12.82),
(4, 'K5', 2004, '5ta generación', 'Gasolina', 9.0, 7.1, 8.1, 11.11, 14.08, 12.35),
(4, 'K5', 2003, '4ta generación', 'Gasolina', 9.0, 7.1, 8.1, 11.11, 14.08, 12.35),
(4, 'K5', 2002, '3ra generación', 'Gasolina 2.0L', 9.8, 7.8, 8.7, 10.20, 12.82, 11.49),
(4, 'K5', 2001, '2da generación', 'Gasolina 2.4L', 10.2, 7.6, 8.7, 9.80, 13.16, 11.49),
(4, 'K5', 2000, '1ra generación', 'Gasolina 2.4L', 10.6, 7.8, 9.0, 9.43, 12.82, 11.11);


INSERT INTO Carros (MarcaID, Modelo, Año, Generacion, Tipo_Motor, Consumo_Ciudad_L100km, Consumo_Carretera_L100km, Consumo_Mixto_L100km, Promedio_kmL_Ciudad, Promedio_kmL_Carretera, Promedio_kmL_Mixto)
VALUES 
(3, 'Sonata', 2024, '9na generación', 'Gasolina 2.5L', 7.1, 5.9, 6.5, 14.08, 16.95, 15.38),
(3, 'Sonata', 2023, '9na generación', 'Gasolina 2.5L', 7.1, 5.9, 6.5, 14.08, 16.95, 15.38),
(3, 'Sonata', 2022, '9na generación', 'Gasolina 2.5L', 7.1, 5.9, 6.5, 14.08, 16.95, 15.38),
(3, 'Sonata', 2021, '8va generación', 'Gasolina 2.5L', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(3, 'Sonata', 2020, '8va generación', 'Gasolina 2.5L', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(3, 'Sonata', 2019, '8va generación', 'Gasolina 2.5L', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(3, 'Sonata', 2018, '8va generación', 'Gasolina 2.4L', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(3, 'Sonata', 2017, '7ma generación', 'Gasolina 2.4L', 8.1, 6.7, 7.4, 12.35, 14.93, 13.51),
(3, 'Sonata', 2016, '7ma generación', 'Gasolina 2.4L', 8.1, 6.7, 7.4, 12.35, 14.93, 13.51),
(3, 'Sonata', 2015, '7ma generación', 'Gasolina 2.0L Turbo', 8.4, 6.9, 7.6, 11.90, 14.49, 13.16),
(3, 'Sonata', 2014, '6ta generación', 'Gasolina 2.4L', 8.1, 6.7, 7.4, 12.35, 14.93, 13.51),
(3, 'Sonata', 2013, '6ta generación', 'Gasolina 2.0L Turbo', 8.4, 6.9, 7.6, 11.90, 14.49, 13.16),
(3, 'Sonata', 2012, '6ta generación', 'Gasolina 2.4L', 8.4, 6.9, 7.6, 11.90, 14.49, 13.16),
(3, 'Sonata', 2011, '5ta generación', 'Gasolina 2.4L', 8.7, 7.1, 7.8, 11.49, 14.08, 12.82),
(3, 'Sonata', 2010, '5ta generación', 'Gasolina 2.4L', 8.7, 7.1, 7.8, 11.49, 14.08, 12.82),
(3, 'Sonata', 2009, '5ta generación', 'Gasolina 2.4L', 8.7, 7.1, 7.8, 11.49, 14.08, 12.82),
(3, 'Sonata', 2008, '4ta generación', 'Gasolina 2.4L', 8.7, 7.1, 7.8, 11.49, 14.08, 12.82),
(3, 'Sonata', 2007, '4ta generación', 'Gasolina 2.4L', 8.7, 7.1, 7.8, 11.49, 14.08, 12.82),
(3, 'Sonata', 2006, '4ta generación', 'Gasolina 2.4L', 8.7, 7.1, 7.8, 11.49, 14.08, 12.82),
(3, 'Sonata', 2005, '3ra generación', 'Gasolina 2.4L', 8.4, 6.9, 7.6, 11.90, 14.49, 13.16),
(3, 'Sonata', 2004, '3ra generación', 'Gasolina 2.4L', 8.4, 6.9, 7.6, 11.90, 14.49, 13.16),
(3, 'Sonata', 2003, '3ra generación', 'Gasolina 2.4L', 8.4, 6.9, 7.6, 11.90, 14.49, 13.16),
(3, 'Sonata', 2002, '2da generación', 'Gasolina 2.7L V6', 9.1, 7.1, 8.1, 10.99, 14.08, 12.35),
(3, 'Sonata', 2001, '2da generación', 'Gasolina 2.7L V6', 9.1, 7.1, 8.1, 10.99, 14.08, 12.35),
(3, 'Sonata', 2000, '1ra generación', 'Gasolina 2.0L', 9.8, 7.8, 8.7, 10.20, 12.82, 11.49);

INSERT INTO Carros (MarcaID, Modelo, Año, Generacion, Tipo_Motor, Consumo_Ciudad_L100km, Consumo_Carretera_L100km, Consumo_Mixto_L100km, Promedio_kmL_Ciudad, Promedio_kmL_Carretera, Promedio_kmL_Mixto)
VALUES 
(2, 'Civic', 2024, '12va generación', 'Gasolina', 6.7, 5.1, 5.8, 14.93, 19.61, 17.24),
(2, 'Civic', 2023, '12va generación', 'Gasolina', 6.9, 5.3, 5.9, 14.49, 18.87, 16.95),
(2, 'Civic', 2022, '12va generación', 'Gasolina', 7.1, 5.4, 6.1, 14.08, 18.52, 16.39),
(2, 'Civic', 2021, '11va generación', 'Gasolina', 7.1, 5.6, 6.3, 14.08, 17.86, 15.87),
(2, 'Civic', 2020, '11va generación', 'Gasolina', 7.1, 5.6, 6.3, 14.08, 17.86, 15.87),
(2, 'Civic', 2019, '10va generación', 'Gasolina', 7.1, 5.6, 6.3, 14.08, 17.86, 15.87),
(2, 'Civic', 2018, '10va generación', 'Gasolina', 7.1, 5.6, 6.3, 14.08, 17.86, 15.87),
(2, 'Civic', 2017, '10va generación', 'Gasolina', 7.1, 5.6, 6.3, 14.08, 17.86, 15.87),
(2, 'Civic', 2016, '10va generación', 'Gasolina', 7.1, 5.6, 6.3, 14.08, 17.86, 15.87),
(2, 'Civic', 2015, '9na generación', 'Gasolina', 7.4, 5.9, 6.6, 13.51, 16.95, 15.15),
(2, 'Civic', 2014, '9na generación', 'Gasolina', 7.4, 5.9, 6.6, 13.51, 16.95, 15.15),
(2, 'Civic', 2013, '9na generación', 'Gasolina', 7.4, 5.9, 6.6, 13.51, 16.95, 15.15),
(2, 'Civic', 2012, '8va generación', 'Gasolina', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(2, 'Civic', 2011, '8va generación', 'Gasolina', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(2, 'Civic', 2010, '8va generación', 'Gasolina', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(2, 'Civic', 2009, '8va generación', 'Gasolina', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(2, 'Civic', 2008, '8va generación', 'Gasolina', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(2, 'Civic', 2007, '7ma generación', 'Gasolina', 8.1, 6.7, 7.4, 12.35, 14.93, 13.51),
(2, 'Civic', 2006, '7ma generación', 'Gasolina', 8.1, 6.7, 7.4, 12.35, 14.93, 13.51),
(2, 'Civic', 2005, '7ma generación', 'Gasolina', 8.1, 6.7, 7.4, 12.35, 14.93, 13.51),
(2, 'Civic', 2004, '7ma generación', 'Gasolina', 8.1, 6.7, 7.4, 12.35, 14.93, 13.51),
(2, 'Civic', 2003, '6ta generación', 'Gasolina', 8.4, 6.7, 7.5, 11.90, 14.93, 13.33),
(2, 'Civic', 2002, '6ta generación', 'Gasolina', 8.4, 6.7, 7.5, 11.90, 14.93, 13.33),
(2, 'Civic', 2001, '5ta generación', 'Gasolina 1.4', 7.8, 6.3, 7.0, 12.82, 15.87, 14.29),
(2, 'Civic', 2000, '5ta generación', 'Gasolina 1.4', 7.8, 6.3, 7.0, 12.82, 15.87, 14.29);

INSERT INTO Carros (MarcaID, Modelo, Año, Generacion, Tipo_Motor, Consumo_Ciudad_L100km, Consumo_Carretera_L100km, Consumo_Mixto_L100km, Promedio_kmL_Ciudad, Promedio_kmL_Carretera, Promedio_kmL_Mixto)
VALUES 
(1, 'Corolla', 2024, '12va generación', 'Gasolina', 6.9, 5.9, 6.4, 14.49, 16.95, 15.63),
(1, 'Corolla', 2023, '12va generación', 'Gasolina', 6.9, 5.9, 6.4, 14.49, 16.95, 15.63),
(1, 'Corolla', 2022, '12va generación', 'Gasolina', 6.9, 5.9, 6.4, 14.49, 16.95, 15.63),
(1, 'Corolla', 2021, '12va generación', 'Gasolina', 7.1, 5.8, 6.4, 14.08, 17.24, 15.63),
(1, 'Corolla', 2020, '12va generación', 'Gasolina', 7.1, 5.8, 6.4, 14.08, 17.24, 15.63),
(1, 'Corolla', 2019, '11va generación', 'Gasolina', 7.1, 5.8, 6.4, 14.08, 17.24, 15.63),
(1, 'Corolla', 2018, '11va generación', 'Gasolina', 7.1, 5.8, 6.4, 14.08, 17.24, 15.63),
(1, 'Corolla', 2017, '11va generación', 'Gasolina', 7.4, 6.0, 6.7, 13.51, 16.67, 14.93),
(1, 'Corolla', 2016, '11va generación', 'Gasolina', 7.4, 6.0, 6.7, 13.51, 16.67, 14.93),
(1, 'Corolla', 2015, '10ma generación', 'Gasolina', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(1, 'Corolla', 2014, '10ma generación', 'Gasolina', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(1, 'Corolla', 2013, '10ma generación', 'Gasolina', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(1, 'Corolla', 2012, '9na generación', 'Gasolina', 8.1, 6.7, 7.4, 12.35, 14.93, 13.51),
(1, 'Corolla', 2011, '9na generación', 'Gasolina', 8.1, 6.7, 7.4, 12.35, 14.93, 13.51),
(1, 'Corolla', 2010, '9na generación', 'Gasolina', 8.1, 6.7, 7.4, 12.35, 14.93, 13.51),
(1, 'Corolla', 2009, '8va generación', 'Gasolina', 8.1, 6.7, 7.4, 12.35, 14.93, 13.51),
(1, 'Corolla', 2008, '8va generación', 'Gasolina', 8.4, 6.9, 7.6, 11.90, 14.49, 13.16),
(1, 'Corolla', 2007, '8va generación', 'Gasolina', 8.4, 6.9, 7.6, 11.90, 14.49, 13.16),
(1, 'Corolla', 2006, '7ma generación', 'Gasolina', 8.1, 6.7, 7.4, 12.35, 14.93, 13.51),
(1, 'Corolla', 2005, '7ma generación', 'Gasolina', 8.1, 6.7, 7.4, 12.35, 14.93, 13.51),
(1, 'Corolla', 2004, '7ma generación', 'Gasolina', 8.1, 6.7, 7.4, 12.35, 14.93, 13.51),
(1, 'Corolla', 2003, '6ta generación', 'Gasolina', 7.8, 6.4, 7.1, 12.82, 15.63, 14.08),
(1, 'Corolla', 2002, '5ta generación', 'Gasolina', 7.8, 6.3, 7.0, 12.82, 15.87, 14.29),
(1, 'Corolla', 2001, '5ta generación', 'Gasolina', 7.8, 6.3, 7.0, 12.82, 15.87, 14.29),
(1, 'Corolla', 2000, '5ta generación', 'Gasolina', 7.8, 6.3, 7.0, 12.82, 15.87, 14.29);



select*from Carros;

