import { Employee } from '@/types/employee.interface';
import { SortDirection, TSorting } from '@/types/state.type';

export const getNewId = (): number =>
  Math.floor(Math.random() * (1000 - 18 + 1)) + 18;

export const sortByName = (
  a: Employee,
  b: Employee,
  sortOrder: SortDirection
) => {
  if (a.name < b.name) return sortOrder === 'desc' ? -1 : 1;
  if (a.name > b.name) return sortOrder === 'desc' ? 1 : -1;
  return 0;
};

export const sortByDate = (
  a: Employee,
  b: Employee,
  sortOrder: SortDirection
) => {
  const dateA = new Date(a.birthday.split('.').reverse().join('-'));
  const dateB = new Date(b.birthday.split('.').reverse().join('-'));
  if (dateA > dateB) return sortOrder === 'desc' ? -1 : 1;
  if (dateA < dateB) return sortOrder === 'desc' ? 1 : -1;
  return 0;
};

export const sortEmployees = (
  a: Employee,
  b: Employee,
  { sortBy, sortDirection }: TSorting
) => {
  switch (sortBy) {
    case 'name':
      return sortByName(a, b, sortDirection);
    case 'birthday':
      return sortByDate(a, b, sortDirection);
    default:
      return 0;
  }
};
