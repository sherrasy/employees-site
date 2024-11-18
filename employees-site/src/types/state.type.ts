import { store } from "@/store";
import { Employee } from "./employee.interface";
import { EmployeeRole } from "@/utils/constant";

export type SortDirection = 'asc'| 'desc';
export type SortBy = 'name'|'birthday';

export type TSorting = {
  sortBy: null| SortBy,
  sortDirection:SortDirection,
}
export type TFilters = {
  role: null| EmployeeRole,
  archived:null| boolean
}
export type EmployeesState = {
  employees:Employee[] | null;
  sorting:TSorting,
  filters:TFilters
};

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;
