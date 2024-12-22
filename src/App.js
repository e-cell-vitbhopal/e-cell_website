import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Main from './Main';
import Technical from './components/Team/Technical';
import Recruitment from './components/Recruitment/Recruitment';
import Summit from './Summit';
import Registration from './e_summit_components/Registration/Registration';
import FormLinks from './e_summit_components/Registration/FormLinks';
import IshaanSharma from './e_summit_components/Registration/IshaanSharma';
import ProductDesign from './e_summit_components/Registration/ProductDesign';
import InternshipFair from './e_summit_components/Registration/InternshipFair';
import IPLAuction from './e_summit_components/Registration/IPLAuction';
import SilentDisco from './e_summit_components/Registration/SilentDisco';
import FireSideChat from './e_summit_components/Registration/FireSideChat';
import CaseStudyCompetition from './e_summit_components/Registration/CaseStudyCompetition';
import PaperTrading from './e_summit_components/Registration/PaperTrading';
import Summit_copy from './Summit - Copy';
import Layout from './blog_components/Layout';
import IndexPage from './blog_components/IndexPage';
import LoginPage from './blog_components/LoginPage';
import {UserContextProvider} from './blog_components/UserContext';
import CreatePost from './blog_components/CreatePost';
import PostPage from './blog_components/PostPage';
import EditPost from './blog_components/EditPost';
import ProtectedRoute from './blog_components/ProtectedRoute';
import './blog_components/blog.css'

function App() {
  return (
    <div>
      {/* <Main /> */}
      <BrowserRouter>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/e-cell-technical" element={<Technical />} />
            <Route path="/recruitment" element={<Recruitment />} />
            {/* Esummit */}
            <Route path="/e_summit_2024" element={<Summit />} />
            <Route path="/parichay" element={<Summit_copy />} />
            <Route path="/e_summit_2024/registration" element={<FormLinks />} />
            <Route path="/e_summit_2024/registration/IshaanSharma" element={<IshaanSharma />} />
            <Route path="/e_summit_2024/registration/ProductDesign" element={<ProductDesign />} />
            <Route path="/e_summit_2024/registration/InternshipFair" element={<InternshipFair />} />
            <Route path="/e_summit_2024/registration/IPLAuction" element={<IPLAuction />} />
            <Route path="/e_summit_2024/registration/SilentDisco" element={<SilentDisco />} />
            <Route path="/e_summit_2024/registration/FireSideChat" element={<FireSideChat />} />
            <Route path="/e_summit_2024/registration/CaseStudyCompetition" element={<CaseStudyCompetition />} />
            <Route path="/e_summit_2024/registration/PaperTrading" element={<PaperTrading />} />
            {/* Blogs */}
            <Route path="/blogs" element={<Layout />}>
              <Route index element={<IndexPage />} />
              <Route path="login-admin" element={<LoginPage />} />
              <Route path="create" element={<ProtectedRoute><CreatePost /></ProtectedRoute> } />
              <Route path="post/:id" element={<PostPage />} />
              <Route path="edit/:id" element={<EditPost />} />
            </Route>
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
