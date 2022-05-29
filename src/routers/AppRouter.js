import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseHelpPage from '../components/ExpenseHelpPage';
import Page404 from '../components/Page404';
import Header from '../components/Header';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<ExpenseDashboardPage />} />
                <Route path="create" element={<AddExpensePage />} />
                <Route path="edit/:id" element={<EditExpensePage />} />
                <Route path="help" element={<ExpenseHelpPage />} />
                <Route path="*" element={<Page404 />} /> 
            </Routes>
        </div>
    </BrowserRouter>
)

export default AppRouter