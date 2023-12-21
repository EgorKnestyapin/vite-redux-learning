import { useDispatch, useSelector } from "react-redux";
import Button from "components/Button";
import { JokeContainer, JokeGeneratorWrapper, Paragraph } from "./styles";
import { jokeGeneratorState } from "store/redux/jokeGenerator/selectors";
import { getJoke } from "store/redux/jokeGenerator/jokeGeneratorSlice";

function JokeGenerator() {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useSelector(jokeGeneratorState);

  return (
    <JokeGeneratorWrapper>
      <JokeContainer>
        <Button
          name="Get Joke"
          onClick={() => {
            // тут будем диспатчить экшн
            dispatch(getJoke() as any);
          }}
        />
        {isLoading && <Paragraph>Loading...</Paragraph>}
        {data && (
          <>
            <Paragraph>{data.setup}</Paragraph>
            <Paragraph>{data.punchline}</Paragraph>
          </>
        )}
        {error && (
          <>
            <Paragraph>Error response</Paragraph>
            <Paragraph>{error}</Paragraph>
          </>
        )}
      </JokeContainer>
    </JokeGeneratorWrapper>
  );
}

export default JokeGenerator;
