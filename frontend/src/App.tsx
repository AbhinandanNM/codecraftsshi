import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import LessonsPage from './pages/LessonsPage';
import LessonDetailPage from './pages/LessonDetailPage';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              
              {/* Protected Routes */}
              <Route 
                path="/lessons" 
                element={
                  <ProtectedRoute>
                    <LessonsPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/lessons/:lessonId" 
                element={
                  <ProtectedRoute>
                    <LessonDetailPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/lessons/:lessonId/practice" 
                element={
                  <ProtectedRoute>
                    <div className="text-center">
                      <h1 className="text-2xl font-bold">Practice Questions (Coming Soon)</h1>
                      <p className="text-gray-600 mt-2">This feature will be implemented in future tasks.</p>
                    </div>
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/flashcards" 
                element={
                  <ProtectedRoute>
                    <div className="text-center">
                      <h1 className="text-2xl font-bold">Flashcards (Coming Soon)</h1>
                      <p className="text-gray-600 mt-2">This feature will be implemented in future tasks.</p>
                    </div>
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/duels" 
                element={
                  <ProtectedRoute>
                    <div className="text-center">
                      <h1 className="text-2xl font-bold">Duels (Coming Soon)</h1>
                      <p className="text-gray-600 mt-2">This feature will be implemented in future tasks.</p>
                    </div>
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/leaderboard" 
                element={
                  <ProtectedRoute>
                    <div className="text-center">
                      <h1 className="text-2xl font-bold">Leaderboard (Coming Soon)</h1>
                      <p className="text-gray-600 mt-2">This feature will be implemented in future tasks.</p>
                    </div>
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                } 
              />
              
              {/* Catch all route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;