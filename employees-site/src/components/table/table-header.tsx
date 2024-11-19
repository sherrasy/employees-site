import Filters from '../filters/filters';
import Sorting from '../sorting/sorting';

function TableHeader(): JSX.Element {

  return (
    <div className='employees-table__header-row'>
      <Sorting />
      <Filters />
    </div>
  );
}
export default TableHeader;
