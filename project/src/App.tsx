import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import SkillsDashboard from './pages/SkillsDashboard';
import Interviews from './pages/Interviews';
import ChatRooms from './pages/ChatRooms';
import Profile from './pages/hr/Profile';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Protected Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/skills" element={<SkillsDashboard />} />
          <Route path="/interviews" element={<Interviews />} />
          <Route path="/chat" element={<ChatRooms />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}