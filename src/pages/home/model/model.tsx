import { hotkey } from '@/shared/lib/primitive-events'
import { MouseEvent } from 'react'
import { combine, createEvent, createStore, guard } from 'effector'

import { socials } from '../data/socials'

export const blurred = createEvent<MouseEvent | FocusEvent>()
export const hovered = createEvent<number>()

export const $socials = createStore(socials)
export const $activeIdx = createStore(-1).on(hovered, (prev, next) => next)
export const $currentSocial = combine(
  $socials,
  $activeIdx,
  (socials, activeIdx) => socials[activeIdx] ?? null
)

const ARROWS = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
}

const hotkeyNavigation = {
  left: guard({
    clock: hotkey({
      code: ARROWS.LEFT,
    }),
    source: [$activeIdx],
    filter: ([activeIdx]) => activeIdx > 0,
  }),
  right: guard({
    clock: hotkey({ code: ARROWS.RIGHT }),
    source: [$socials, $activeIdx],
    filter: ([socials, activeIdx]) => activeIdx + 1 >= socials.length,
  }),
}

$activeIdx
  .on(hotkeyNavigation.left, (activeIdx) => activeIdx - 1)
  .on(hotkeyNavigation.right, (activeIdx) => activeIdx + 1)
