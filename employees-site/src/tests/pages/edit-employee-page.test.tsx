import { store } from '@/store';
import { AppRoute, FormFieldName } from '@/utils/constant';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import { render,screen } from '@testing-library/react';
import EditEmployeePage from '@/pages/edit-employee-page/edit-employee-page';
import { addNewEmployee } from '@/store/employees-data/employees-data';
import { mockUser } from '../mocks';

describe('Component: EditEmployeePage', () => {
  test('should render correctly', () => {
    store.dispatch(addNewEmployee(mockUser))

    const DataTestId = {
      Form:'edit-employee',
      Phone:'phone-field',
    };
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`${AppRoute.EditEmployee}/2`]}>
          <Routes>
          <Route path={`${AppRoute.EditEmployee}/:id`} element={<EditEmployeePage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const formElement = screen.getByTestId(DataTestId.Form);
    const phoneElement = screen.getByTestId(DataTestId.Phone);

    expect(formElement).toBeInTheDocument();
    expect(phoneElement).toBeInTheDocument();
    expect(phoneElement).toHaveAttribute('name', FormFieldName.Phone);

  });
  test('should render error id id is invalid', () => {
    const DataTestId ='error-message';
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`${AppRoute.EditEmployee}/id-4`]}>
          <Routes>
          <Route path={`${AppRoute.EditEmployee}/:id`} element={<EditEmployeePage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const messageElement = screen.getByTestId(DataTestId);
    expect(messageElement).toBeInTheDocument();

  });
});
