import { ITeam } from '../interfaces';
import baseService from './baseService';

const endpoint = 'users';

const teamsService = {
  getAll: async (): Promise<ITeam[]> => {
    const response = await baseService.get(endpoint);
    return response.data;
  },
  get: async (id: string): Promise<ITeam> => {
    const response = await baseService.get(`${endpoint}/${id}`);
    return response.data;
  },
  create: async (user: ITeam): Promise<ITeam> => {
    const response = await baseService.post(endpoint, user);
    return response.data;
  },
  update: async (id: string, user: ITeam): Promise<ITeam> => {
    const response = await baseService.patch(`${endpoint}/${id}`, user);
    return response.data;
  },
  delete: async (id: string): Promise<void> => {
    await baseService.delete(`${endpoint}/${id}`);
  },
};

export default teamsService;
