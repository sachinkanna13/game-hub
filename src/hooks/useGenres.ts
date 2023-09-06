import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { Genre } from '../entities/interfaces';
import APIClient from '../services/api-client';
import { genres } from '../constants/data';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres,
  });

export default useGenres;
