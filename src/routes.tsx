import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing/Index';
import TeacherList from './pages/TeachersList';
import TeacherForm from './pages/TeacherForm';

function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/study" component={TeacherList}/>
            <Route exact path="/give-class" component={TeacherForm}/>
        </BrowserRouter>
    );
}

export default Routes;