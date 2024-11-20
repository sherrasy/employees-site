import Table from '@/components/table/table';
import { store } from '@/store';
import { addNewEmployee } from '@/store/employees-data/employees-data';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mockUser } from '../mocks';
import { describe, expect, test } from 'vitest';

describe('Component: Table', () => {
  test('should render correctly without data', async () => {
    const storeCurrent = store;
    const textData =
      'Пока нет записей о сотрудниках, но вы можете их добавить.';
    render(
      <Provider store={storeCurrent}>
        <MemoryRouter>
          <Table />
        </MemoryRouter>
      </Provider>
    );
    const textElement = screen.getByText(textData);
    expect(textElement).toBeInTheDocument();
  });
  test('should render correctly with data', async () => {
    const storeCurrent = store;
    storeCurrent.dispatch(addNewEmployee(mockUser))
    const DataTestId = 'table-row-content';
    render(
      <Provider store={storeCurrent}>
        <MemoryRouter>
          <Table />
        </MemoryRouter>
      </Provider>
    );
    const rowElement = screen.getByTestId(DataTestId);

    expect(rowElement).toBeInTheDocument();
    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
  });
});
