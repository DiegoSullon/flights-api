export const getPaymentAirline = (client) =>
  new Promise((resolve, reject) => {
    try {
      client.query(
        `select p.idpago, p.idreserva, p.fecha, p.idpasajero, p.monto, p.tipo_comprobante, p.num_comprobante, p.impuesto, a2.nombre as "aerolinea", a2.idaerolinea, a2.ruc as "rucaereolina"
        from vuelo v join reserva r on v.idreserva = r.idreserva 
        join pago p on p.idreserva = r.idreserva 
        join tarifa t on t.idtarifa  = v.idtarifa 
        join avion a on a.idavion = v.idavion 
        join aerolinea a2 on a2.idaerolinea  = a.idaerolinea
        join aeropuerto a3 on a3.idaeropuerto  = v.idareopuerto`,
        (error, results) => {
          if (error) {
            throw error
          } else {
            console.log(results.rows)
            resolve(results.rows)
          }
        }
      )
    } catch (err) {
      reject(err)
    }
  })