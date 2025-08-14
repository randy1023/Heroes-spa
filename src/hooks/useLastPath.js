
import { useLocation, useNavigate } from 'react-router-dom';

export const useLastPath = () => {
    const { pathname, search } = useLocation();
    const navigate = useNavigate();


    const saveLastPath = () => {
        console.log('lastPath 1', pathname + search);
        localStorage.setItem('lastPath', pathname + search);
    };


    const redirectToLastPath = () => {
        const lastPath = localStorage.getItem('lastPath') || '/';
        console.log('lastPath 2', lastPath);
        navigate(`${lastPath}`, {
            replace: true
        });
        //localStorage.removeItem('lastPath');
    };

    return { saveLastPath, redirectToLastPath };
};