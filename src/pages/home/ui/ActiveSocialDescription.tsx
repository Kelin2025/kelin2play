import { useStore } from 'effector-react'
import { $isTouchDevice } from '../../../shared/lib/device'

import { $currentSocial } from '../model/model'

export const ActiveSocialDescription = () => {
  const currentSocial = useStore($currentSocial)
  const isTouchDevice = useStore($isTouchDevice)

  if (isTouchDevice) {
    return null
  }

  return (currentSocial && <p>{currentSocial.description}</p>) ?? <>{null}</>
}
