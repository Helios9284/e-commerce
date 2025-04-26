import { TELEGRAM_URL, GIT_HUB_URL, TWITTER_URL} from "./urls";
import { PiTelegramLogoLight, PiGithubLogoLight, PiTwitterLogoLight } from "react-icons/pi";

export const useMySocialList = () => {
    const socialList = [
      {
        link: TELEGRAM_URL,
        name: 'Telegram',
        icon: <PiTelegramLogoLight size='1.2em' />,
        id: 1,
      },
      {
        link: GIT_HUB_URL,
        name: 'GitHub',
        icon: <PiGithubLogoLight size='1.2em' />,
        id: 2,
      },
      {
        link: TWITTER_URL,
        name: 'Twitter',
        icon: <PiTwitterLogoLight size='1.2em' />,
        id: 3,
      },
    ]
  
    return { socialList }
  }
  