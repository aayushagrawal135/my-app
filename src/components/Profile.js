import avatarImage from '../assets/pikachu.png'
import { LoremIpsum } from "react-lorem-ipsum";

function Profile() {
    return (
      <div>
        <Avatar />
        <LoremIpsum p={1} />
      </div>
    );
}

function Avatar() {
    return (
      <div className="avatar">
        <img className="avatar__image" src={avatarImage} alt="Pikachu" />
      </div>
    );
}

export default Profile;
