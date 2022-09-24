import { writable } from 'svelte/store'

export const userStore = writable({
  isAuth: false,
  id: 0,
  name: '',
  profile: '',
  role: '',
})
