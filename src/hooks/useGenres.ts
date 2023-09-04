import { genres } from '../constants/data';

const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
