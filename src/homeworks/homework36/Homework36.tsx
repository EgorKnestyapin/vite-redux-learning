import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Homework36Wrapper, Paragraph } from "./styles";
import { User } from "./types";
import WeatherButton from "pages/Weather/components/WeatherButton";

function Homework36() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout>();

  const getRandomUser = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const bodyData = await response.json();

    if (!response.ok) {
      alert("Some API Error");
      return;
    }

    setUser({
      firstName: bodyData.results[0].name.first,
      lastName: bodyData.results[0].name.last,
      gender: bodyData.results[0].gender,
      email: bodyData.results[0].email,
      avatar: bodyData.results[0].picture.large,
    });
  };

  useEffect(() => {
    getRandomUser();
    const intervalID: NodeJS.Timeout = setInterval(getRandomUser, 3000);
    setIntervalID(intervalID);
  }, []);

  return (
    <>
      {user && (
        <Homework36Wrapper>
          <img src={user?.avatar} alt="avatar" />
          <Paragraph>First name: {user?.firstName}</Paragraph>
          <Paragraph>Last name: {user?.lastName}</Paragraph>
          <Paragraph>Gender: {user?.gender}</Paragraph>
          <Paragraph>Email: {user?.email}</Paragraph>
          <WeatherButton
            name="Finish randomize"
            isWidth100={true}
            onClick={() => {
              clearInterval(intervalID);
            }}
          />
          <WeatherButton
            name="Start randomize"
            isWidth100={true}
            onClick={() => {
              const intervalID = setInterval(getRandomUser, 3000);
              setIntervalID(intervalID);
            }}
          />
        </Homework36Wrapper>
      )}
    </>
  );
}

export default Homework36;
