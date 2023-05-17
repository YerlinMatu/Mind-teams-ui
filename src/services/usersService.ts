import { IUser } from '../interfaces';
import baseService from './baseService';

const endpoint = 'users';

const usersService = {
  getAll: async (): Promise<IUser[]> => {
    const response = await baseService.get(endpoint);
    return response.data;
  },
  get: async (id: string): Promise<IUser> => {
    const response = await baseService.get(`${endpoint}/${id}`);
    return response.data;
  },
  create: async (user: IUser): Promise<IUser> => {
    const response = await baseService.post(endpoint, user);
    return response.data;
  },
  update: async (id: string, user: IUser): Promise<IUser> => {
    const response = await baseService.patch(`${endpoint}/${id}`, user);
    return response.data;
  },
  delete: async (id: string): Promise<void> => {
    await baseService.delete(`${endpoint}/${id}`);
  },
};

export default usersService;
