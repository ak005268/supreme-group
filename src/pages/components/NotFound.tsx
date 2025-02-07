import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-c3">404</h1>
      <p className="text-lg  mt-4">Oops! The page you requested doesn't exist.</p>
      <Link to="/" className="mt-6 px-6 py-3 bg-c1 border border-c2 rounded-full text-lg  hover:bg-c2 transition">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
