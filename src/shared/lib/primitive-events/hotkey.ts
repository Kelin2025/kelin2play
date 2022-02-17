import { createEvent, guard, Unit } from 'effector'

import { keydown } from './core'

type HotkeyParams = {
  code: number
  target?: Unit<any>
}

export const hotkey = (params: HotkeyParams) => {
  const target = params.target ?? createEvent()

  guard({
    clock: keydown,
    filter: (evt) => evt.keyCode === params.code,
    target,
  })

  return target
}
