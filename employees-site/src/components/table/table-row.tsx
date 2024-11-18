import { Employee } from '@/types/employee.interface';
import { AppRoute, RoleToName } from '@utils/constant';
import { useNavigate } from 'react-router-dom';

type TableRowProps = {
    employee: Employee;
};

function TableRow({ employee }: TableRowProps): JSX.Element {
    const { id, name, phone,birthday,role, isArchive } = employee;
    const navigate = useNavigate();
    const handleRedirect = () => {
      navigate(`${AppRoute.EditEmployee}/${id}`);
    };
    return (
        <div className={`employees-table__row ${isArchive ? 'row-archived':''}`} onClick={handleRedirect}>
            <p className='employees-table__row-cell'>{name}</p>
            <p className='employees-table__row-cell'>{phone}</p>
            <p className='employees-table__row-cell'>{birthday}</p>
            <p className='employees-table__row-cell'>{RoleToName[role as keyof typeof RoleToName]}</p>
        </div>
    );
}
export default TableRow;
