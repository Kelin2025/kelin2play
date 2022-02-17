import clsx from 'clsx'
import { useList, useStoreMap } from 'effector-react'

import { $socials, $activeIdx, hovered } from '../model/model'

export const SocialsSelector = () => {
  return (
    <div className="flex">
      {useList($socials, (social, idx) => {
        const Icon = social.icon
        const isActive = useStoreMap({
          store: $activeIdx,
          keys: [idx],
          fn: (activeIdx, [idx]) => activeIdx === idx,
        })

        return (
          <a
            href={social.link}
            target="_blank"
            className={clsx(
              'px-5 py-5',
              // 'border-r border-slate-800/50 last:border-r-0',
              'transition-colors',
              'outline-none',
              isActive && '[color:var(--color)]'
              // isActive && 'drop-shadow-[0_0_6px_var(--color)]'
            )}
            title={social.title}
            onFocus={() => hovered(idx)}
            onMouseOver={() => hovered(idx)}
            // @ts-expect-error React typings don't like CSS variables
            style={{ '--color': social.color }}
          >
            <Icon
              className={clsx(
                'text-4xl',
                'transform transition-transform',
                isActive && 'scale-[1.25]'
              )}
            />
          </a>
        )
      })}
    </div>
  )
}
