import Table from '@/components/table/table';
import AddButton from '@components/add-button/add-button';

function MainPage(): JSX.Element {

  return (
    <div className='main-page'>
      <div className='main-page__wrapper'>
      <main>
        <div className='main-page__title-wrapper'>
          <h1 className='main-page__title'>Сотрудники</h1>
          <AddButton/>
        </div>
        <Table/>
        </main>
      </div>
    </div>
  );
}
export default MainPage;
