import httpStatus from 'http-status'
import { getAll } from '../../../service/connection/pgManager.js'

class GetAllController {
  method = 'getManyParameters'
  run = async (req, res, next) => {
    try {
      getAll('tarifa').then(data => {
        res.status(httpStatus.OK).json(data)
      }).catch(error=>{
        console.error(`Error getting tariffs: ${error}`)
        res.status(httpStatus.BAD_REQUEST).json({error: 'Error getting tariffs'})
      })
    } catch (error) {
      error.method = this.method
      next(error)
    }
  }
}

export default new GetAllController()
