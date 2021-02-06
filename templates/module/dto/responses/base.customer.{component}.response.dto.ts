import { {Name} } from '../../entities/{name}.entity';

export default class BaseCustomer{Name}ResponseDto {
  constructor(data: {Name}) {
    this.id = data.id;
  }
  id: number;
}
