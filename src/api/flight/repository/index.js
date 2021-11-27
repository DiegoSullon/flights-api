import { GetManyParameterUseCase } from './getManyUseCase.js'
import { PostOneFlightUseCase } from './postOneUseCase.js'

const getManyParameterUseCase = new GetManyParameterUseCase(null)
const postOneFlightUseCase = new PostOneFlightUseCase(null)

export { getManyParameterUseCase, postOneFlightUseCase }
