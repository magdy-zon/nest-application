import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { ICar } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(
    private readonly carsService: CarsService,
  ) {}

  @Get()
  getCars(): ICar[] {
    return this.carsService.getCars();
  }

  @Get(':id')
  getOneCar(@Param('id', ParseUUIDPipe) id: string) {
    
    return this.carsService.getOneCar(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.createCar(createCarDto);
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string, 
    @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.updateCar(id, updateCarDto);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.deleteCar(id);
  }
}
