import { $screenWidth } from './core'

export const isMinWidth = (width: number) => {
  return $screenWidth.map((screenWidth) => screenWidth >= width)
}

export const isMaxWidth = (width: number) => {
  return $screenWidth.map((screenWidth) => screenWidth <= width)
}
