import React, { Component } from 'react'
import SweetAlert from 'sweetalert-react';

class UserSubmitForm extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            email: null,
            password: null,
        }
    }

    userSubmitHandelr = (event) => {
        event.preventDefault();
        const name = event.currentTarget.email.value;
        const password = event.currentTarget.password.value;
        this.setState({
            name: name,
            password: password,
        }, () => {
            alert("Form are Submittes ")
        })
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.userSubmitHandelr}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name='password' className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default UserSubmitForm;
