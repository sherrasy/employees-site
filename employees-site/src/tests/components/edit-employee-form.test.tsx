import EditEmployeeForm from '@/components/edit-employee-form/edit-employee-form';
import { store } from '@/store';
import { FormFieldName } from '@/utils/constant';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import { mockUser } from '../mocks';

describe('Component: EditEmployeeForm', () => {
    test('should render correctly', async () => {
    const DataTestId = {
      Form:'edit-employee',
      Phone:'phone-field',
    };
    render(
      <Provider store={store}>
        <MemoryRouter >
          <EditEmployeeForm employee={mockUser} />
        </MemoryRouter>
      </Provider>
    );

    const formElement = screen.getByTestId(DataTestId.Form);
    const phoneElement = screen.getByTestId(DataTestId.Phone);

    expect(formElement).toBeInTheDocument();
    expect(phoneElement).toBeInTheDocument();
    expect(phoneElement).toHaveAttribute('name', FormFieldName.Phone);

  });
});
