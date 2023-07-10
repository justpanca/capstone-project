import './App.css';
import JobVacancyPage from './page/jobVacancy';
import RegisterPage from './page/register';
import LoginPage from './page/login';
import ListCoursePage from './page/listCourse';
import DetailCoursePage from './page/detailCourse';
import MyCoursePage from './page/myCourse';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux"

function App() {
  const getAccess = useSelector((state) => state.accessLogin)
  return (
    <div>
      <Switch>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/courses/:id">
          <DetailCoursePage />
        </Route>
        <Route path="/mycourse">
          {getAccess ? <MyCoursePage /> : <Redirect to='/' />}
        </Route>
        <Route path="/job">
          <JobVacancyPage />
        </Route>
        <Route path="/">
          <ListCoursePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;