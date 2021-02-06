import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BusinessEntity } from '../../base/business.entity';

@Entity()
export class {Name} extends BusinessEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
