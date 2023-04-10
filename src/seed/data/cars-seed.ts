import { v4 as uuid } from "uuid";
import { ICar } from "src/cars/interfaces/car.interface";

export const CARS_SEED: ICar[] = [
  {
   id: uuid(),
    brand: "Audi",
    model: "A4",
  },
  {
    id: uuid(),
    brand: "Jeep",
    model: "Wrangler"
  },
];
