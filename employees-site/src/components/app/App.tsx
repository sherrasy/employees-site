import AddEmployeePage from '@/pages/add-employee-page/add-employee-page';
import EditEmployeePage from '@/pages/edit-employee-page/edit-employee-page';
import MainPage from '@/pages/main-page/main-page';
import { fetchEmployeeList } from '@/store/employees-data/employees-data';
import { AppRoute } from '@/utils/constant';
import { useAppDispatch } from '@/utils/hooks';
import { useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ErrorMessage from '../error-message/error-message';

function App() {
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(fetchEmployeeList())
  },[])
  return (
    <HashRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route path={AppRoute.AddEmployee} element={<AddEmployeePage />} />
        <Route path={`${AppRoute.EditEmployee}/:id`} element={<EditEmployeePage />} />
        <Route path='*' element={<ErrorMessage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
