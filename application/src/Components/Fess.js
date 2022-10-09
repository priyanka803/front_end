import React from "react";
import './Student.css';
class Fees extends React.Component {
    render() { 
        return (
            <div className="container">
                
                <form className="row g-3 needs-validation" noValidate="">
              <div><h2 >Fee detail</h2></div>     
  <div className="col-md-5">
    <label htmlFor="validationCustom01" className="form-label">
      Addmission fee
    </label>
    <input
      type="text"
      className="form-control"
      id="validationCustom01"
      required
    />
  </div>
  <div className="col-md-5">
    <label htmlFor="validationCustom01" className="form-label">
      Activity fee
    </label>
    <input
      type="text"
      className="form-control"
      id="validationCustom01"
      required
    />
  </div>
  <div className="col-md-5">
    <label htmlFor="validationCustom01" className="form-label">
      Annual fee
    </label>
    <input
      type="text"
      className="form-control"
      id="validationCustom01"
      required
    />
  </div>
  <div className="col-md-5">
    <label htmlFor="validationCustom01" className="form-label">
      Exam fee
    </label>
    <input
      type="text"
      className="form-control"
      id="validationCustom01"
      required
    />
  </div>
  <div className="col-md-5">
    <label htmlFor="validationCustom01" className="form-label">
      Monthly fee
    </label>
    <input
      type="text"
      className="form-control"
      id="validationCustom01"
      required
    />
  </div>
  <div className="col-md-5">
    <label htmlFor="validationCustom01" className="form-label">
      Transport fee
    </label>
    <input
      type="text"
      className="form-control"
      id="validationCustom01"
      required
    />
  </div>
    <div class="col-10">
    <button class="btn btn-primary" type="submit" id="btn-submit">Submit</button>
    <button class="btn btn-primary" type="reset" id="btn-reset">Clear</button>
  </div>
</form>

            </div>
        );
    }
}
 
export default Fees;