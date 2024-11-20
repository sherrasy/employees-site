import { addNewEmployee } from "@/store/employees-data/employees-data";
import { EmployeeForm } from "@/types/employee-form.interface";
import { AppRoute, FormFieldName, LabelName, RoleToName, ValidationPattern } from "@/utils/constant";
import { getNewId } from "@/utils/helpers";
import { useAppDispatch } from "@/utils/hooks";
import { useEffect, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useHookFormMask } from "use-mask-input";

function AddEmployeeForm(): JSX.Element {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        clearErrors,
        reset
      } = useForm<EmployeeForm>({ mode: 'onBlur', reValidateMode: 'onSubmit' });
    const handleRedirect = () => {
      navigate(AppRoute.Main);
    };
    const registerWithMask = useHookFormMask(register);
    const dispatch = useAppDispatch();
    const timerRef = useRef<ReturnType<typeof setTimeout>  | null>(null);

    const handleEmployeeSubmit: SubmitHandler<EmployeeForm> = (data) => {
      const id = getNewId();
      dispatch(addNewEmployee({ ...data, id, isArchive:false }));
      reset();
      handleRedirect();
    };

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
          timerRef.current = setTimeout(() => {
            clearErrors('root');
          }, 4000);
      }
        return () => {
          if (timerRef.current) {
            clearTimeout(timerRef.current);
          }
        };
      }, [errors]);
  
    return (
<form onSubmit={handleSubmit(handleEmployeeSubmit)}>
      <div className='form__fields'  data-testid="add-employee"
      >
        <label className='form__field'>
          <span>{LabelName.Name} </span>
          <input
          placeholder="Имя Фамилия"
            type='text'
            autoComplete='off'
            {...register(FormFieldName.Name, {
              required: 'Заполните поле',
            })}
            data-testid="name-field"
          />
        </label>
        {errors.name && (
          <p className='form__error'> {errors.name.message}</p>
        )}
       <label className='form__field'>
          <span>{LabelName.Phone}</span>
          <input
            placeholder='+7 (000) 000-0000'
            type='text'
            autoComplete='off'
            {...registerWithMask(FormFieldName.Phone, '+7 (999) 999-9999', {
              pattern: {
                value: ValidationPattern.Phone,
                message: 'Неверный формат номера',
              },
              required: 'Заполните поле',
            })}
          />
        </label>
        {errors.phone && <p className='form__error'> {errors.phone.message}</p>}
        <label className='form__field'>
          <span>{LabelName.Birthday} </span>
          <input
            placeholder='00.00.0000'
            type='text'
            autoComplete='off'
            {...registerWithMask(FormFieldName.Birthday,'99.99.9999', {
              pattern: {
                value: ValidationPattern.Birthday,
                message: 'Неверный формат даты',
              },
              required: 'Заполните поле',
            })}
          />
        </label>
        {errors.birthday && (
          <p className='form__error'> {errors.birthday.message}</p>
        )}
        <label className='form__field'>
          <span>{LabelName.Role} </span>
          <select
            {...register(FormFieldName.Role)}
          >{
            Object.entries(RoleToName).map(([key, value])=>
              <option key={key} value={key}>{value}</option>
            )
          }
            </select>
        </label>
        <button type='submit' className='form__submit'>
          Добавить
        </button>
      </div>
    </form>
    );
  }
  export default AddEmployeeForm;
  