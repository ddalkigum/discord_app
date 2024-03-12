import { atom } from 'recoil';

export const passwordModalHandler = atom({
  key: 'passwordModalActive',
  default: false,
})

export const signupModalHandler = atom({
  key: 'signupModalActive',
  default: false,
})

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
  }
})