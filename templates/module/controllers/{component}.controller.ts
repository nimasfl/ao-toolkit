import { BusinessController } from '../../common/decorator/business-controller.decorator';
import { {Name}Service } from '../services/{name}.service';

@BusinessController('/{name}s', '{Name}')
export class {Name}Controller {
  constructor(private service: {Name}Service) {}
}
