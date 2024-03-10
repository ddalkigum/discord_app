import apiClient from './client'

export const connectChannelRoom = async (serverId: string, channelId: string) => {
  const response = await apiClient.get(`/channel/connect/${serverId}/${channelId}`);
  return response.data;
}

export const sendChat = async (serverId: string, channelId: string, senderId: string, content: string) => {
  const response = await apiClient.post(`/chat/send/${serverId}/${channelId}`,
    { senderId, content });
  return response.data;
}

export const getChatHistory = async (serverId: string, channelId: string) => {
  const response = await apiClient.get('/chat/history/')
}