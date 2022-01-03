// Librairies
import './App.css';
import { Route, Routes } from 'react-router-dom';
import routes from '../../config/routes.js';

// Composants
import Layout from '../../HOC/Layout/Layout.js';
import Home from '../Home/Home.js';
import Articles from '../Articles/Articles.js';
import Contact from '../../Components/Contact/Contact.js';
import Article from '../Articles/Article/Article.js';
import Error404 from '../../Components/Error404/Error404.js'
import AddArticle from '../../Containers/Admin/AddArticle/AddArticle'

function App() {



  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route exact path={routes.HOME} element={<Home />} />
          <Route exact path={routes.ARTICLES} element={<Articles />} />
          <Route exact path={routes.ARTICLES +'/:id'} element={<Article  />} />
          <Route exact path={routes.CONTACT} element={<Contact />}>
            <Route exact path={routes.EMAIL} element={<p>Email</p>} />
            <Route exact path={routes.PHONE} element={<p>Téléphone</p>} />
          </Route>
          <Route exact path={routes.ADDARTICLE} element={<AddArticle />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
