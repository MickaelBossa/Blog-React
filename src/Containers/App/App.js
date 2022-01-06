// Style
import "./App.css";

// Librairies
import React from 'react';
import { Route, Routes } from "react-router-dom";
import routes from "../../config/routes.js";

// Composants
import Layout from "../../HOC/Layout/Layout.js";
import Home from "../Home/Home.js";
import Articles from "../Articles/Articles.js";
import Contact from "../../Components/Contact/Contact.js";
import Article from "../Articles/Article/Article.js";
import Error404 from "../../Components/Error404/Error404.js";
import ManageArticle from "../Admin/ManageArticle/ManageArticle";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route exact path={routes.HOME} element={<Home />} />
          <Route exact path={routes.ARTICLES} element={<Articles />} />
          <Route
            exact
            path={routes.ARTICLES + "/:slug"}
            element={<Article />}
          />
          <Route exact path={routes.CONTACT} element={<Contact />}>
            <Route exact path={routes.EMAIL} element={<p>John.doe@google.com</p>} />
            <Route exact path={routes.PHONE} element={<p>06 06 06 06 06</p>} />
          </Route>
          <Route
            exact
            path={routes.MANAGE_ARTICLE}
            element={<ManageArticle />}
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
