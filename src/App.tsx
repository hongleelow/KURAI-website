import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Eagerly load the home page for fast initial paint
import Home from './pages/Home/Home';

// Lazy-load all other routes for code splitting
const Programs = lazy(() => import('./pages/Programs/Programs'));
const ProgramsKids = lazy(() => import('./pages/Programs/ProgramsKids'));
const ProgramsAdults = lazy(() => import('./pages/Programs/ProgramsAdults'));
const ProgramsSchools = lazy(() => import('./pages/Programs/ProgramsSchools'));
const Schedule = lazy(() => import('./pages/Schedule/Schedule'));
const Events = lazy(() => import('./pages/Events/Events'));
const About = lazy(() => import('./pages/About/About'));
const Blog = lazy(() => import('./pages/Blog/Blog'));
const BlogPost = lazy(() => import('./pages/Blog/BlogPost'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const FreeTrial = lazy(() => import('./pages/FreeTrial/FreeTrial'));
const PrivacyPolicy = lazy(() => import('./pages/Legal/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Legal/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-kurai-royal border-t-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
