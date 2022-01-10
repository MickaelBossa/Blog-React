// Style
import "./App.css";

// Librairies
import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import routes from "../../config/routes.js";
import fire from '../../config/firebase';

// Composants
import Layout from "../../HOC/Layout/Layout.js";
import Home from "../Home/Home.js";
import Articles from "../Articles/Articles.js";
import Contact from "../../Components/Contact/Contact.js";
import Article from "../Articles/Article/Article.js";
import Error404 from "../../Components/Error404/Error404.js";
import ManageArticle from "../Admin/ManageArticle/ManageArticle";
import Authentification from "../Security/Authentification/Authentification";

function App() {

  const [user, setUser] = useState('');

  useEffect(() => {
    authListener();
  }, []);

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user) {
        setUser(user);
      } else {
        setUser('');
      }
    });
  };

  return (
    <div className="App">
      <Layout user={user}>
        <Routes>
          <Route exact path={routes.HOME} element={<Home />} />
          <Route exact path={routes.ARTICLES} element={<Articles />} />
          <Route
            exact
            path={routes.ARTICLES + "/:slug"}
            element={<Article user={user} />}
          />
          <Route exact path={routes.CONTACT} element={<Contact />}>
            <Route exact path={routes.EMAIL} element={<p>John.doe@google.com</p>} />
            <Route exact path={routes.PHONE} element={<p>06 06 06 06 06</p>} />
          </Route>
          { user ? <Route
            exact
            path={routes.MANAGE_ARTICLE}
            element={<ManageArticle />}
          /> : null }
          { !user ? <Route
          exact
          path={routes.AUTHENTIFICATION}
          element={<Authentification />}
          /> : null }
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
