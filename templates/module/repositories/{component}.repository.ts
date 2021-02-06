import { EntityRepository } from 'typeorm';
import { {Name} } from '../entities/{name}.entity';
import { BusinessRepository as BR } from '../../base/business.repository';

@EntityRepository({Name})
export class {Name}Repository extends BR<{Name}> {}
