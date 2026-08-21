import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Ministries from './pages/Ministries';
import Media from './pages/Media';
import Give from './pages/Give';
import Alumni from './pages/Alumni';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="ministries" element={<Ministries />} />
          <Route path="media" element={<Media />} />
          <Route path="give" element={<Give />} />
          <Route path="alumni" element={<Alumni />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
