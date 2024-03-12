import apiClient from './client'

export const loginResponse = async (email: string, password: string) => {
  const response = await apiClient.post('/auth/login', {
    email, password
  })
  return response.data;
}

export const signupResponse = async (email: string, password: string, nickname: string) => {
  const response = await apiClient.post('/auth/signup', {
    email, password, nickname
  })
  return response.data;
}

export const loginCheckResponse = async () => {
  const response = await apiClient.get('/auth/login/check');
  return response.data;
}