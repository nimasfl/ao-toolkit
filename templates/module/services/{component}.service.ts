import { Injectable } from '@nestjs/common';
import { {Name} } from '../entities/{name}.entity';
import { BusinessService } from '../../base/business.service';
import { {Name}Repository } from '../repositories/{name}.repository';

@Injectable()
export class {Name}Service extends BusinessService<{Name}>{
  constructor(private {name}Repository: {Name}Repository) {
    super({name}Repository);
  }
}
