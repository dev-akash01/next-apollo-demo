import styles from './UserInfoCard.module.css';
import {UserCardTypes} from '../Interface/UserInterface';


const UserInfoCard = (props: UserCardTypes) => {
  const user = props.user
  return (
    <>
    <div className={"card " + styles.cardSpacing} >
      <h5 className="card-header">{user.name}</h5>
      <div className="card-body">
        <p className="card-text"><strong>Email:</strong><a href={"mailto:" + user.email}>{user.email}</a></p>
        <p className="card-text"><strong>Address:</strong> {user.address}</p>
        <p className="card-text"><strong>Phone:</strong><a href={"tel:" + user.phone}>{user.phone}</a></p>
      </div>
    </div>
    </>
  )
}

export default UserInfoCard
