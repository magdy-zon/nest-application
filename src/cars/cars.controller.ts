import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

  private cars: string[] = ['Ford', 'Chevy', 'Toyota'];
  @Get()
  getCars() {
    return this.cars;
  }

  @Get(':id')
  getOneCar(@Param('id') id: number) {
    console.log({id: +id});
    return this.cars[id];
  }
}
