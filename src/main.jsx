import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import store from "./store/store.js";
import {Provider} from "react-redux";
import Home from "./components/pages/Home.jsx";
import HealthCare from "./components/HospitalPages/healthcare/HealthCare.jsx";
 import SingUp from "./components/pages/singup/SingUp.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                children:[],
            },

            {
                path: "/health",
                element: <HealthCare/>,
            },
            {
                path: "/singup",
                element: <SingUp/>,

            },



        ],
    },
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider  store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </StrictMode>,
)
