import React from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css';

const Profile = () => {
    const location = useLocation();
    const user = location.state || {};

    return (
        <div className="container mt-5">
            <div className="jumbotron mb-5">
                <h2 className="display-5 main-header">Profile</h2>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <h4 className="section-header">User Details</h4>
                    <div className="card p-4 mb-4">
                        <p><strong className="text-uppercase">First Name:</strong> <span className="text-muted">{user.firstName}</span></p>
                        <p><strong className="text-uppercase">Last Name:</strong> <span className="text-muted">{user.lastName}</span></p>
                        <p><strong className="text-uppercase">Email:</strong> <span className="text-muted">{user.email}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
