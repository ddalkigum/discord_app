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

export const createChatRoomResponse = async (userId: string, participantId: string) => {
  const response = await apiClient.post('/chat/room', {
    userId, participantId
  })

  return response.data;
}

export const getChatRoomListResponse = async (userId: string) => {
  const response = await apiClient.get('/chat/room');
  return response.data;
}

export const getChatHistory = async (roomId: string) => {
  const response = await apiClient.get(`/chat/connect/${roomId}`)
  return response.data;
}

export const disconnectChatRoom = async (roomId: string) => {
  const response = await apiClient.get(`/chat/disconnect/${roomId}`);
  return response.data;
}

export const sendMessageToRoom = async (roomId: string, content: string) => {
  const response = await apiClient.post(`/chat/room/send/${roomId}`, {
    content
  })
  return response.data;
}