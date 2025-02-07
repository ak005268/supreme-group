import { useNavigate, useParams } from 'react-router-dom';

const InProgressPage = () => {
  const navigate = useNavigate();
  const { pageName } = useParams();

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl font-bold">Welcome to {pageName} Page</h1>
      <p className="mt-4 text-lg text-gray-600">This page is in progress.</p>
      <button 
        onClick={() => navigate('/')}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
      >
        Home
      </button>
    </div>
  );
};

export default InProgressPage;
