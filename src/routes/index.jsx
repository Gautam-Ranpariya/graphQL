import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";
import Capsules from "../app/capsules";
import Company from "../app/company";
import Cores from "../app/cores";

const router = createBrowserRouter([
    {
        path : '/',
        element : <DefaultLayout />,
        children : [
            {
                path : '/',
                element : <Company />,
            },                    
            {
                path : '/capsules',
                element : <Capsules />,
            },
            {
                path : '/cores',
                element : <Cores />,
            },
        ]
    },
    {
        path : '*',
        element : <Error />,
    }
]);

export default router;
