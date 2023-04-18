import React from 'react';
import { Route, Routes } from 'react-router-dom';
import All from './All/All';

const PrivateOffice = () => {
    return (
        <div className='offise'>
            <div className="offise--navbar">
                <div>Общие</div>
                <div>Общие</div>
                <div>Общие</div>
                <div>Общие</div>
                <div>Общие</div>
                <div>Общие</div>
                <div>Общие</div>
            </div>

            <Routes>
                <Route path='/private-office/all' element={<All/>}/>
            </Routes>
        </div>
    );
};

export default PrivateOffice;