import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home';
import Programs from './pages/Programs/Programs';
import ProgramsKids from './pages/Programs/ProgramsKids';
import ProgramsAdults from './pages/Programs/ProgramsAdults';
import ProgramsSchools from './pages/Programs/ProgramsSchools';
import Schedule from './pages/Schedule/Schedule';
import Events from './pages/Events/Events';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import BlogPost from './pages/Blog/BlogPost';
import Contact from './pages/Contact/Contact';
import FreeTrial from './pages/FreeTrial/FreeTrial';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/kids" element={<ProgramsKids />} />
        <Route path="/programs/adults" element={<ProgramsAdults />} />
        <Route path="/programs/schools" element={<ProgramsSchools />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/free-trial" element={<FreeTrial />} />
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
}
