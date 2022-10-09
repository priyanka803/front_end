import React from "react";
import './Student.css';
class Student extends React.Component {


    render() { 
        return (
            <div className="container">
                
                <form className="row g-3 needs-validation" noValidate="">
              <div><h2 >Student's detail</h2></div>     
  <div className="col-md-5">
    <label htmlFor="validationCustom01" className="form-label">
      Student name
    </label>
    <input
      type="text"
      className="form-control"
      id="validationCustom01"
      required
    />
  </div>
  <div className="col-md-5">
    <label htmlFor="validationCustom02" className="form-label">
      Date of birth
    </label>
    <input
      type="date"
      className="form-control"
      id="validationCustom02"
      required
    />
  </div>


 {/* gender */}
 
  <div className="col-md-10">
  <label htmlFor="validationCustom02" className="form-label">
      Gender
    </label>
<div className="radio_btn">
     Male&ensp;<input
      type="radio"
      name="inlineRadioOptions"
      defaultValue="option1"
      class="form-check-input"
    />&emsp;&emsp;
    Female&ensp;<input
      type="radio"
      name="inlineRadioOptions"
      defaultValue="option2"
      class="form-check-input"
    />
</div>
  </div>
  <div className="col-md-5">
    <label htmlFor="validationCustom03" className="form-label">
      Addmission in class
    </label>
    <input
      type="text"
      className="form-control"
      id="validationCustom03"
      required
    />
  </div>
  <div className="col-md-5">
    <label htmlFor="validationCustom03" className="form-label">
      Date of Addmission
    </label>
    <input
      type="date"
      className="form-control"
      id="validationCustom03"
      required
    />
  </div>
  <div className="col-md-5">
    <label htmlFor="validationCustom03" className="form-label">
      Aadhar no
    </label>
    <input
      type="text"
      maxLength="12"
      className="form-control"
      id="validationCustom03"
      required
    />
  </div>
  
  <div className="col-md-5">
    <label htmlFor="validationCustom04" className="form-label">
      Catagory
    </label>
    <select className="form-select" id="validationCustom04" required>
      <option  value="General">General</option>
      <option  value="OBC">OBC</option>
      <option  value="SC">SC</option>
      <option  value="ST">ST</option>
    </select>
  </div>
  <div className="col-md-5">
    <label htmlFor="validationCustom04" className="form-label">
      Nationality
    </label>
    <select className="form-select" id="validationCustom04" required>
      <option  value="Indian" selected="Indian" >Indian</option>
      <option>Other</option>
    </select>
  </div>
  <div className="col-md-5">
    <label htmlFor="validationCustom04" className="form-label">
      Religion
    </label>
    <select className="form-select" id="validationCustom04" required>
      <option  value="Hindu">Hindu</option>
      <option  value="Muslim">Muslim</option>
      <option  value="Christian">Christian</option>
      <option  value="Sikh">Sikh</option>
      <option  value="Buddhist">Buddhist</option>
      <option  value="Jain">Jain</option>
    </select>
  </div>
  <div><h2 >Father's detail</h2></div>     
  <div className="col-md-5">
    <label htmlFor="validationCustom01" className="form-label">
      Father's name
    </label>
    <input
      type="text"
      className="form-control"
      id="validationCustom01"
      required
    />
  </div>
  <div className="col-md-5">
    <label htmlFor="validationCustom02" className="form-label">
      Date of birth
    </label>
    <input
      type="date"
      className="form-control"
      id="validationCustom02"
      required
    />
  </div>
  <div className="col-md-5">
    <label htmlFor="validationCustom04" className="form-label">
      Qualification
    </label>
    <select className="form-select" id="validationCustom04" required>
      <option  value="UG">UG</option>
      <option  value="PG">PG</option>
      <option  value="10th">10th</option>
      <option  value="12th">12th</option>
      <option  value="Buddhist">Below 10th</option>
    </select>
  </div>
  <div className="col-md-5">
    <label htmlFor="validationCustom04" className="form-label">
      Occupation
    </label>
    <select className="form-select" id="validationCustom04" required>
      <option  value="Private">Private</option>
      <option  value="Government">Government</option>
      <option  value="Self employee">Self employee</option>
      <option  value="Other">Other</option>
    </select>
  </div>

  <div className="col-md-5">
    <label htmlFor="validationCustom03" className="form-label">
      Mobile no
    </label>
    <input
      type="text"
      maxLength="10"
      className="form-control"
      id="validationCustom03"
      required
    /></div>
    <div className="col-md-5">
    <label htmlFor="validationCustom03" className="form-label">
      Email
    </label>
    <input
      type="email"
      className="form-control"
      id="validationCustom03"
    />
  </div>
  <div><h2 >Mother's detail</h2></div>     
  <div className="col-md-5">
    <label htmlFor="validationCustom01" className="form-label">
      Mother's name
    </label>
    <input
      type="text"
      className="form-control"
      id="validationCustom01"
      required
    />
  </div>
  <div className="col-md-5">
    <label htmlFor="validationCustom02" className="form-label">
      Date of birth
    </label>
    <input
      type="date"
      className="form-control"
      id="validationCustom02"
      required
    />
  </div>
  <div className="col-md-5">
    <label htmlFor="validationCustom04" className="form-label">
      Qualification
    </label>
    <select className="form-select" id="validationCustom04" required>
      <option  value="UG">UG</option>
      <option  value="PG">PG</option>
      <option  value="10th">10th</option>
      <option  value="12th">12th</option>
      <option  value="Buddhist">Below 10th</option>
    </select>
  </div>
  <div className="col-md-5">
    <label htmlFor="validationCustom04" className="form-label">
      Occupation
    </label>
    <select className="form-select" id="validationCustom04" required>
      <option  value="Private" >Private</option>
      <option  value="Government">Government</option>
      <option  value="Self employee">Self employee</option>
      <option  value="Other">Other</option>
    </select>
  </div>

  <div className="col-md-5">
    <label htmlFor="validationCustom03" className="form-label">
      Mobile no
    </label>
    <input
      type="text"
      maxLength="10"
      className="form-control"
      id="validationCustom03"
      required
    />
  </div>
  <div className="col-md-5">
    <label htmlFor="validationCustom01" className="form-label">
      Date of marriage
    </label>
    <input
      type="date"
      className="form-control"
      id="validationCustom01"
      required
    />
  </div>

  <div><h2 >Address</h2></div>     
  <div className="col-md-5">
    <label htmlFor="validationCustom01" className="form-label">
      House no
    </label>
    <input
      type="text"
      className="form-control"
      id="validationCustom01"
      required
    />
  </div>
  <div className="col-md-5">
    <label htmlFor="validationCustom02" className="form-label">
      Locality
    </label>
    <input
      type="text"
      className="form-control"
      id="validationCustom02"
      required
    />
  </div>


  <div className="col-md-5">
    <label htmlFor="validationCustom04" className="form-label">
      City
    </label>
    <select className="form-select" id="validationCustom04" required>
      <option  value="A">A</option>
      <option  value="B">B</option>
      <option  value="C">C</option>
    </select>
  </div>
  <div className="col-md-5">
    <label htmlFor="validationCustom03" className="form-label">
      Pincode
    </label>
    <input
      type="text"
      maxLength="6"
      className="form-control"
      id="validationCustom03"
      required
    />
  </div>
  <div className="col-md-5">
    <label htmlFor="validationCustom04" className="form-label">
      State
    </label>
    <select className="form-select" id="validationCustom04" required>
      <option  value="A">A</option>
      <option  value="B">B</option>
      <option  value="C">C</option>
    </select>
  </div>
  <div className="col-md-5">
    <label htmlFor="validationCustom04" className="form-label">
      Country
    </label>
    <select className="form-select" id="validationCustom04" required>
      <option  value="India">India</option>
      <option  value="Other" >Other</option>
    </select>
  </div>
    <div class="col-10">
    <button class="btn btn-primary" type="submit" id="btn-submit">Save & next</button>
    <button class="btn btn-primary" type="reset" id="btn-reset">reset</button>
  </div>
</form>

            </div>
        );
    }
}
 
export default Student;