import httpStatus from 'http-status'
import { getPassengerByFlights } from '../../../service/connection/pgManager.js'

class GetAllController {
  method = 'getManyParameters'
  run = async (req, res, next) => {
    try {
      const {rows, amaterno, apaterno, nombre, fechaNacimiento} = req.query || ''
      getPassengerByFlights(rows || 3, apaterno, amaterno, nombre, fechaNacimiento).then(data => {
        res.status(httpStatus.OK).json(data)
      }).catch(error=>{
        console.error(`Error getting bookings: ${error}`)
        res.status(httpStatus.BAD_REQUEST).json({error: 'Error getting bookings'})
      })
    } catch (error) {
      error.method = this.method
      next(error)
    }
  }
}

export default new GetAllController()
