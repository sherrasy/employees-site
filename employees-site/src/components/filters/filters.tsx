import { setCurrentFilters } from "@/store/employees-data/employees-data";
import { TFilters } from "@/types/state.type";
import { FormFieldName, LabelName, RoleToName } from "@/utils/constant";
import { useAppDispatch } from "@/utils/hooks";
import { SubmitHandler, useForm } from "react-hook-form";

function Filters(): JSX.Element {
    const {
        register,
        handleSubmit,
      } = useForm<TFilters>();

      const dispatch = useAppDispatch();
    
      const handleFiltersSubmit: SubmitHandler<TFilters> = (data) => {
        dispatch(setCurrentFilters(data));
      };

      const handleFiltersRest = () => {
        dispatch(setCurrentFilters({role:null, archived:null}));
      };
    
      return (
        <form onSubmit={handleSubmit(handleFiltersSubmit)}>
          <div className='employees-table__header-row-cell filters-form__fields'>
            <label className='filters-form__field'>
              <span>{LabelName.Role} </span>
              <select {...register(FormFieldName.Role)}>
                {Object.entries(RoleToName).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
            <label className='filters-form__field'>
              <span>{LabelName.Archived}</span>
              <input
                type='checkbox'
                {...register('archived')}
              />
            </label>
            <button type='submit' className='filters-form__submit'>
              Фильтровать
            </button>
            <button type='button' className='filters-form__reset' onClick={handleFiltersRest}>
              Сбросить
            </button>
          </div>
        </form>
    );
  }
  export default Filters;