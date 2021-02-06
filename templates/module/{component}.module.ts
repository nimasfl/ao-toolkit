import { Module } from '@nestjs/common';
import { {Name}Service } from './services/{name}.service';
import { {Name}Controller } from './controllers/{name}.controller';
import { {Name}Repository } from './repositories/{name}.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([{Name}Repository])],
  controllers: [{Name}Controller],
  providers: [{Name}Service],
  exports: [{Name}Service],
})
export class {Name}Module {}
