// src/components/Payments.js
import React, { useState, useEffect } from 'react';

function Payments() {
  const [payments, setPayments] = useState([]);
  const [newPayment, setNewPayment] = useState({
    studentId: '',
    amount: '',
    dueDate: '',
    description: ''
  });

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const response = await fetch('http://192.168.100.215:3000/api/payments');
      const data = await response.json();
      setPayments(data);
    } catch (error) {
      console.error('Error fetching payments:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://192.168.100.215:3000/api/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPayment),
      });
      if (response.ok) {
        fetchPayments();
        setNewPayment({
          studentId: '',
          amount: '',
          dueDate: '',
          description: ''
        });
      }
    } catch (error) {
      console.error('Error adding payment:', error);
    }
  };

  const handlePaymentStatus = async (id, status) => {
    try {
      const response = await fetch(`http://192.168.100.215:3000/api/payments/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
      if (response.ok) {
        fetchPayments();
      }
    } catch (error) {
      console.error('Error updating payment status:', error);
    }
  };

  return (
    <div className="payments">
      <h2>Payment Management</h2>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student ID"
          value={newPayment.studentId}
          onChange={(e) => setNewPayment({...newPayment, studentId: e.target.value})}
        />
        <input
          type="number"
          placeholder="Amount"
          value={newPayment.amount}
          onChange={(e) => setNewPayment({...newPayment, amount: e.target.value})}
        />
        <input
          type="date"
          placeholder="Due Date"
          value={newPayment.dueDate}
          onChange={(e) => setNewPayment({...newPayment, dueDate: e.target.value})}
        />
        <input
          type="text"
          placeholder="Description"
          value={newPayment.description}
          onChange={(e) => setNewPayment({...newPayment, description: e.target.value})}
        />
        <button type="submit">Add Payment</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Amount</th>
            <th>Due Date</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.studentId}</td>
              <td>${payment.amount}</td>
              <td>{new Date(payment.dueDate).toLocaleDateString()}</td>
              <td>{payment.description}</td>
              <td>{payment.status ? 'Paid' : 'Pending'}</td>
              <td>
                {!payment.status && (
                  <button 
                    onClick={() => handlePaymentStatus(payment.id, true)}
                    className="btn-success"
                  >
                    Mark as Paid
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Payments;