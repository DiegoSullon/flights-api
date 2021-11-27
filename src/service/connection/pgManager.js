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
export const getFlights = () => {
  client.query('SELECT 123 AS value', (error, results) => {
    if (error) {
      throw error
    }
    console.log(results.rows)
  })
}
