
import { useEffect } from 'react';
import { useLocation, } from 'react-router-dom';

export const useLastPathTwo = () => {
    const { pathname, search } = useLocation();
    useEffect(() => {
        const lastPath = pathname + search;

        localStorage.setItem('lastPath', lastPath);
    }, [pathname, search]);


};