import { Employee } from '@/types/employee.interface';
import { EmployeesState, TFilters, TSorting } from '@/types/state.type';

export type EmployeesMockState = {
  employees: Employee[];
  sorting: TSorting;
  filters: TFilters;
};

export const stateEmpty: EmployeesState = {
  employees: null,
  sorting: {
    sortBy: null,
    sortDirection: 'desc',
  },
  filters: {
    role: null,
    archived: null,
  },
};

export const stateMock: EmployeesMockState = {
  employees: [
    {
      id: 1,
      name: 'Имя',
      isArchive: false,
      role: 'waiter',
      phone: '+7 (000) 000-0000',
      birthday: '01.01.1901',
    },
  ],
  sorting: {
    sortBy: null,
    sortDirection: 'desc',
  },
  filters: {
    role: null,
    archived: null,
  },
};

export const mockUser =  {
    id: 2,
    name: 'Фамилия',
    isArchive: false,
    role: 'waiter',
    phone: '+7 (000) 000-0000',
    birthday: '01.01.1901',
  }

