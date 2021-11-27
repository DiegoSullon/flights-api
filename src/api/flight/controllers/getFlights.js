import httpStatus from 'http-status'
import {
  getAllFlightsAsync,
  getFlightsByPaymentDate
} from '../../../service/connection/pgManager.js'
import { getManyParameterUseCase } from '../repository/index.js'

class GetManyController {
  method = 'getManyParameters'
  constructor (useCaseImpl) {
    this.useCase = useCaseImpl
  }

  run = async (req, res, next) => {
    try {
      const { date } = req.query
      if (date) {
        console.log(`Getting Flights by date: ${date}`)
        getFlightsByPaymentDate(date)
          .then(data => {
            res.status(httpStatus.OK).json(JSON.parse(JSON.stringify(data)))
            console.log(data)
          })
          .catch(error => {
            console.error(`Error getting all flights`)
            console.error(error)
          })
      } else {
        getFlightsByPaymentDate()
          .then(data => {
            res.status(httpStatus.OK).json(JSON.parse(JSON.stringify(data)))
            console.log(data)
          })
          .catch(error => {
            console.error(`Error getting all flights`)
            console.error(error)
          })
      }
    } catch (error) {
      error.method = this.method
      next(error)
    }
  }
}

export default new GetManyController(getManyParameterUseCase)
