// Librairies
import './App.css';
import { Route, Routes } from 'react-router-dom';

// Composants
import Layout from '../../HOC/Layout/Layout.js';
import Home from '../Home/Home.js';
import Articles from '../Articles/Articles.js';
import Contact from '../../Components/Contact/Contact.js';
import Article from '../Articles/Article/Article';

function App() {



  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/articles' element={<Articles />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/articles/:id' element={<Article  />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
