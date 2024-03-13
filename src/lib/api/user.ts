import apiClient from './client'

export const findUserResponse = async (nickname: string) => {
  const result = await apiClient.get(`/user/search?q=${nickname}`);
  return result.data;
}