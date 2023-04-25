import { AppError } from '../../utils/AppError';

const register = () => {
  try {
    return 'Succes register';
  } catch (error) {
    throw new AppError({ message: 'Error', httpCode: 400 });
  }
};

export default { register };
