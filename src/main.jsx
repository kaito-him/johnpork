import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import './index.css'
import App from './App.jsx'
import John from './John.jsx'

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, scale: 1.06, filter: 'blur(16px)', rotate: -1 }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          rotate: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        }}
        exit={{
          opacity: 0,
          scale: 0.94,
          filter: 'blur(16px)',
          rotate: 1,
          transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
        }}
        style={{ position: 'fixed', inset: 0 }}
      >
        <Routes location={location}>
          <Route path="/" element={<App />} />
          <Route path="/call" element={<John />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </StrictMode>,
)
