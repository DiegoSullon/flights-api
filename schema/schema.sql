CREATE TABLE aerolinea (
	idaerolinea int8 NOT NULL,
	ruc varchar NULL,
	nombre varchar NULL,
	CONSTRAINT aerolinea_pk PRIMARY KEY (idaerolinea)
);

CREATE TABLE avion (
	idavion int8 NOT NULL,
	idaerolinea int8 NOT NULL,
	fabricante varchar NULL,
	tipo varchar NULL,
	capacidad varchar NULL,
	CONSTRAINT avion_pk PRIMARY KEY (idavion)
);
ALTER TABLE avion ADD CONSTRAINT avion_fk FOREIGN KEY (idaerolinea) REFERENCES aerolinea(idaerolinea);

CREATE TABLE pais (
	idpais int8 NOT NULL,
	nombre varchar NULL,
	CONSTRAINT pais_pk PRIMARY KEY (idpais)
);

CREATE TABLE aeropuerto (
	idaeropuerto int8 NOT NULL,
	nombre varchar NULL,
	idpais int8 NULL,
	CONSTRAINT aeropuerto_pk PRIMARY KEY (idaeropuerto)
);
ALTER TABLE public.aeropuerto ADD CONSTRAINT aeropuerto_fk FOREIGN KEY (idpais) REFERENCES pais(idpais);

CREATE TABLE asiento (
	idasiento int8 NOT NULL,
	letra varchar NULL,
	fila varchar NULL,
	CONSTRAINT asiento_pk PRIMARY KEY (idasiento)
);

CREATE TABLE tarifa (
	idtarifa int8 NOT NULL,
	clase varchar NULL,
	precio float4 NULL,
	impuesto float4 NULL,
	CONSTRAINT tarifa_pk PRIMARY KEY (idtarifa)
);

CREATE TABLE pasajero (
	idpasajero int8 NOT NULL,
	nombre varchar NULL,
	apaterno varchar NULL,
	amaterno varchar NULL,
	tipo_documento varchar NULL,
	num_documento varchar NULL,
	fecha_nacimiento varchar NULL,
	idpais int8 NULL,
	telefono varchar NULL,
	email varchar NULL,
	clave varchar NULL,
	CONSTRAINT pasajero_pk PRIMARY KEY (idpasajero)
);
ALTER TABLE pasajero ADD CONSTRAINT pasajero_fk FOREIGN KEY (idpais) REFERENCES pais(idpais);

CREATE TABLE reserva (
	idreserva int8 NOT NULL,
	costo float4 NULL,
	fecha timestamptz NULL,
	observacion varchar NULL,
	CONSTRAINT reserva_pk PRIMARY KEY (idreserva)
);

CREATE TABLE pago (
	idpago int8 NOT NULL,
	idreserva int8 NULL,
	fecha timestamptz NULL,
	idpasajero int8 NOT NULL,
	monto float4 NULL,
	tipo_comprobante varchar NULL,
	num_comprobante varchar NULL,
	impuesto float4 NULL,
	CONSTRAINT pago_pk PRIMARY KEY (idpago)
);
ALTER TABLE pago ADD CONSTRAINT pago_fk FOREIGN KEY (idpasajero) REFERENCES pasajero(idpasajero);
ALTER TABLE pago ADD CONSTRAINT pago_fk_1 FOREIGN KEY (idreserva) REFERENCES reserva(idreserva);

CREATE TABLE vuelo (
	idasiento int8 NOT NULL,
	idareopuerto int8 NULL,
	idreserva int8 NULL,
	idavion int8 NULL,
	idtarifa int8 NULL
);
ALTER TABLE vuelo ADD CONSTRAINT vuelo_fk FOREIGN KEY (idasiento) REFERENCES asiento(idasiento);
ALTER TABLE vuelo ADD CONSTRAINT vuelo_fk_1 FOREIGN KEY (idareopuerto) REFERENCES aeropuerto(idaeropuerto);
ALTER TABLE vuelo ADD CONSTRAINT vuelo_fk_2 FOREIGN KEY (idreserva) REFERENCES reserva(idreserva);
ALTER TABLE vuelo ADD CONSTRAINT vuelo_fk_3 FOREIGN KEY (idavion) REFERENCES avion(idavion);
ALTER TABLE vuelo ADD CONSTRAINT vuelo_fk_4 FOREIGN KEY (idtarifa) REFERENCES tarifa(idtarifa);