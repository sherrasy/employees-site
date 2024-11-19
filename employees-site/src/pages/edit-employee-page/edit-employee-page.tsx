import CloseButton from "@/components/close-button/close-button";
import EditEmployeeForm from "@/components/edit-employee-form/edit-employee-form";
import ErrorMessage from "@/components/error-message/error-message";
import { getEmployeeById } from "@/store/employees-data/selectors";
import { useAppSelector } from "@/utils/hooks";
import { useParams } from "react-router-dom";

function EditEmployeePage(): JSX.Element {
    const {id} = useParams();
    const employee = useAppSelector(getEmployeeById(id))
    if(!employee){
      return <ErrorMessage/>;
    }
    return (
      <div className='edit-employee-page'>
        <div className='edit-employee-page__wrapper'>
        <main>
        <CloseButton/>
          <div className='edit-employee-page__title-wrapper'>
            <h1 className='edit-employee-page__title'>Редактировать сотрудника</h1>
          </div>
          <EditEmployeeForm employee = {employee}/>
          </main>
        </div>
      </div>
    );
  }
  export default EditEmployeePage;