import React from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {LoginPage} from "./views/SignIn/Login/LoginPage";
import {KnowledgeLayout} from "./views/Knowledge/KnowledgeLayout/KnowledgeLayout";
import {KnowledgeItem} from "./views/Knowledge/KnowledgeItem/KnowledgeItem";
import {modeAcces} from "./utils/types/types";

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
                    <Route path={'/knowledge/create'} element={<KnowledgeItem mode={modeAcces.create}/>}/>
                    <Route path={'/knowledge/:id'} element={<KnowledgeItem mode={modeAcces.watch}/>}/>
                    <Route path={'/knowledge/:id/edit'} element={<KnowledgeItem mode={modeAcces.edit}/>}/>
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
