import AddEmployeePage from '@/pages/add-employee-page/add-employee-page';
import EditEmployeePage from '@/pages/edit-employee-page/edit-employee-page';
import MainPage from '@/pages/main-page/main-page';
import { AppRoute } from '@/utils/constant';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ErrorMessage from '../error-message/error-message';

function App() {

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
