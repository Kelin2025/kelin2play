import { createEvent } from 'effector'

export const keyup = createEvent<KeyboardEvent>()
export const keydown = createEvent<KeyboardEvent>()
export const keypress = createEvent<KeyboardEvent>()

if (typeof window !== 'undefined') {
  window.addEventListener('keyup', keyup)
  window.addEventListener('keydown', keydown)
  window.addEventListener('keypress', keypress)
}
