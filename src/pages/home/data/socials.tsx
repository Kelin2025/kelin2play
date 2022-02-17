import { ReactComponent as DiscordIcon } from '../assets/discord.svg'
import { ReactComponent as DonateIcon } from '../assets/donate.svg'
import { ReactComponent as EmailIcon } from '../assets/email.svg'
import { ReactComponent as TelegramIcon } from '../assets/telegram.svg'
import { ReactComponent as TwitchIcon } from '../assets/twitch.svg'
import { ReactComponent as YoutubeIcon } from '../assets/youtube.svg'

export const socials = [
  {
    icon: YoutubeIcon,
    color: 'red',
    link: 'https://kelin2025.me/youtube',
    title: 'YouTube - Тот Самый Келин',
    description: (
      <>
        <b>YouTube-канал</b> с критическими обзорами инди-игр <br />и видео на тему гейм-дизайна
      </>
    ),
  },
  {
    icon: TelegramIcon,
    color: '#229ed9',
    link: 'https://kelin2025.me/telegram',
    title: 'Telegram - Тот Самый Келин',
    description: (
      <>
        <b>Telegram-канал</b> с текстовым форматом, где я пишу микрообзоры, мнения на различные темы
        и распространённые заблуждения, которые встречаю по мере своей деятельности
      </>
    ),
  },
  {
    icon: DiscordIcon,
    color: '#5c6bc0',
    link: 'https://kelin2025.me/discord',
    title: 'Discord - Тот Самый Келин',
    description: (
      <>
        <b>Discord-сервер</b> с нашим активным комьюнити.
        <br />А ещё там есть Тот Самый Клуб!
      </>
    ),
  },
  {
    icon: TwitchIcon,
    color: '#9e57f9',
    link: 'https://kelin2025.me/twitch',
    title: 'Twitch - Тот Самый Келин',
    description: (
      <>
        <b>Twitch-канал</b>, к которому я, возможно, когда-нибудь вернусь ¯\_(ツ)_/¯
      </>
    ),
  },
  {
    icon: EmailIcon,
    color: '#fcd34d',
    link: 'mailto:kelin2025@yandex.ru',
    title: 'Для деловых предложений - Тот Самый Келин',
    description: (
      <>
        Для деловых предложений:{' '}
        <a
          href="mailto:kelin2025@yandex.ru"
          target="_blank"
          rel="nofollow"
          className="text-pink-500 font-semibold underline"
        >
          <span className="select-all">kelin2025@yandex.ru</span>
        </a>
      </>
    ),
  },
  {
    icon: DonateIcon,
    color: '#84cc16',
    link: 'https://kelin2025.me/donate',
    title: 'Поддержать Того Самого Келина',
    description: (
      <>
        Поддержать рублём можно{' '}
        <a
          href="https://kelin2025.me/donate"
          target="_blank"
          title="Поддержать Того Самого Келина"
          className="text-pink-500 font-semibold underline"
        >
          по этой ссылке
        </a>
      </>
    ),
  },
]
