--Areolinea
INSERT INTO aerolinea (idaerolinea, ruc, nombre) VALUES((select count(idaerolinea) + 1 from "aerolinea"), '89564638626', 'LATAM');
INSERT INTO aerolinea (idaerolinea, ruc, nombre) VALUES((select count(idaerolinea) + 1 from "aerolinea"), '75839275942', 'Avianca');

--Avion
INSERT INTO avion (idavion, idaerolinea, fabricante, tipo, capacidad) VALUES((select count(avion) + 1 from "avion"), 1, 'Airbus', 'comercial', '200');
INSERT INTO avion (idavion, idaerolinea, fabricante, tipo, capacidad) VALUES((select count(avion) + 1 from "avion"), 2, 'Boeing', 'comercial', '197');

--Pais
INSERT INTO pais (idpais, nombre) VALUES((select count(pais) + 1 from "pais"), 'Argentina');
INSERT INTO pais (idpais, nombre) VALUES((select count(pais) + 1 from "pais"), 'Chile');
INSERT INTO pais (idpais, nombre) VALUES((select count(pais) + 1 from "pais"), 'Peru');
INSERT INTO pais (idpais, nombre) VALUES((select count(pais) + 1 from "pais"), 'USA');

--Areopuerto
INSERT INTO aeropuerto (idaeropuerto, nombre, idpais) VALUES((select count(aeropuerto) + 1 from "aeropuerto"), 'Aeropuerto Buenos Aires', 1);
INSERT INTO aeropuerto (idaeropuerto, nombre, idpais) VALUES((select count(aeropuerto) + 1 from "aeropuerto"), 'Aeropuerto Santiago', 1);
INSERT INTO aeropuerto (idaeropuerto, nombre, idpais) VALUES((select count(aeropuerto) + 1 from "aeropuerto"), 'Aeropuerto Lima', 1);
INSERT INTO aeropuerto (idaeropuerto, nombre, idpais) VALUES((select count(aeropuerto) + 1 from "aeropuerto"), 'Aeropuerto Washington DC', 1);

--Asiento
INSERT INTO asiento (idasiento, letra, fila) VALUES((select count(asiento) + 1 from "asiento"), 'A', '1');
INSERT INTO asiento (idasiento, letra, fila) VALUES((select count(asiento) + 1 from "asiento"), 'A', '2');
INSERT INTO asiento (idasiento, letra, fila) VALUES((select count(asiento) + 1 from "asiento"), 'A', '3');
INSERT INTO asiento (idasiento, letra, fila) VALUES((select count(asiento) + 1 from "asiento"), 'B', '1');
INSERT INTO asiento (idasiento, letra, fila) VALUES((select count(asiento) + 1 from "asiento"), 'B', '2');
INSERT INTO asiento (idasiento, letra, fila) VALUES((select count(asiento) + 1 from "asiento"), 'B', '3');
INSERT INTO asiento (idasiento, letra, fila) VALUES((select count(asiento) + 1 from "asiento"), 'C', '1');
INSERT INTO asiento (idasiento, letra, fila) VALUES((select count(asiento) + 1 from "asiento"), 'C', '2');
INSERT INTO asiento (idasiento, letra, fila) VALUES((select count(asiento) + 1 from "asiento"), 'C', '3');

--Tarifa
INSERT INTO tarifa (idtarifa, clase, precio, impuesto) VALUES((select count(tarifa) + 1 from "tarifa"), 'EMIRATES', 4000.0, 0.1);
INSERT INTO tarifa (idtarifa, clase, precio, impuesto) VALUES((select count(tarifa) + 1 from "tarifa"), 'PREMIUM', 2000.0, 0.1);
INSERT INTO tarifa (idtarifa, clase, precio, impuesto) VALUES((select count(tarifa) + 1 from "tarifa"), 'BUSINESS', 1300.0, 0.1);
INSERT INTO tarifa (idtarifa, clase, precio, impuesto) VALUES((select count(tarifa) + 1 from "tarifa"), 'TOURIST', 700.0, 0.1);

