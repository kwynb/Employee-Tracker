import styles from './AddEmployee.module.css';
import {ImUserTie} from 'react-icons/im';


const AddEmployee = () => {

    var dateToday = new Date();
    var dateNow = dateToday.getDate()+'-'+ dateToday.getMonth()+'-'+ dateToday.getFullYear();
    return (
    <div className={styles.board}>
      <div className="d-block">
      <ImUserTie size='2rem' className="d-inline"/>
      <h1 className={styles.text + " ms-2 d-inline align-middle text-uppercase"}>Add Employee</h1>
      <div className="ms-4 text-right d-inline">
          <div className="ms-5 text-center d-inline">
                <button
                  className=" btn btn-dark text-light align-middle"
                  type="submit"
                >
                  Add
                </button>
          </div>
          <div className="ms-2 text-center d-inline">
                <button
                  className=" btn btn-dark text-light align-middle"
                  type="submit"
                >
                  Cancel
                </button>
          </div>
        </div>
      </div>
    
      <hr/>
      <form className="mt-3">
        <div className="form-group mb-3">
            <label htmlFor="fname">First Name </label>
            <input
              type="text"
              id="fname"
              maxLength="15"
              className="form-control text-capitalize"
              placeholder="First Name"
              required
            />
        </div>
        <div className="form-group mb-3">
            <label htmlFor="mname">Middle Initial </label>
            <input
              type="text"
              id="mname"
              maxLength="1"
              className="form-control text-capitalize"
              placeholder="Middle Initial"
            />
        </div>
        <div className="form-group mb-3">
            <label htmlFor="lname">Last Name </label>
            <input
              type="text"
              id="lname"
              maxLength="15"
              className="form-control text-capitalize"
              placeholder="Last Name"
              required
            />
        </div>
        <div className="form-group mb-3">
            <label htmlFor="date">Date of Birth </label>
            <input
              type="date"
              id="date"
              max={dateNow}
              className="form-control"
              placeholder="YYYY/MM/DD"
              required
            />
        </div>
        <div className="form-group mb-3">
            <label htmlFor="position">Position </label>
            <input
              type="text"
              id="position"
              maxLength="50"
              className="form-control text-capitalize"
              placeholder="Position"
              required
            />
        </div>
      </form>
    </div>
    );
  };
  
  export default AddEmployee;