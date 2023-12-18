import { useSelector } from "react-redux";
import { CardContainer, CardText, UsersWrapper } from "./styles";
import { usersState } from "store/redux/users/selectors";
import { User } from "store/redux/users/types";

function Users() {
  const users: User[] = useSelector(usersState).users;

  return (
    <UsersWrapper>
      {users.map((user) => {
        return (
          <>
            <CardContainer>
              <CardText>First/Last name: {user.firstLastName}</CardText>
              <CardText>Age: {user.age}</CardText>
              <CardText>Job title: {user.jobTitle}</CardText>
            </CardContainer>
          </>
        );
      })}
    </UsersWrapper>
  );
}

export default Users;
