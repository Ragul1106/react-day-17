import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import IntroDynamicRouting from './components/Task1';
import UserDetail from './components/Task2-3-4';
import UserDetailMultiParam from './components/Task5';
import UserDetailOptionalParam from './components/Task6';
import { NavigationLinks, ProductDetails } from './components/Task7'; 
import ProgrammaticNavigation from './components/Task8';
import UserDetailDefaultParam from './components/Task9';
import UserDetailValidation from './components/Task10';
import { UserProfileWithNested, UserPosts } from './components/Task11'; 
import UserFetcher from './components/Task12-13';

const App = () => {
  return (
    <Router>
      <div className="min-vh-100 bg-light"> 
        <Navbar />
        <main className="container my-4"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<IntroDynamicRouting />} />

            <Route path="/user/:id" element={<UserDetail />} />

            <Route path="/user/:id/:name" element={<UserDetailMultiParam />} />

            <Route path="/user-optional/:id?" element={<UserDetailOptionalParam />} />

            <Route path="/navigation-links" element={<NavigationLinks />} />
            <Route path="/product/:categoryId/:productId" element={<ProductDetails />} /> 

            <Route path="/programmatic-navigation" element={<ProgrammaticNavigation />} />

            <Route path="/user-default/:id?" element={<UserDetailDefaultParam />} />

  
            <Route path="/user-validate/:id" element={<UserDetailValidation />} />

       
            <Route path="/user/:id" element={<UserProfileWithNested />}>
            
              <Route index element={
                <div className="p-4 bg-white rounded shadow-sm text-center">
                  <p className="text-muted fst-italic">Select "View Posts" above to see nested content.</p>
                </div>
              } />
              <Route path="posts" element={<UserPosts />} />
            </Route>

            <Route path="/user-data/:id" element={<UserFetcher />} />

            <Route path="*" element={
              <div className="container p-4 bg-white rounded shadow-sm mx-auto my-4 text-center">
                <h2 className="mb-3 h2 text-danger">404 - Page Not Found</h2>
                <p className="text-body">The requested URL does not exist.</p>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;