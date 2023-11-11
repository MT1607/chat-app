import { Fragment } from "react";
import UserCard from "./UserCard";
import { useNavigation } from "@react-navigation/native";

const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const UserList = () => {
  const navigation = useNavigation();
  return (
    <Fragment>
      {users.map((user, index) => (
        <UserCard key={index} navigation={navigation} />
      ))}
    </Fragment>
  );
};

export default UserList;
