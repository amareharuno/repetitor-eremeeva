import {DateString} from "./base";
import {ANCHOR} from "./navigation";

export interface PriceOption {
  title: string;
  description?: string;
  amount: number;
}

export interface Section {
  anchorId?: ANCHOR;
  title?: string;
  items?: string[];
}

export interface Project {
  id: string;
  title: string;
  sections?: Section[];
  startDate: DateString;
  endDate: DateString;
  offer: PriceOption[];
}
