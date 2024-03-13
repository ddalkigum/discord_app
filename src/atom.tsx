import { atom } from 'recoil';

export const userHandler = atom({
  key: 'user',
  default: {
    id: '',
    email: '',
    nickname: '',
    createdAt: null
  }
})

export const modalHandler = atom({
  key: 'modal',
  default: {
    password: false,
    signup: false,
    createServer: false,
    findUser: false,
  }
})

export const serverHandler = atom({
  key: 'server',
  default: [],
})
