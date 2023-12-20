import { useDispatch, useSelector } from "react-redux";
import { catFactsState } from "store/redux/catFacts/selectors";
import Button from "components/Button";
import {
  ButtonWrapper,
  CatFactButtonContrainer,
  CatFactsContainer,
  CatFactsElement,
  CatFactsWrapper,
  Paragraph,
} from "./styles";
import {
  catFactsActions,
  getCatFacts,
} from "store/redux/catFacts/catFactsSlice";
import { v4 } from "uuid";

function CatFacts() {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector(catFactsState);

  return (
    <CatFactsWrapper>
      <CatFactsContainer>
        <Button
          name="Get Cat Fact"
          onClick={() => {
            dispatch(getCatFacts() as any);
          }}
          disabled={isLoading}
        />
        {isLoading && <Paragraph>Loading...</Paragraph>}
        {data.length > 0 && (
          <>
            {data.map((catFact) => (
              <CatFactButtonContrainer key={v4()}>
                <CatFactsElement>{catFact.fact}</CatFactsElement>
                <ButtonWrapper>
                  <Button
                    name="Delete fact"
                    onClick={() => {
                      dispatch(catFactsActions.deleteFact(catFact.fact));
                    }}
                  />
                </ButtonWrapper>
              </CatFactButtonContrainer>
            ))}
            <Button
              name="Delete all facts"
              onClick={() => {
                dispatch(catFactsActions.resetCatFactsState());
              }}
            />
          </>
        )}
      </CatFactsContainer>
    </CatFactsWrapper>
  );
}

export default CatFacts;
