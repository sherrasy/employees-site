import {
  addNewEmployee,
  employeesData,
  setCurrentFilters,
  setCurrentSorting,
  updateEmployee,
} from '@/store/employees-data/employees-data';
import { EmployeesState } from '@/types/state.type';
import { EmployeeRole, REDUCER_NAME } from '@/utils/constant';
import { beforeAll, beforeEach, describe, expect, test } from 'vitest';
import { EmployeesMockState, mockUser, stateEmpty, stateMock } from '../mocks';

describe(`${REDUCER_NAME}`, () => {
  let state: EmployeesState;
  beforeEach(() => {
    state = stateEmpty;
  });
  test('without additional parameters should return initial state', () => {
    expect(
      employeesData.reducer(undefined, { type: 'UNKNOWN_ACTION' })
    ).toEqual(state);
  });

  test('should set sorting with setCurrentSorting action', () => {
    const result = employeesData.reducer(
      state,
      setCurrentSorting({
        sortBy: 'name',
        sortDirection: 'desc',
      })
    );
    expect(result).toEqual({
      ...state,
      sorting: {
        sortBy: 'name',
        sortDirection: 'desc',
      },
    });
  });

  test('should set filters with setCurrentFilters action', () => {
    const result = employeesData.reducer(
      state,
      setCurrentFilters({
        role: EmployeeRole.driver,
        archived: false,
      })
    );
    expect(result).toEqual({
      ...state,
      filters: {
        role: EmployeeRole.driver,
        archived: false,
      },
    });
  });

  describe(`Editing data`, () => {
    let state: EmployeesMockState;
    beforeAll(() => {
      state = stateMock;
    });
    test('should update employeesList with addNewEmployee action', () => {
      const { employees } = state;
      const result = employeesData.reducer(state, addNewEmployee(mockUser));
      expect(result).toEqual({
        ...state,
        employees: [mockUser, ...employees],
      });
    });
    test('should update employee with updateEmployee action', () => {
      const result = employeesData.reducer(state, updateEmployee({...mockUser, id:1 }));
      expect(result).toEqual({
        ...state,
        employees: [{...mockUser, id:1}],
      });
    });
  });
});
