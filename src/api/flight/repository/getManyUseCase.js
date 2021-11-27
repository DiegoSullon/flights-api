
export class GetManyParameterUseCase{
  storage;
  constructor(storageImpl) {
    this.storage = storageImpl;
  }

  async getMany(parametersName, context){
    
    const resultStorage= await this.storage.getManyParameters(parametersName, context.country);
    if (!resultStorage) {
      throw Error('Error retrieving Product from Postgre Storage');
    }

    return resultStorage;
  }
}
