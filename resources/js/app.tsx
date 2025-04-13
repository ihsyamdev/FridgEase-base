import './bootstrap';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Template } from './components/Template';
import { IngredientsCreate } from './pages/ingredients/IngredientsCreate';
import { AuthProvider } from './AuthProvider';
import { ProtectedRoute } from './routes/ProtectedRoute';
import { MyProfile } from './pages/users/MyProfile';
import { ChangePassword } from './pages/auth/ChangePassword';
import { SignIn } from './pages/auth/Signin';
import { SignUp } from './pages/auth/Signup';
import '../css/app.css';

const appElement = document.getElementById('app');
if (appElement) {
  const container = createRoot(appElement);
  container.render(
    // MEMO: Routerコンポーネントは最上位のみで配置する。NestはNG
    <AuthProvider>
      <Router>
        <Routes>
          {/* URLのルーティング設定 */}
          <Route path='/' element={<Template />} />
          <Route path='/ingredients-create' element={<IngredientsCreate />} />
          {/* 認証関連ページ */}
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          {/* ユーザー関連ページ */}
          <Route path='/my-profile' element={
            <ProtectedRoute>
              <MyProfile />
            </ProtectedRoute>
          } />
          <Route path='/change-password' element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
} else {
  console.error('App element not found');
}