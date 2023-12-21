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
import { CatFact } from "store/redux/catFacts/types";
import { useEffect } from "react";
import { AppDispatch } from "store/store";

function CatFacts() {
  const dispatch: AppDispatch = useDispatch();
  const { data, isLoading, error } = useSelector(catFactsState);
  useEffect(() => {
    if (!!error) {
      alert("Ошибка сети");
    }
  }, [error]);

  return (
    <CatFactsWrapper>
      <CatFactsContainer>
        <Button
          name="Get Cat Fact"
          onClick={() => {
            dispatch(getCatFacts());
          }}
          disabled={isLoading}
        />
        {isLoading && <Paragraph>Loading...</Paragraph>}
        {data.length > 0 && (
          <>
            {data.map((catFact: CatFact) => (
              <CatFactButtonContrainer key={catFact.id}>
                <CatFactsElement>{catFact.fact}</CatFactsElement>
                <ButtonWrapper>
                  <Button
                    name="Delete fact"
                    onClick={() => {
                      dispatch(catFactsActions.deleteFact(catFact.id));
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
