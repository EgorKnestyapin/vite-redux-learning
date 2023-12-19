import { useDispatch, useSelector } from "react-redux";
import { CardContainer, CardText, UsersWrapper } from "./styles";
import { usersState } from "store/redux/users/selectors";
import { User } from "store/redux/users/types";
import { v4 } from "uuid";
import Button from "components/Button";
import { userActions } from "store/redux/users/usersSlice";

function Users() {
  const users: User[] = useSelector(usersState).users;
  const dispatch = useDispatch();

  return (
    <UsersWrapper>
      {users.map((user: User) => {
        return (
          <CardContainer key={v4()}>
            <CardText>First/Last name: {user.firstLastName}</CardText>
            <CardText>Age: {user.age}</CardText>
            <CardText>Job title: {user.jobTitle}</CardText>
            <Button
              name="Delete User"
              type="button"
              onClick={() => {
                dispatch(userActions.deleteUser(user.id));
              }}
            />
          </CardContainer>
        );
      })}
      {users.length > 0 && (
        <Button
          name="Delete all users"
          onClick={() => {
            dispatch(userActions.deleteAllUsers());
          }}
        />
      )}
    </UsersWrapper>
  );
}

export default Users;
