import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserRedirect = () => {
  const { user, isAuthenticated } = useKindeAuth();
  const navigate = useNavigate();
  const [isFirstTime, setIsFirstTime] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      const checkUserId = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/check_user_id/?user_id=${user.id}`);
          if (!response.data.exists) {
            setIsFirstTime(true);
            navigate('/userdetails');  // Redirect to user details page if user does not exist
          } else {
            navigate('/');  // Redirect to home page if user exists
          }
        } catch (error) {
          console.error('Error checking user ID:', error);
        }
      };
      checkUserId();
    }
  }, [isAuthenticated, user, navigate]);

  return null;  // Render nothing as this component is for redirection only
};

export default UserRedirect;
