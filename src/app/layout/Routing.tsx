import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import NotFound from './NotFound';
import MarsRover from '../components/MarsRover';

const Routing = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<div>Home page</div>} />
                <Route path='mars-rover' element={<MarsRover />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Routing;
