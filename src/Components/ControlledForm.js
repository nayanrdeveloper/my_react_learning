import React, { Component } from 'react'

class ControlledForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: 'nayan',
            lname: 'radadiya',
            isShowPassowrd : false,
        }
    }

    updateFName = (event) => {
        this.setState({
            fname: event.currentTarget.value,
        })
    }

    updateLName = (event) => {
        this.setState({
            lname: event.currentTarget.value,
        })
    }

    showPassword = (event) => {
        if (!event.currentTarget.value){
            this.setState({
                isShowPassowrd: false,
            })
        }
        else{
            this.setState({
                isShowPassowrd: true,
            }) 
        }
    }

    render() {
        return (
            <div className='container'>
                <div className="card">
                    <h5 className="text-center mb-4">Powering world-class companies</h5>
                    <form className="form-card">
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">First name<span className="text-danger"> *</span></label> <input type="text" id="fname" onChange={this.updateFName} value={this.state.fname} name="fname" placeholder="Enter your first name" /> </div>
                            <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Last name<span className="text-danger"> *</span></label> <input type="text" id="lname" onChange={this.updateLName} value={this.state.lname} name="lname" placeholder="Enter your last name" /> </div>
                        </div>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Business email<span className="text-danger"> *</span></label> <input type="text" id="email" name="email" placeholder="" /> </div>
                            <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Phone number<span className="text-danger"> *</span></label> <input type="text" id="mob" name="mob" placeholder="" /> </div>
                        </div>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Job title<span className="text-danger"> *</span></label> <input type="text" id="job" name="job" placeholder="" /> </div>
                        </div>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3">What would you be using Flinks for?<span className="text-danger"> *</span></label> <input type="text" id="ans" name="ans" placeholder="" /> </div>
                        </div>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3">Password<span className="text-danger"> *</span></label> <input type={this.state.isShowPassowrd ? 'text' : 'password'} id="password" name="password" placeholder="password" /> </div>
                        </div>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3">Show Password<span className="text-danger"> *</span></label> <input type="checkbox" id="show_password" name="show_password" onChange={this.showPassword} placeholder="password" /> </div>
                        </div>
                        <div className="row justify-content-end">
                            <div className="form-group col-sm-6"> <button type="submit" className="btn-block btn-primary">Request a demo</button> </div>
                        </div>
                    </form>
                    <div > Name : {this.state.fname}</div>
                    <div > Suname : {this.state.lname}</div>
                </div>
            </div>
        )
    }
}

export default ControlledForm;
