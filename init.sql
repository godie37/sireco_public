
-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-09-2024 a las 22:29:48
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sirecodb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cementerio`
--

CREATE TABLE `cementerio` (
  `ID_CEMENT` int(10) NOT NULL,
  `NRO_CUENTA` int(11) NOT NULL,
  `NRO_CONT` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comercios`
--

CREATE TABLE `comercios` (
  `ID_COMER` int(10) NOT NULL,
  `NRO_COM` int(11) NOT NULL,
  `NRO_CONT` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contribuyentes`
--

CREATE TABLE `contribuyentes` (
  `NRO_CONTRIB` int(11) NOT NULL,
  `CUIL` varchar(13) NOT NULL,
  `NOMBRE` varchar(30) NOT NULL,
  `APELLIDO` varchar(30) NOT NULL,
  `DIRECCION` varchar(255) NOT NULL,
  `EMAIL` varchar(50) NOT NULL,
  `TELEFONO` bigint(15) NOT NULL,
  `PROVINCIA` varchar(45) NOT NULL,
  `LOCALIDAD` varchar(45) NOT NULL,
  `CP` int(11) NOT NULL,
  `FECHA` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `contribuyentes`
--

INSERT INTO `contribuyentes` (`NRO_CONTRIB`, `CUIL`, `NOMBRE`, `APELLIDO`, `DIRECCION`, `EMAIL`, `TELEFONO`, `PROVINCIA`, `LOCALIDAD`, `CP`, `FECHA`) VALUES
(100, '20281709810', 'Diego', 'Diaz', 'Las Amapolas 594', 'godie37@gmail.com', 23155596341, 'Buenos Aires', 'Santa Clara del Mar', 7906, '2024-09-23 11:31:48');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inmuebles`
--

CREATE TABLE `inmuebles` (
  `ID_INM` int(10) NOT NULL,
  `NRO_INM` int(11) NOT NULL,
  `NRO_CONT` int(11) NOT NULL,
  `INM_RECURSO` varchar(15) NOT NULL COMMENT 'ABL ó Red Vial'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rodados`
--

CREATE TABLE `rodados` (
  `ID_ROD` int(10) NOT NULL,
  `NRO_CONT` int(11) NOT NULL,
  `ROD_RECURSO` varchar(10) NOT NULL COMMENT 'Moto o Vehiculo',
  `PATENTE` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cementerio`
--
ALTER TABLE `cementerio`
  ADD PRIMARY KEY (`ID_CEMENT`),
  ADD KEY `NRO_CONT` (`NRO_CONT`);

--
-- Indices de la tabla `comercios`
--
ALTER TABLE `comercios`
  ADD PRIMARY KEY (`ID_COMER`),
  ADD KEY `NRO_CONT` (`NRO_CONT`);

--
-- Indices de la tabla `contribuyentes`
--
ALTER TABLE `contribuyentes`
  ADD UNIQUE KEY `NRO_CONTRIB` (`NRO_CONTRIB`);

--
-- Indices de la tabla `inmuebles`
--
ALTER TABLE `inmuebles`
  ADD PRIMARY KEY (`ID_INM`),
  ADD KEY `NRO_CONT` (`NRO_CONT`);

--
-- Indices de la tabla `rodados`
--
ALTER TABLE `rodados`
  ADD PRIMARY KEY (`ID_ROD`),
  ADD KEY `NRO_CONT` (`NRO_CONT`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cementerio`
--
ALTER TABLE `cementerio`
  MODIFY `ID_CEMENT` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `comercios`
--
ALTER TABLE `comercios`
  MODIFY `ID_COMER` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `contribuyentes`
--
ALTER TABLE `contribuyentes`
  MODIFY `NRO_CONTRIB` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;

--
-- AUTO_INCREMENT de la tabla `inmuebles`
--
ALTER TABLE `inmuebles`
  MODIFY `ID_INM` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `rodados`
--
ALTER TABLE `rodados`
  MODIFY `ID_ROD` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cementerio`
--
ALTER TABLE `cementerio`
  ADD CONSTRAINT `cementerio_ibfk_1` FOREIGN KEY (`NRO_CONT`) REFERENCES `contribuyentes` (`NRO_CONTRIB`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `comercios`
--
ALTER TABLE `comercios`
  ADD CONSTRAINT `comercios_ibfk_1` FOREIGN KEY (`NRO_CONT`) REFERENCES `contribuyentes` (`NRO_CONTRIB`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `inmuebles`
--
ALTER TABLE `inmuebles`
  ADD CONSTRAINT `inmuebles_ibfk_1` FOREIGN KEY (`NRO_CONT`) REFERENCES `contribuyentes` (`NRO_CONTRIB`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `rodados`
--
ALTER TABLE `rodados`
  ADD CONSTRAINT `rodados_ibfk_1` FOREIGN KEY (`NRO_CONT`) REFERENCES `contribuyentes` (`NRO_CONTRIB`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, FILE, INDEX, ALTER, CREATE TEMPORARY TABLES, EXECUTE, CREATE VIEW, SHOW VIEW, CREATE ROUTINE, ALTER ROUTINE, EVENT, TRIGGER ON *.* TO `remote`@`%` IDENTIFIED BY PASSWORD '6Efj3m7jO0GAtd8k';