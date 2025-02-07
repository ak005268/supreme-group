import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactForm from './pages/components/ContactForm';
import Footer from './pages/components/Footer';
import Header from './pages/components/Header';
import IntroBanner from './pages/components/IntroBanner';
import { ToastContainer } from 'react-toastify';
import NotFound from './pages/components/NotFound';
import FeatureSection from './pages/components/FeatureSection ';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes> 
          <Route path="/" element={<>
            <IntroBanner />
            <FeatureSection />
            <ContactForm />
            
          </>} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>

      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
