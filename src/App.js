import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import JoinNewsletter from './components/JoinNewsletter';
import Footer from './components/Footer';

import Main from './pages/Main';
import Explore from './pages/Explore';
import Blog from './pages/Blog';
import Pricing from './pages/Pricing';
import WorkWithUs from './pages/WorkWithUs';

function App() {
  return (
    <Router>
      <div className="bg-orange-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/work" element={<WorkWithUs />} />
        </Routes>
        <JoinNewsletter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
