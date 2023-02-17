import React from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {HelloPage} from "./views/SignIn/HelloPage/HelloPage";
import {LoginPage} from "./views/SignIn/Login/LoginPage";
import {CreateAccount} from "./views/SignIn/CreateAccount/CreateAccount";
import {PostDetail} from "./views/Post/PostDetail";
import {KnowledgeLayout} from "./views/Knowledge/KnowledgeLayout/KnowledgeLayout";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    {/*<Route path={'/hello'} element={<HelloPage/>}/>*/}
                    {/*<Route path={'/create'} element={<CreateAccount/>}/>*/}
                    {/*<Route path={'/post-detail/:id'} element={<PostDetail/>}/>*/}
                    <Route path={'/login'} element={<LoginPage/>}/>
                    <Route path={'/knowledge'} element={<KnowledgeLayout />}/>
                    <Route path={'/knowledge/:id'} element={<LoginPage/>}/>
                    <Route path={'/knowledge/:id/edit'} element={<LoginPage/>}/>
                    <Route path={'/team'} element={<LoginPage/>}/>
                    <Route path={'/team/add'} element={<LoginPage/>}/>
                    <Route path={'/team/member-detail/:id'} element={<LoginPage/>}/>
                    <Route path={'/team/member-detail/:id/edit'} element={<LoginPage/>}/>
                    <Route path={'/achievements'} element={<LoginPage/>}/>
                    <Route path={'/achievements/add'} element={<LoginPage/>}/>

                    <Route path="/*" element={<Navigate to="/login" replace/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
