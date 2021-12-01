import {
  DB_HOST,
  DB_NAME,
  DB_PASS,
  DB_PORT,
  DB_USER
} from '../../config/envars.js'
import pg from 'pg'
import { getPaymentAirline } from '../model/payment.js'
import { response } from 'express'

const client = new pg.Client({
  connectionString: `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  ssl: {
    rejectUnauthorized: false
  }
})
client.connect()

export const getAllFlightsAsync = () =>
  new Promise((resolve, reject) => {
    try {
      client.query(
        `select r.fecha as fecha, a2.nombre as "aerolinea", a.tipo as "tipo", a.capacidad as "capacidad", a3.nombre as "aeropuerto"
    from vuelo v join reserva r on v.idreserva = r.idreserva 
    join tarifa t on t.idtarifa  = v.idtarifa 
    join avion a on a.idavion = v.idavion 
    join aerolinea a2 on a2.idaerolinea  = a.idaerolinea
    join aeropuerto a3 on a3.idaeropuerto  = v.idareopuerto `,
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
export const getPassengerByFlights = (n = 3, surname1='', surname2='', name='', bithdate='') =>
  new Promise((resolve, reject) => {
    try {
      client.query(
        `select * from pasajero where pasajero.apaterno like '%${surname1}%' 
        and pasajero.amaterno like '%${surname2}%' 
        and pasajero.nombre like '%${name}%' and pasajero.fecha_nacimiento ::text like '%${bithdate}%'
        order by (SELECT COUNT(pago.idpasajero) 
        FROM pago WHERE pago.idpasajero 
        IN(SELECT idpasajero FROM pasajero) 
        and pago.idpasajero = pasajero.idpasajero) desc FETCH FIRST ${n} ROWS ONLY`,
        (error, results) => {
          if (error) {
            throw error
          } else {
            console.log(`Get ${n} passengers`)
            console.log(results.rows)
            resolve(results.rows)
          }
        }
      )
    } catch (err) {
      reject(err)
    }
  })
export const getPaymentBookingByAirportAirline = (detiny = '', airline='') =>
  new Promise((resolve, reject) => {
    try {
      client.query(
        `select p.monto as "costo_total", r.costo  as "costo_reserva", r.fecha, a3.nombre as "vuelo", a2.nombre as "aerolinea"
        from pago p join reserva r on p.idreserva = r.idreserva 
        join vuelo v on v.idreserva = r.idreserva join avion a on a.idavion = v.idavion 
        join aerolinea a2 on a2.idaerolinea = a.idaerolinea join aeropuerto a3 
        on a3.idaeropuerto = v.idareopuerto where a3.nombre like '%${detiny}%' and a2.nombre like '%${airline}%'`,
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
export const getAll = (table= 'aerolinea') =>
  new Promise((resolve, reject) => {
    try {
      client.query(
        `select * from ${table}`,
        (error, results) => {
          if (error) {
            throw error
          } else {
            console.log(`Get all rows ${table} table`)
            console.log(results.rows)
            resolve(results.rows)
          }
        }
      )
    } catch (err) {
      reject(err)
    }
  })
export const getPaymentA = () =>
  new Promise((resolve, reject) => {
    getPaymentAirline(client).then(response => resolve(response))
    .catch(error => reject(error))
    
  })
export const getFlightsByPaymentDate = (date = '') =>
  new Promise((resolve, reject) => {
    const whereQuery = date !== '' ? `where p.fecha::text like '%${date}%'` : ''
    try {
      client.query(
        `select r.fecha as fecha, a2.nombre as "aerolinea", a.tipo as "tipo", a.capacidad as "capacidad", a3.nombre as "aeropuerto", p.fecha as "pago"
        from vuelo v join reserva r on v.idreserva = r.idreserva 
        join pago p on p.idreserva = r.idreserva 
        join tarifa t on t.idtarifa  = v.idtarifa 
        join avion a on a.idavion = v.idavion 
        join aerolinea a2 on a2.idaerolinea  = a.idaerolinea
        join aeropuerto a3 on a3.idaeropuerto  = v.idareopuerto ${whereQuery}`,
        (error, results) => {
          if (error) {
            reject(error)
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

export const postFlight = ({
  idasiento,
  idareopuerto,
  idreserva,
  idavion,
  idtarifa
}) =>
  new Promise((resolve, reject) => {
    try {
      client.query(
        `INSERT INTO vuelo (idasiento, idareopuerto, idreserva, idavion, idtarifa) VALUES(${idasiento}, ${idareopuerto}, ${idreserva}, ${idavion}, ${idtarifa})`,
        (error, results) => {
          if (error) {
            reject(error)
          } else {
            console.log(results.command)
            resolve(results.command)
          }
        }
      )
    } catch (err) {
      reject(err)
    }
  })
