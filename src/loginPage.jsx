import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Contractabi from './abi.json';  // Ensure this path is correct
import './create.css';  // Import the CSS file

const carInsuranceAddress = '0x3C0c98F8b157BFce27301E1DD9067956c30209c7';

function LoginPage() {
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [contract, setContract] = useState(null);
    const [policies, setPolicies] = useState([]);
    const [insuredAddress, setInsuredAddress] = useState('');

    // State for new policy data
    const [newPolicy, setNewPolicy] = useState({
        insured: '',
        age: '',
        premiumAmount: '',
        averageSpeed: '',
        drivingLocation: '',
        hasTelematics: false,
        hasDrinkingHistory: false,
        hasHealthIssues: false,
        isActuary: false
    });

    useEffect(() => {
        const init = async () => {
            if (window.ethereum) {
                try {
                    await window.ethereum.request({ method: 'eth_requestAccounts' });
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    const signer = provider.getSigner();
                    const contract = new ethers.Contract(carInsuranceAddress, Contractabi, signer);
                    setProvider(provider);
                    setSigner(signer);
                    setContract(contract);
                    console.log(contract)
                } catch (error) {
                    if (error.code === 4001) {
                        console.error("User denied account access");
                    } else {
                        console.error("An error occurred:", error);
                    }
                }
            } else {
                console.error("No Ethereum provider found. Install MetaMask.");
            }
        };
    
        init();
    }, []);

    const fetchPoliciesByAddress = async () => {
        if (contract && insuredAddress) {
            console.log('Insured Address:', insuredAddress);
            try {
                const policies = await contract.getPoliciesByAddress(insuredAddress);
                console.log(policies)
                // ...
            } catch (error) {
                console.error("Error fetching policies:", error);
            }
        } else {
            console.error("Contract not initialized or insured address is empty.");
        }
    };
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNewPolicy((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const createPolicy = async () => {
        if (contract) {
            try {
                const { insured, age, premiumAmount, averageSpeed, drivingLocation, hasTelematics, hasDrinkingHistory, hasHealthIssues, isActuary } = newPolicy;
                const tx = await contract.createPolicy(
                    insured,
                    parseInt(age),
                    parseInt(premiumAmount),
                    parseInt(averageSpeed),
                    drivingLocation,
                    hasTelematics,
                    hasDrinkingHistory,
                    hasHealthIssues,
                    isActuary
                );
                await tx.wait();
                alert('Policy created successfully!');
                console.log(tx);
            } catch (error) {
                console.error("Error creating policy:", error);
            }
        }
    };

    return (
        <div className="app-container">
            <h1>Car Insurance DApp</h1>
            <div className="policy-form">
                <h2>Create Policy</h2>
                <form>
                    <div className="form-group">
                        <label>Insured Address</label>
                        <input
                            type="text"
                            name="insured"
                            value={newPolicy.insured}
                            onChange={handleInputChange}
                            placeholder="Insured Address"
                        />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input
                            type="number"
                            name="age"
                            value={newPolicy.age}
                            onChange={handleInputChange}
                            placeholder="Age"
                        />
                    </div>
                    <div className="form-group">
                        <label>Premium Amount</label>
                        <input
                            type="number"
                            name="premiumAmount"
                            value={newPolicy.premiumAmount}
                            onChange={handleInputChange}
                            placeholder="Premium Amount"
                        />
                    </div>
                    <div className="form-group">
                        <label>Average Speed</label>
                        <input
                            type="number"
                            name="averageSpeed"
                            value={newPolicy.averageSpeed}
                            onChange={handleInputChange}
                            placeholder="Average Speed"
                        />
                    </div>
                    <div className="form-group">
                        <label>Driving Location</label>
                        <input
                            type="text"
                            name="drivingLocation"
                            value={newPolicy.drivingLocation}
                            onChange={handleInputChange}
                            placeholder="Driving Location"
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            <input
                                type="checkbox"
                                name="hasTelematics"
                                checked={newPolicy.hasTelematics}
                                onChange={handleInputChange}
                            />
                            Has Telematics
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <input
                                type="checkbox"
                                name="hasDrinkingHistory"
                                checked={newPolicy.hasDrinkingHistory}
                                onChange={handleInputChange}
                            />
                            Drinking History
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <input
                                type="checkbox"
                                name="hasHealthIssues"
                                checked={newPolicy.hasHealthIssues}
                                onChange={handleInputChange}
                            />
                            Health Issues
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <input
                                type="checkbox"
                                name="isActuary"
                                checked={newPolicy.isActuary}
                                onChange={handleInputChange}
                            />
                            Is Actuary
                        </label>
                    </div>
                    <button type="button" onClick={createPolicy}>Create Policy</button>
                </form>
            </div>
            <div className="fetch-policy">
                <h2>Fetch Policies by Address</h2>
                <input
                    type="text"
                    value={insuredAddress}
                    onChange={(e) => setInsuredAddress(e.target.value)}
                    placeholder="Enter Insured Address"
                />
                <button onClick={fetchPoliciesByAddress}>Fetch Policies</button>
                {policies.length > 0 && policies.map((policy, index) => (
                    <div key={index} className="policy-details">
                        <p>Policy ID: {policy.policyId}</p>
                        <p>Insured: {policy.insured}</p>
                        <p>Age: {policy.age}</p>
                        <p>Premium Amount: {policy.premiumAmount}</p>
                        <p>Average Speed: {policy.averageSpeed}</p>
                        <p>Driving Location: {policy.drivingLocation}</p>
                        <p>Has Telematics: {policy.hasTelematics.toString()}</p>
                        <p>Drinking History: {policy.hasDrinkingHistory.toString()}</p>
                        <p>Health Status: {policy.hasHealthIssues.toString()}</p>
                        <p>Is Actuary: {policy.isActuary.toString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LoginPage;
