export const AppRoute = {
  Main: '/',
  AddEmployee: '/add-employee',
  EditEmployee: '/edit-employee',
} as const;

export const REDUCER_NAME = 'EMPLOYEES';

export enum EmployeeRole {
  driver= 'driver',
  waiter= 'waiter',
  cook= 'cook',
};

export const RoleToName = {
  driver: 'Водитель',
  waiter: 'Официант',
  cook: 'Повар',
};

export const LabelName = {
  Name: 'Имя',
  Phone: 'Телефон',
  Role: "Должность",
  Birthday: "Дата рождения",
  Archived: "В архиве"
} as const;

export const FormFieldName = {
  Name: 'name',
  Phone: 'phone',
  Role: 'role',
  Birthday: "birthday"
} as const;

export const ValidationPattern = {
  Phone: /^\+7 \(\d{3}\) \d{3}-\d{4}$/,
  Birthday: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.\d{4}$/,
} as const;
