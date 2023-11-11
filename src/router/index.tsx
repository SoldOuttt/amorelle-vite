import { createBrowserRouter } from 'react-router-dom';
import { Landing } from '../view/pages/Landing';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing />,
    },
]);
