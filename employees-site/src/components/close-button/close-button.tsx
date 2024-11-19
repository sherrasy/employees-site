import { AppRoute } from '@utils/constant';
import { useNavigate } from 'react-router-dom';
import sprite from '/sprite.svg';

function CloseButton(): JSX.Element {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(AppRoute.Main);
  };
  return (
    <button className='close-button' type='button' onClick={handleRedirect}>
      <svg className='close-button__icon'>
        <use xlinkHref={`${sprite}#close`}></use>
      </svg>
    </button>
  );
}
export default CloseButton;
