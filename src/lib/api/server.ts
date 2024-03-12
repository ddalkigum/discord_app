import apiClient from './client'

type IServerType = 'friendship' | 'community';

export const createServerResponse = async (serverName: string, serverType: IServerType) => {
  const response = await apiClient.post('/server', {
    serverName, serverType
  })
  return response.data;
}

export const getServerListResponse = async () => {
  const response = await apiClient.get('/server');
  return response.data;
}