--Pasajero
INSERT INTO pasajero (idpasajero, nombre, apaterno, amaterno, tipo_documento, num_documento, fecha_nacimiento, idpais, telefono, email, clave) VALUES((select count(pasajero) + 1 from "pasajero"), 'Pedro', 'Suarez', 'Vasquez', 'DNI', '273849586', '1995-12-25', 1, '979655376', 'pedro.suarez@gmail.com', '273849586');
INSERT INTO pasajero (idpasajero, nombre, apaterno, amaterno, tipo_documento, num_documento, fecha_nacimiento, idpais, telefono, email, clave) VALUES((select count(pasajero) + 1 from "pasajero"), 'Jorge', 'Benes', 'Porky', 'DNI', '373849586', '1995-11-24', 2, '979655375', 'jorge.benes@gmail.com', '373849586');
INSERT INTO pasajero (idpasajero, nombre, apaterno, amaterno, tipo_documento, num_documento, fecha_nacimiento, idpais, telefono, email, clave) VALUES((select count(pasajero) + 1 from "pasajero"), 'Carla', 'Perez', 'Zorrilla', 'DNI', '473849586', '1995-10-23', 3, '979655374', 'carla.perez@gmail.com', '473849586');
INSERT INTO pasajero (idpasajero, nombre, apaterno, amaterno, tipo_documento, num_documento, fecha_nacimiento, idpais, telefono, email, clave) VALUES((select count(pasajero) + 1 from "pasajero"), 'Ana', 'Victoria', 'Vasquez', 'DNI', '573849586', '1995-09-22', 2, '979655373', 'ana.victoria@gmail.com', '573849586');
INSERT INTO pasajero (idpasajero, nombre, apaterno, amaterno, tipo_documento, num_documento, fecha_nacimiento, idpais, telefono, email, clave) VALUES((select count(pasajero) + 1 from "pasajero"), 'Elmer', 'Savedra', 'Lozano', 'DNI', '673849586', '1995-08-21', 1, '979655372', 'elmer.savedra@gmail.com', '673849586');

--Reserva
INSERT INTO reserva (idreserva, costo, fecha, observacion) VALUES((select count(reserva) + 1 from "reserva"), 30.0, '2021-12-18', '');
INSERT INTO reserva (idreserva, costo, fecha, observacion) VALUES((select count(reserva) + 1 from "reserva"), 30.0, '2021-12-17', '');
INSERT INTO reserva (idreserva, costo, fecha, observacion) VALUES((select count(reserva) + 1 from "reserva"), 30.0, '2021-12-21', '');
INSERT INTO reserva (idreserva, costo, fecha, observacion) VALUES((select count(reserva) + 1 from "reserva"), 30.0, '2021-12-22', '');
INSERT INTO reserva (idreserva, costo, fecha, observacion) VALUES((select count(reserva) + 1 from "reserva"), 30.0, '2021-12-23', '');

--Pago
INSERT INTO pago (idpago, idreserva, fecha, idpasajero, monto, tipo_comprobante, num_comprobante, impuesto) VALUES((select count(pago) + 1 from "pago"), 1, '2021-11-18', 1, 4030.0, 'boleta', '000001', 0.1);
INSERT INTO pago (idpago, idreserva, fecha, idpasajero, monto, tipo_comprobante, num_comprobante, impuesto) VALUES((select count(pago) + 1 from "pago"), 2, '2021-11-17', 1, 4030.0, 'boleta', '000001', 0.1);
INSERT INTO pago (idpago, idreserva, fecha, idpasajero, monto, tipo_comprobante, num_comprobante, impuesto) VALUES((select count(pago) + 1 from "pago"), 3, '2021-11-21', 1, 2030.0, 'boleta', '000001', 0.1);
INSERT INTO pago (idpago, idreserva, fecha, idpasajero, monto, tipo_comprobante, num_comprobante, impuesto) VALUES((select count(pago) + 1 from "pago"), 4, '2021-11-22', 1, 1330.0, 'boleta', '000001', 0.1);
INSERT INTO pago (idpago, idreserva, fecha, idpasajero, monto, tipo_comprobante, num_comprobante, impuesto) VALUES((select count(pago) + 1 from "pago"), 5, '2021-11-23', 1, 730.0, 'boleta', '000001', 0.1);

--Vuelo
INSERT INTO vuelo (idasiento, idareopuerto, idreserva, idavion, idtarifa) VALUES(1, 1, 1, 1, 1);
INSERT INTO vuelo (idasiento, idareopuerto, idreserva, idavion, idtarifa) VALUES(2, 2, 2, 2, 2);
INSERT INTO vuelo (idasiento, idareopuerto, idreserva, idavion, idtarifa) VALUES(3, 3, 3, 1, 3);
INSERT INTO vuelo (idasiento, idareopuerto, idreserva, idavion, idtarifa) VALUES(4, 4, 4, 2, 4);
INSERT INTO vuelo (idasiento, idareopuerto, idreserva, idavion, idtarifa) VALUES(5, 1, 1, 1, 1);
INSERT INTO vuelo (idasiento, idareopuerto, idreserva, idavion, idtarifa) VALUES(6, 2, 2, 2, 2);
INSERT INTO vuelo (idasiento, idareopuerto, idreserva, idavion, idtarifa) VALUES(1, 3, 3, 1, 3);