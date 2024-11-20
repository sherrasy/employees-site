import { getEmployeesList } from '@/store/employees-data/selectors';
import { Employee } from '@/types/employee.interface';
import { TFilters, TSorting } from '@/types/state.type';
import { REDUCER_NAME } from '@/utils/constant';
import { describe, expect, test } from 'vitest';
import { stateMock } from '../mocks';

type EmployeesMockState = {
  employees: Employee[];
  sorting: TSorting;
  filters: TFilters;
};

describe(`${REDUCER_NAME} selectors`, () => {
  const state: EmployeesMockState = stateMock;

  test('should return employees from state', () => {
    const { employees } = state;
    const result = getEmployeesList(state);
    expect(result).toEqual(employees);
  });
});
