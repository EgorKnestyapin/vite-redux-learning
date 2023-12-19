import { useFormik } from "formik";
import Button from "components/Button";
import { HomePageWrapper, UserForm, UserFormName } from "./styles";
import Input from "components/Input";
import { useDispatch } from "react-redux";
import { userActions } from "store/redux/users/usersSlice";

function Home() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstLastName: "",
      age: "",
      jobTitle: "",
    },
    onSubmit: (values) => {
      dispatch(userActions.addUser(values));
    },
  });

  return (
    <HomePageWrapper>
      <UserForm onSubmit={formik.handleSubmit}>
        <UserFormName>Create User</UserFormName>
        <Input
          name="firstLastName"
          value={formik.values.firstLastName}
          labelName="First/Last name"
          onChange={formik.handleChange}
        />
        <Input
          name="age"
          labelName="Age"
          value={formik.values.age}
          onChange={formik.handleChange}
        />
        <Input
          name="jobTitle"
          labelName="Job title"
          value={formik.values.jobTitle}
          onChange={formik.handleChange}
        />
        <Button name="Create" type="submit" />
      </UserForm>
    </HomePageWrapper>
  );
}

export default Home;
