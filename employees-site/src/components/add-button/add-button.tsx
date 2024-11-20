import { AppRoute } from '@utils/constant';
import { useNavigate } from 'react-router-dom';
import sprite from '/sprite.svg';


function AddButton(): JSX.Element {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(AppRoute.AddEmployee);
  };
  return (
    <button
      className='main-page__add-button add-button'
      type='button'
      onClick={handleRedirect}
      data-testid="add-employee-button"
    >
      <span className='add-button__text'>Добавить</span>
      <svg className='add-button__icon'>
        <use xlinkHref={`${sprite}#plus`}></use>
      </svg>
    </button>
  );
}
export default AddButton;
