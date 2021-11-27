import httpStatus from 'http-status'
import {
  getFlightsByPaymentDate,
  postFlight
} from '../../../service/connection/pgManager.js'
import { postOneFlightUseCase } from '../repository/index.js'

class PostOneController {
  method = 'postOneParameters'
  constructor (useCaseImpl) {
    this.useCase = useCaseImpl
  }

  run = async (req, res, next) => {
    try {
      const {
        idasiento,
        idareopuerto,
        idreserva,
        idavion,
        idtarifa
      } = req.query
      postFlight({
        idasiento,
        idareopuerto,
        idreserva,
        idavion,
        idtarifa
      }).then(data => {
        console.log(data)
        res.status(httpStatus.CREATED).json({})
      }).catch(error => {
        console.error(`Error posting flight: ${error}`)
        res.status(httpStatus.BAD_REQUEST).json({error: 'Error posting flight'})
      })
    } catch (error) {
      error.method = this.method
      next(error)
    }
  }
}

export default new PostOneController(postOneFlightUseCase)
