import httpStatus from 'http-status'
import { getAll } from '../../../service/connection/pgManager.js'

class GetAllController {
  method = 'getManyParameters'
  run = async (req, res, next) => {
    try {
      getAll('aeropuerto').then(data => {
        res.status(httpStatus.OK).json(data)
      }).catch(error=>{
        console.error(`Error getting airports: ${error}`)
        res.status(httpStatus.BAD_REQUEST).json({error: 'Error getting airports'})
      })
    } catch (error) {
      error.method = this.method
      next(error)
    }
  }
}

export default new GetAllController()
