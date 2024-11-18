import './bootstrap';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { Template } from './components/Template';
import '../css/app.css';

const appElement = document.getElementById('app');
if (appElement) {
  const container = createRoot(appElement)
  container.render(<Template />);
} else {
  console.error('App element not found');
}
