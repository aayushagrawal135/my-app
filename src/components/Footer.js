import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__right">
            <SocialIconsGroup />
          </div>
          <div className="footer__left">
            <p>
              &copy; {new Date().getFullYear()} Your Blog Name. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    );
}

function SocialIconsGroup() {

    const socials = {
      LinkedIn: "https://www.linkedin.com/in/aayush-agrawal-8b8a7a108",
      Github: "https://github.com/aayushagrawal135",
    };

    const socialIcon = (hyperlink, icon) => {
        return (
          <a href={hyperlink} target="_blank" rel="noreferrer">
            {icon}
          </a>
        );
    }

    return (
      <div>
        {socialIcon(socials["LinkedIn"], <FaLinkedin size={28}/>)}
        {socialIcon(socials["Github"], <FaGithub size={28}/>)}
      </div>
    );
}

export default Footer;
