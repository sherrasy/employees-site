import { LabelName } from '@/utils/constant';
import sprite from '/sprite.svg';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { SortBy } from '@/types/state.type';
import { setCurrentSorting } from '@/store/employees-data/employees-data';
import { getSorting } from '@/store/employees-data/selectors';

function Sorting(): JSX.Element {
  const dispatch = useAppDispatch();
  const { sortBy, sortDirection } = useAppSelector(getSorting);
  const arrowClassName =
    sortDirection === 'asc' ? 'sort-arrow--reverse' : 'sort-arrow';

  const handleSortingChange = (name: SortBy) => {
    if (name !== sortBy) {
      dispatch(setCurrentSorting({ sortBy: name, sortDirection: 'desc' }));
      return;
    }
    switch (sortDirection) {
      case 'asc':
        dispatch(setCurrentSorting({ sortBy, sortDirection: 'desc' }));
        break;
      case 'desc':
        dispatch(setCurrentSorting({ sortBy, sortDirection: 'asc' }));
        break;
    }
  };

  return (
    <>
      <p
        className='employees-table__header-row-cell sorting-toggle'
        onClick={() => handleSortingChange('name')}
      >
        <span>{LabelName.Name}</span>
        <svg
          className={`employees-table__sort-icon ${
            sortBy !== 'name' ? 'sort-arrow--none' : arrowClassName
          }`}
        >
          <use xlinkHref={`${sprite}#arrow`}></use>
        </svg>
      </p>
      <p
        className='employees-table__header-row-cell sorting-toggle'
        onClick={() => handleSortingChange('birthday')}
      >
        <span>{LabelName.Birthday}</span>
        <svg
          className={`employees-table__sort-icon ${
            sortBy !== 'birthday' ? 'sort-arrow--none' : arrowClassName
          }`}
        >
          <use xlinkHref={`${sprite}#arrow`}></use>
        </svg>
      </p>
    </>
  );
}
export default Sorting;
