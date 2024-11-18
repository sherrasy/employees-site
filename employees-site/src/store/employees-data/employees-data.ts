import { Employee } from '@/types/employee.interface';
import { EmployeesState, TFilters, TSorting } from '@/types/state.type';
import { REDUCER_NAME } from '@/utils/constant';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import data from "@utils/employees.json";

const initialState: EmployeesState = {
  employees: null,
  sorting:{
    sortBy: null,
    sortDirection:'desc'
  },
  filters:{
    role: null,
    archived:null
  }
};

export const employeesData = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    addNewEmployee: (state, { payload }: PayloadAction<Employee>) => {
      state.employees = state.employees
        ? [payload, ...state.employees]
        : [payload];
    },

    updateEmployee: (state, { payload }: PayloadAction<Employee>) => {
      if (!state.employees) {
        return;
      }
      const employeeId = state.employees.findIndex(
        (item) => item.id === payload.id
      );
      if (employeeId !== -1) {
        state.employees[employeeId] = { ...payload };
      }
    },

    fetchEmployeeList: (state) => {
      state.employees = data;
    },

    setCurrentSorting: (state, action: PayloadAction<TSorting>) => {
      state.sorting = action.payload;
    },
    setCurrentFilters: (state, action: PayloadAction<TFilters>) => {
      state.filters = action.payload;
    },
  },
});

export const { addNewEmployee, updateEmployee, fetchEmployeeList, setCurrentSorting, setCurrentFilters } = employeesData.actions;
