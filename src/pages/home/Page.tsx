import clsx from 'clsx'

import { default as avatarSrc } from './assets/avatar.png'
import { blurred } from './model/model'
import { SocialsSelector } from './ui/SocialsSelector'
import { ActiveSocialDescription } from './ui/ActiveSocialDescription'

import '@/shared/lib/device/core'

export const Page = () => {
  return (
    <div
      className={clsx(
        'flex items-center justify-center text-center',
        'h-full',
        'bg-slate-900 text-white'
      )}
    >
      <div
        className="flex flex-col items-center max-w-full md:max-w-prose px-6 py-14"
        onMouseLeave={blurred}
      >
        <img src={avatarSrc} alt="Тот Самый Келин" className="w-24 hover:animate-spin" />
        <h1 className="mt-8 text-4xl md:text-5xl font-semibold">Тот Самый Келин</h1>
        <h2 className="mt-4 text-xl opacity-50">
          Рассказываю про гейм-дизайн и обозреваю инди-игры
        </h2>
        <div className="mt-7">
          <SocialsSelector />
        </div>
        <div className="mt-3 h-[64px]">
          <ActiveSocialDescription />
        </div>
      </div>
    </div>
  )
}
