import Login from "../Pages/Login";
import AddEmployee from "../Pages/AddEmployee";
import Welcome from "../Pages/Welcome";
import { Switch, Route } from 'react-router-dom';

const Routing = () => {
  return (
    <div className="container">
      <Switch>
        <Route 
            path="/" 
            exact 
            component={Login}></Route>
        <Route 
            path="/welcome" 
            exact 
            component={Welcome}></Route>
        <Route 
            path="/add-employee" 
            exact 
            component={AddEmployee}></Route>    
        {/* <Route 
            path="/employees" 
            component={List}></Route>
        <Route
            path="/add-employee/:id"
            component={CreateEmployeeComponent}
        ></Route>
        <Route
            path="/view-employee/:id"
            component={Logout}
        ></Route> */}
      </Switch>
    </div>
  );
};

export default Routing;
