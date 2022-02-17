import { createEvent, createStore } from 'effector'

const isTouchDevice = () => {
  return typeof window !== 'undefined' ? window.matchMedia('(pointer: coarse)').matches : false
}

export const resized = createEvent<Event>()

export const $screenWidth = createStore(1920)
export const $isTouchDevice = createStore(isTouchDevice())

export const $isMouseDevice = $isTouchDevice.map((isTouchDevice) => !isTouchDevice)

$screenWidth.on(resized, (prev, evt) => (evt.target as Window).document.body.clientWidth)

$isTouchDevice.on(resized, () => isTouchDevice())

if (typeof window !== 'undefined') {
  window.addEventListener('resize', resized)
}
