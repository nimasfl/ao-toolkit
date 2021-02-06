# AO Toolkit

This cli tool is developed to ease the develop workflow of various applications in our company.

## Install
`$ npm install @nimasfl/ao-toolkit -g`

## API


### Generate module
use this command to generate nestjs module template 
```
ao-toolkit generate module <ModuleName>
```

##### Example
```
ao-toolkit generate module app/BaseSample/Cat
```
Output files will be:
```
./src/app/base-sample/cat-module/dto/responses/base.customer.cat.response.dto.ts:
./src/app/base-sample/cat-module/cat.module.ts:
./src/app/base-sample/cat-module/controllers/cat.controller.ts:
./src/app/base-sample/cat-module/entities/cat.entity.ts:
./src/app/base-sample/cat-module/dto/requests/.gitkeep:
./src/app/base-sample/cat-module/repositories/cat.repository.ts:
./src/app/base-sample/cat-module/services/cat.service.ts:```
