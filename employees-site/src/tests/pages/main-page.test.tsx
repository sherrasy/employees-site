import MainPage from '@/pages/main-page/main-page';
import { store } from '@/store';
import { AppRoute } from '@/utils/constant';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import { render,screen } from '@testing-library/react';

describe('Component: MainPage', () => {
  test('should render correctly', () => {
    const DataTestId = {
      AddButton: 'add-employee-button',
      Filters: 'employee-filters',
    };
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[AppRoute.Main]}>
          <Routes>
            <Route path={AppRoute.Main} element={<MainPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const addButtonElement = screen.getByTestId(DataTestId.AddButton);
    const filtersElement = screen.getByTestId(DataTestId.Filters);


    expect(addButtonElement).toBeInTheDocument();
    expect(filtersElement).toBeInTheDocument();

  });
});
