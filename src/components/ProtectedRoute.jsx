import NotFoundPage from '../pages/NotFoundPage';

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user');

  if (!user) {
    // If not logged in, show the "Fake" 404 page
    return <NotFoundPage />;
  }

  // If logged in, show the actual page
  return children;
};

// 👇 THIS LINE IS MISSING OR BROKEN IN YOUR FILE
export default ProtectedRoute;