import AddEmployeeForm from '@components/add-employee-form/add-employee-form';
import CloseButton from '@components/close-button/close-button';

function AddEmployeePage(): JSX.Element {
  return (
    <div className='add-employee-page'>
      <div className='add-employee-page__wrapper'>
        <main>
          <CloseButton />
          <div className='add-employee-page__title-wrapper'>
            <h1 className='add-employee-page__title'>Новый сотрудник</h1>
          </div>
          <AddEmployeeForm />
        </main>
      </div>
    </div>
  );
}
export default AddEmployeePage;
