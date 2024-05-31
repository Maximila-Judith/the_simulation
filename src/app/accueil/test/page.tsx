
'use client'

import React from 'react';

const sendResultCode = async (userId: number, email: string) => {
    try {
        const response = await fetch('/api/sendResultCode', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, email }),
        });

        if (!response.ok) {
            console.log(userId)
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to send user ID');
        }

        const data = await response.json();
        console.log(data.message);
    } catch (error) {
        console.error('Error sending user ID:', error);
    }
};

const ReceiveCodeButton = () => {
    const userId = 1;
    const email = 'houngbo.maximila@gmail.com';

    const handleReceiveCode = () => {
        sendResultCode(userId, email);
    };

    return (
        <button onClick={handleReceiveCode}>Receive Code</button>
    );
};

export default ReceiveCodeButton;

