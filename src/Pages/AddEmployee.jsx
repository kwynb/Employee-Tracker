import {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import styles from './AddEmployee.module.css';
import {ImUserTie} from 'react-icons/im';
import {BiCalendarEvent} from 'react-icons/bi';

const AddEmployee = () => {

  const [birthDate, setBirthDate] = useState(new Date());
    return (
    <div className={styles.board}>
      <div className="d-block">
      <ImUserTie size='2rem' className="d-inline"/>
      <h3 className={styles.text + " ms-2 d-inline align-middle text-uppercase me-3"}>Add Employee</h3>
      <div className="ms-5 text-right d-inline">
          <div className="ms-5 text-right d-inline">
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
        <div class="row g-3">
          <div class="col-sm-5">
            <label htmlFor="fname">First Name </label>
            <input  type="text" 
                    class="form-control" 
                    placeholder="First Name" 
                    id="fname"
                    aria-label="First Name"
                    className="form-control text-capitalize bg-light"/>
          </div>
          <div class="col-sm">
          <label htmlFor="mname">M.I. </label>
            <input  type="text" 
                      class="form-control" 
                      placeholder="M.I." 
                      id="mname"
                      aria-label="Middle Initial"
                      className="form-control text-capitalize bg-light"/> 
          </div><div class="col-sm-5">
          <label htmlFor="lname">Last Name </label>
            <input  type="text" 
                      class="form-control" 
                      placeholder="Last Name" 
                      id="lname"
                      aria-label="Last Name"
                      className="form-control text-capitalize bg-light"/> 
          </div>
        </div>
        <div className="mt-3 row g-3">
        {/* <div className="h6 form-group mb-3 col-sm-8">
            <label htmlFor="lname">Last Name </label>
            <input
              type="text"
              id="lname"
              maxLength="15"
              className="form-control text-capitalize bg-light"
              placeholder="Last Name"
              required
            />
        </div> */}
          <div className="h6 form-group mb-3 col-sm-4">
                <label htmlFor="date" className="align-top">Date of Birth </label>
                {/* <BiCalendarEvent className="text-dark align-top me-2" size="2rem"/>  */}
                <div className={styles.dpWidth}>
                  <DatePicker selected={birthDate} 
                              onChange={(date) => setBirthDate(date)}
                              dateFormat="yyyy/MM/dd"
                              maxDate={new Date()}
                              id="date"
                              className="form-control text-capitalize bg-light text-muted"/> 
                </div>
          </div>
          <div className="h6 form-group mb-3 col-sm">
              <label htmlFor="position">Position </label>
              <input
                type="text"
                id="position"
                maxLength="50"
                className="form-control text-capitalize bg-light"
                placeholder="Position"
                required
              />
          </div>
        {/* <div className="h6 form-group mb-3">
            <label htmlFor="position">Position </label>
            <input
              type="text"
              id="position"
              maxLength="50"
              className="form-control text-capitalize bg-light"
              placeholder="Position"
              required
            />
        </div> */}
        </div>
      </form>
    </div>
    );
  };
  
  export default AddEmployee;