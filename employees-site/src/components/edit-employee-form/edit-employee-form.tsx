import { updateEmployee } from '@/store/employees-data/employees-data';
import { EmployeeForm } from '@/types/employee-form.interface';
import { Employee } from '@/types/employee.interface';
import {
  AppRoute,
  FormFieldName,
  LabelName,
  RoleToName,
  ValidationPattern,
} from '@/utils/constant';
import { useAppDispatch } from '@/utils/hooks';
import { useEffect, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useHookFormMask } from 'use-mask-input';

type EditEmployeeFormProps = {
  employee: Employee;
};

function EditEmployeeForm({ employee }: EditEmployeeFormProps): JSX.Element {
  const { id } = employee;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm<EmployeeForm>({
    mode: 'onBlur',
    reValidateMode: 'onSubmit',
    defaultValues: employee,
  });
  const registerWithMask = useHookFormMask(register);

  const handleRedirect = () => {
    navigate(AppRoute.Main);
  };
  const dispatch = useAppDispatch();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEmployeeSubmit: SubmitHandler<EmployeeForm> = (data) => {
    dispatch(updateEmployee({ ...data, id }));
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
      <div className='form__fields' data-testid="edit-employee">
        <label className='form__field'>
          <span>{LabelName.Name} </span>
          <input
            placeholder='Имя Фамилия'
            type='text'
            autoComplete='off'
            {...register(FormFieldName.Name, {
              required: 'Заполните поле',
            })}
          />
        </label>
        {errors.name && <p className='form__error'> {errors.name.message}</p>}
        <label className='form__field'>
          <span>{LabelName.Phone}</span>
          <input
            placeholder='+7 (999) 999-9999'
            type='text'
            autoComplete='off'
            {...registerWithMask(FormFieldName.Phone, '+7 (999) 999-9999', {
              pattern: {
                value: ValidationPattern.Phone,
                message: 'Неверный формат номера',
              },
              required: 'Заполните поле',
            })}
            data-testid="phone-field"
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
          <select {...register(FormFieldName.Role)}>
            {Object.entries(RoleToName).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label className='form__field'>
          <span>{LabelName.Archived}</span>
          <input
            type='checkbox'
            {...register('isArchive')}
          />
        </label>
        <button type='submit' className='form__submit'>
          Сохранить
        </button>
      </div>
    </form>
  );
}
export default EditEmployeeForm;
