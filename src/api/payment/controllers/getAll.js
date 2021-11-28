import httpStatus from 'http-status'
import { getAll, getPaymentA } from '../../../service/connection/pgManager.js'

class GetAllController {
  method = 'getManyParameters'
  run = async (req, res, next) => {
    try {
      getPaymentA().then(data => {
        res.status(httpStatus.OK).json(data)
      }).catch(error=>{
        console.error(`Error getting payments: ${error}`)
        res.status(httpStatus.BAD_REQUEST).json({error: 'Error getting payments'})
      })
    } catch (error) {
      error.method = this.method
      next(error)
    }
  }
}

export default new GetAllController()
