
export class PostOneFlightUseCase{
  storage;
  constructor(storageImpl) {
    this.storage = storageImpl;
  }

  async postOne(fligth, context){
    
    const resultStorage= await this.storage.getManyParameters(parametersName, context.country);
    if (!resultStorage) {
      throw Error('Error retrieving Product from Postgre Storage');
    }

    return resultStorage;
  }
}
