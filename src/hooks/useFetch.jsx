import { useState, useEffect } from "react";
export default function useFetch(url) {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async (url) => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('Network error or invalid response');
                const json = await response.json();
                setData(json);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getData(url);
    }, [url]);

    return { error, loading, data };
}
