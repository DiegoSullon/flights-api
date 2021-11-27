import httpStatus from 'http-status'
import { getFlights } from '../../../service/connection/pgManager.js'
import { getManyParameterUseCase } from '../repository/index.js'

class GetManyController {
  method = 'getManyParameters'
  constructor (useCaseImpl) {
    this.useCase = useCaseImpl
  }

  run = async (req, res, next) => {
    try {
      getFlights()
      // const parametersName = req.query['parameter_name']
      // const result = await this.useCase.getMany(parametersName, requestContext)
      res.status(httpStatus.OK).json({})
    } catch (error) {
      error.method = this.method
      next(error)
    }
  }
}

export default new GetManyController(getManyParameterUseCase)
