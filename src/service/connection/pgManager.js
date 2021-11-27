import {
  DB_HOST,
  DB_NAME,
  DB_PASS,
  DB_PORT,
  DB_USER
} from '../../config/envars.js'
import pg from 'pg'

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
          }
          console.log(results.rows)
          resolve(results.rows) //if works
        }
      )
    } catch (err) {
      reject(err) //doesn't work
    }
  })
export const getFlightsByPaymentDate = (date = '') =>
  new Promise((resolve, reject) => {
    const whereQuery = date !==''? `where p.fecha::text like '%${date}%'` : ''
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
            throw error
          }
          console.log(results.rows)
          resolve(results.rows) //if works
        }
      )
    } catch (err) {
      reject(err) //doesn't work
    }
  })
