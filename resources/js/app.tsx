import './bootstrap';
import { createRoot } from 'react-dom/client';
import React from 'react';
import ExampleComponent from './components/ExampleComponent';

const appElement = document.getElementById('app');
if (appElement) {
  const container = createRoot(appElement)
  container.render(<ExampleComponent />);
} else {
  console.error('App element not found');
}
