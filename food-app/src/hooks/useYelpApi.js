import { useEffect, useState } from 'react';
import of from 'await-of';
import yelp from '../api/yelp';

const useYelpApi = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [searchTerm, setSearchTerm] = useState('pasta');

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const [{ data = {} }, error] = await of(
                yelp.get('/search', {
                    params: {
                        limit: 50,
                        term: searchTerm,
                        location: 'toronto',
                    },
                })
            );

            if (error) {
                setIsError(true);
            }

            setData(data.businesses);
            setIsLoading(false);
        };

        fetchData();
    }, [searchTerm]);

    return [
        {
            data,
            isLoading,
            isError,
        },
        setSearchTerm,
    ];
};

export default useYelpApi;
