import { Employee } from '@/types/employee.interface';
import { TSorting, State, TFilters } from '@/types/state.type';
import { sortEmployees } from '@/utils/helpers';
import { createSelector } from '@reduxjs/toolkit';

export const getEmployeesList = (state: State): Employee[] | null =>
  state.employees;
export const getEmployeeById = (id?: string) =>
  createSelector(
    getEmployeesList,
    (employees: Employee[] | null): Employee | null => {
      if (employees && id) {
        return employees.find((item) => item.id === +id) || null;
      }
      return null;
    }
  );
export const getSorting = (state: State): TSorting => state.sorting;
export const getFilters = (state: State): TFilters => state.filters;

export const getFilteredList = () =>
  createSelector(
    [getEmployeesList, getSorting, getFilters],
    (employees, sorting, { role, archived }): null | Employee[] => {
      if (!employees) {
        return null;
      }
      const filteredEmployees = employees.filter((employee) => {
        return (
          (role === null || employee.role === role) &&
          (archived === null || employee.isArchive === archived)
        );
      });

      return filteredEmployees
        .slice()
        .sort((a, b) => sortEmployees(a, b, sorting));
    }
  );
