// src/components/ProtectedRoute.tsx
import { useAdmin } from '../hooks/useAdmin';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const isAdmin = useAdmin();

  if (!isAdmin) return <Navigate to="/" />;
  return children;
}
