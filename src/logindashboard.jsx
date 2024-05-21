import React, { useState } from 'react';

const LoginDashboard = () => {
    const [name, setName] = useState('');
    const [carNumberPlate, setCarNumberPlate] = useState('');
    const [payment, setPayment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to smart contract or backend)
        console.log({
            name,
            carNumberPlate,
            payment,
        });
    };

    return (
        <div className="container mt-5">
            <h2>Login Dashboard</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="carNumberPlate">Car Number Plate</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="carNumberPlate"
                        value={carNumberPlate}
                        onChange={(e) => setCarNumberPlate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="payment">Payment</label>
                    <input 
                        type="number"
                        className="form-control"
                        id="payment"
                        value={payment}
                        onChange={(e) => setPayment(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default LoginDashboard;
