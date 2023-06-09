import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css';

const Registration = () => {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (state.password === state.confirmPassword) {
            navigate('/profile', { state: state });
        } else {
            alert("Password and Confirm Password do not match.");
        }
    }

    const handleInputChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div className="container mt-5">
            <div className="jumbotron mb-5">
                <h2 className="display-5 main-header">Registration</h2>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="card p-4 mb-4">
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" className="form-control" name="firstName" required pattern="[A-Za-z]+" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" className="form-control" name="lastName" required pattern="[A-Za-z]+" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" name="email" required onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" required minLength="8" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" className="form-control" name="confirmPassword" required onChange={handleInputChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;