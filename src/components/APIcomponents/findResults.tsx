import React, { useState } from 'react';

interface Result {
    tax_name: string;
    tax_base: string;
    amount: string;
    rate: string;
    minimum: number;
    price_add: number;
    tax_price: string;
}

interface FetchResultProps {
    onResultFetched: (result: Result | null) => void;
}

const fetchResultById = async (id: number) => {
    try {
        const response = await fetch(`/api/getResultById?id=${id}`);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to fetch result');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération du résultat:', error);
        throw new Error('Failed to fetch result');
    }
};

const FetchResult: React.FC<FetchResultProps> = ({ onResultFetched }) => {
    const [userId, setUserId] = useState<number>(0);

    const handleFetchResult = async () => {
        try {
            const result = await fetchResultById(userId);
            onResultFetched(result);
        } catch (error) {
            console.error('Erreur lors de la récupération du résultat:', error);
            onResultFetched(null);
        }
    };

    return (
        <div>
            <h1>Fetch Result</h1>
            <input
                type="number"
                value={userId}
                onChange={(e) => setUserId(Number(e.target.value))}
                placeholder="Enter User ID"
            />
            <button onClick={handleFetchResult}>Fetch Result</button>
        </div>
    );
};

export default FetchResult;
