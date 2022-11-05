import './index.scss';
import Profile from '../../../assets/images/profile.png'

const ProfilePicture = () => {

  return (
    <div className='profile-picture-container'>
      <img className='profile-picture' src={Profile} alt="Profile" />
    </div>
  )
}

export default ProfilePicture