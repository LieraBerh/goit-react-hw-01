/* eslint-disable react/prop-types */
import { FriendListItem } from "../FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};
