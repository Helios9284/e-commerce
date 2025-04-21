import { TELEGRAM_URL, GIT_HUB_URL, TWITTER_URL} from "./urls";
import { FaTelegramPlane, FaGithubAlt, FaTwitter } from "react-icons/fa";

export const useMySocialList = () => {
    const socialList = [
      {
        link: TELEGRAM_URL,
        name: 'Telegram',
        icon: <FaTelegramPlane size='1.2em' />,
        id: 1,
      },
      {
        link: GIT_HUB_URL,
        name: 'GitHub',
        icon: <FaGithubAlt size='1.2em' />,
        id: 2,
      },
      {
        link: TWITTER_URL,
        name: 'Twitter',
        icon: <FaTwitter size='1.2em' />,
        id: 3,
      },
    ]
  
    return { socialList }
  }
  