import { Injectable, NotFoundException } from '@nestjs/common';
import { ICar } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'; 
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  private cars: ICar[] = [{
    id: uuid(),
    brand: 'Jeep',
    model: 'Cherokee'
  }];

  public getCars(): ICar[] {
    return this.cars;
  } 

  public getOneCar(id: string) {
    const car = this.cars.find(car => car.id === id);
    if (!car) {
      throw new NotFoundException('Car not found');
    }
    return car;
  }

  createCar(car: CreateCarDto) {
    const newCar: ICar = {
      id: uuid(),
      ...car,
    };
    this.cars.push(newCar);
    return newCar;
  }

  public updateCar(id: string, car: UpdateCarDto) {
    const carFound = this.getOneCar(id);
    const index = this.cars.findIndex(car => car.id === id);
    this.cars[index] = {
      ...carFound,
      ...car,
      id
    };
    return this.cars[index];
     
  }

  public deleteCar(id: string) {
    const carFound = this.getOneCar(id);
    
    this.cars = this.cars.filter(car => car.id !== id);
  }
}
