import ErrorMessage from '@/components/error-message/error-message';
import AddEmployeePage from '@/pages/add-employee-page/add-employee-page';
import EditEmployeePage from '@/pages/edit-employee-page/edit-employee-page';
import MainPage from '@/pages/main-page/main-page';
import { AppRoute } from '@/utils/constant';
import { render, screen } from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import { withMockHistory, withMockStore } from '../mockHistory';

describe('Application Routing', () => {
  let mockApp = (
    <Routes>
      <Route path={AppRoute.Main} element={<MainPage />} />
      <Route path={AppRoute.AddEmployee} element={<AddEmployeePage />} />
      <Route
        path={`${AppRoute.EditEmployee}/:id`}
        element={<EditEmployeePage />}
      />
      <Route path='*' element={<ErrorMessage />} />
    </Routes>
  );

  test('should render "Main" when user navigate to "/" ', () => {
    const DataTestId = {
      AddButton: 'add-employee-button',
      Filters: 'employee-filters',
    };
    const withHistoryComponent = withMockHistory(mockApp, AppRoute.Main);
    const withStore = withMockStore(withHistoryComponent);
    render(withStore);

    const addButtonElement = screen.getByTestId(DataTestId.AddButton);
    const filtersElement = screen.getByTestId(DataTestId.Filters);
    expect(addButtonElement).toBeInTheDocument();
    expect(filtersElement).toBeInTheDocument();
  });
  test('should render "AddEmployeePage" when user navigate to "/add-employee" ', () => {
    const DataTestId = {
        Form:'add-employee',
        Name:'name-field',
      };
    const withHistoryComponent = withMockHistory(mockApp, AppRoute.AddEmployee);
    const withStore = withMockStore(withHistoryComponent);
    render(withStore);

    const formElement = screen.getByTestId(DataTestId.Form);
    const nameElement = screen.getByTestId(DataTestId.Name);

    expect(formElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
  });

  test('should render "ErrorMessage" when user navigate to non-existent route', () => {
    const mockRoute = '/non-existent-route';
    const DataTestId = 'error-message';
    const textData = 'На главную';

    const withHistoryComponent = withMockHistory(mockApp, mockRoute);

    render(withHistoryComponent);

    const messageElement = screen.getByTestId(DataTestId);
    const textElement = screen.getByText(textData);

    expect(messageElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });
});
