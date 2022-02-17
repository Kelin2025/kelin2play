import { useStore } from 'effector-react'

import { $currentSocial } from '../model/model'

export const ActiveSocialDescription = () => {
  const currentSocial = useStore($currentSocial)

  return (currentSocial && <p>{currentSocial.description}</p>) ?? <>{null}</>
}
