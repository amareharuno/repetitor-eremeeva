import {DateString} from "./base";

interface PriceOption {
  name: string;
  description: string;
  amount: number;
}

export interface Project {
  name: string;
  format: "online" | "offline";
  startDate: DateString;
  endDate: DateString;
  program: string[];
  suitableFor: string[];
  results: string[];
  resources: string[];
  priceOptions: PriceOption[];
}
