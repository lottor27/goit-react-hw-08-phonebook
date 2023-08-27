import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <h2 className="text-message">
      404 Not Found. Will be redicted to the home page!
    </h2>
  );
};

export default ErrorPage;
