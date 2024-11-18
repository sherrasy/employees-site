import { getFilteredList } from '@/store/employees-data/selectors';
import { useAppSelector } from '@/utils/hooks';
import TableRow from './table-row';
import TableHeader from './table-header';


function Table(): JSX.Element {
  const employees = useAppSelector(getFilteredList());

  return (
      <div className='main-page__table employees-table'>
        <div className='employees-table__wrapper'>
          <TableHeader/>
          <div className='employees-table__content'>
        {employees?.map((employee) => <TableRow employee={employee} key={employee.id}/>)}
        </div>
        </div>
      </div>
  );
}
export default Table;
