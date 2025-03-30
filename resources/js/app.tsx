import './bootstrap';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Template } from './components/Template';
import { IngredientsCreate } from './pages/ingredients/IngredientsCreate';
import { SignIn } from './pages/Auth/Signin';
import '../css/app.css';

const appElement = document.getElementById('app');
if (appElement) {
  const container = createRoot(appElement);
  container.render(
    // MEMO: Routerコンポーネントは最上位のみで配置する。NestはNG
    <Router>
      <Routes>
        {/* URLのルーティング設定 */}
        <Route path='/' element={<Template />} />
        <Route path='/ingredients-create' element={<IngredientsCreate />} />
        <Route path='/login' element={<SignIn />} />
      </Routes>
    </Router>
  );
} else {
  console.error('App element not found');
}