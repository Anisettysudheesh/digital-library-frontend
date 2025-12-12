import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dashboard.css';
import "./admin.css"
function Admin() {
    const [monthlyData, setMonthlyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [securityKey, setSecurityKey] = useState('');

   
   
    const fetchMonthlyCounters = async () => {
        try {
            setLoading(true);
            let url = 'https://digital-library-backend-812p.onrender.com/monthlyCounters';
            const params = new URLSearchParams();
            
            if (fromDate) {
                params.append('fromDate', fromDate);
            }
            if (toDate) {
                params.append('toDate', toDate);
            }
            
            if (params.toString()) {
                url += `?${params.toString()}`;
            }
            
            const response = await axios.get(url);
            setMonthlyData(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching monthly counters:', error);
            setLoading(false);
        }
    };

    const handleContinue = () => {
        console.log(securityKey);
         if(securityKey==="admin123"){
        document.querySelector('.admin-window').classList.add('none');
        document.querySelector('.admindashboard').classList.remove('none');
        document.querySelector('.admindashboard').classList.add('visible');
    }
    else{
        alert("Invalid Security Key");
    }
    };
    useEffect(() => {
        fetchMonthlyCounters();
    }, []);

    return (
        <div>

      
        <div className="admindashboard none " style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h1>Admin Dashboard - Monthly Login Statistics</h1>
            </div>

            {/* Date Filter Section */}
            <div style={{ 
                marginBottom: '30px', 
                padding: '20px', 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-end'
            }}>
                <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                        From Date:
                    </label>
                    <input
                        type="date"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '10px',
                            fontSize: '16px',
                            border: '1px solid #ddd',
                            borderRadius: '5px'
                        }}
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                        To Date:
                    </label>
                    <input
                        type="date"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '10px',
                            fontSize: '16px',
                            border: '1px solid #ddd',
                            borderRadius: '5px'
                        }}
                    />
                </div>
                <button
                    onClick={fetchMonthlyCounters}
                    style={{
                        padding: '10px 30px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
                >
                    Get Records
                </button>
            </div>

            {loading ? (
                <div style={{ textAlign: 'center', padding: '50px' }}>
                    <div className="spinner"></div>
                </div>
            ) : (
                <div style={{ overflowX: 'auto' }}>
                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        backgroundColor: 'white',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        borderRadius: '8px',
                        overflow: 'hidden'
                    }}>
                        <thead>
                            <tr style={{ backgroundColor: '#007bff', color: 'white' }}>
                                <th style={{ padding: '15px', textAlign: 'left', fontSize: '16px', fontWeight: 'bold' }}>Year</th>
                                <th style={{ padding: '15px', textAlign: 'left', fontSize: '16px', fontWeight: 'bold' }}>Month</th>
                                <th style={{ padding: '15px', textAlign: 'left', fontSize: '16px', fontWeight: 'bold' }}>Login Count</th>
                                <th style={{ padding: '15px', textAlign: 'left', fontSize: '16px', fontWeight: 'bold' }}>Archived Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {monthlyData.length === 0 ? (
                                <tr>
                                    <td colSpan="4" style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                                        No monthly data available yet
                                    </td>
                                </tr>
                            ) : (
                                monthlyData.map((record, index) => (
                                    <tr 
                                        key={record._id}
                                        style={{
                                            backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'white',
                                            borderBottom: '1px solid #dee2e6'
                                        }}
                                    >
                                        <td style={{ padding: '12px', fontSize: '15px' }}>{record.year}</td>
                                        <td style={{ padding: '12px', fontSize: '15px' }}>{record.month}</td>
                                        <td style={{ padding: '12px', fontSize: '15px', fontWeight: 'bold', color: '#007bff' }}>
                                            {record.count}
                                        </td>
                                        <td style={{ padding: '12px', fontSize: '15px' }}>
                                            {new Date(record.archivedAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <h3 style={{ marginBottom: '10px', color: '#333' }}>Summary</h3>
                <p style={{ fontSize: '16px', color: '#666' }}>
                    Total Records: <strong>{monthlyData.length}</strong>
                </p>
                <p style={{ fontSize: '16px', color: '#666' }}>
                    Total Logins (All Time): <strong>{monthlyData.reduce((sum, record) => sum + record.count, 0)}</strong>
                </p>
            </div>
        </div>
        <div className='admin-window'>
            <div className='admin-window-content' style={{
                position: 'fixed',
                top: 20,
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: 8,
                boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
                padding: 16,
                zIndex: 1000,
                width: 'min(90vw, 420px)'
            }}>
                <h3 style={{ margin: 0, fontSize: 18, color: '#111827' }}>Hello Admin</h3>
                <p style={{ margin: '6px 0 12px', fontSize: 14, color: '#4b5563' }}>
                    Please enter your security key
                </p>
                <div style={{ display: 'flex', gap: 8 }}>
                    <input
                    className="key-input"
                        type="text"
                        placeholder="Enter security key"
                        value={securityKey}
                        onChange={(e) => setSecurityKey(e.target.value)}
                        style={{
                            flex: 1,
                            padding: '10px 12px',
                            border: '1px solid #d1d5db',
                            borderRadius: 6,
                            fontSize: 14,
                            outline: 'none'
                            
                        }}
                    />
                    <button
                        onClick={handleContinue}
                        style={{
                            padding: '10px 14px',
                            backgroundColor: '#2563eb',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 6,
                            fontWeight: 600,
                            cursor: 'pointer'
                        }}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    </div>   
    );
}

export default Admin;
