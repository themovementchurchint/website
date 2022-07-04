import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import smoothScrollPolyfill from 'smoothscroll-polyfill'
import './index.css'
import App from './App'

smoothScrollPolyfill.polyfill();

const rootDiv = document.getElementById('root')
const root = createRoot(rootDiv)
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
)
