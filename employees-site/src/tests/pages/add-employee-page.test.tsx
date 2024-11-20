import { store } from '@/store';
import { AppRoute } from '@/utils/constant';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import { render,screen } from '@testing-library/react';
import AddEmployeePage from '@/pages/add-employee-page/add-employee-page';
import userEvent from '@testing-library/user-event';

describe('Component: AddEmployeePage', () => {
  test('should render correctly', async() => {
    const DataTestId = {
      Form:'add-employee',
      Name:'name-field',
    };
    const mockText = 'Имя';
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[AppRoute.AddEmployee]}>
          <Routes>
          <Route path={AppRoute.AddEmployee} element={<AddEmployeePage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const formElement = screen.getByTestId(DataTestId.Form);
    const nameElement = screen.getByTestId(DataTestId.Name);
    await userEvent.type(nameElement, mockText);

    expect(formElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(screen.getByDisplayValue(mockText)).toBeInTheDocument();

  });
});
