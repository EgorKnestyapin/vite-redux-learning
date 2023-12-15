import { useDispatch, useSelector } from "react-redux";
import {
  DislikeContainer,
  DislikeCounter,
  DislikeImg,
  FeedbackWrapper,
  LikeContainer,
  LikeCounter,
  LikeImg,
} from "./styles";
import { LikeIcon, DislikeIcon } from "assets";
import { feedbackState } from "store/redux/feedback/selectors";
import Button from "components/Button";
import { actions } from "store/redux/feedback/feedbackSlice";

function Feedback() {
  const dispatch = useDispatch();
  const likeDislikeState = useSelector(feedbackState);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <FeedbackWrapper>
        <LikeContainer>
          <LikeImg
            src={LikeIcon}
            alt="like"
            onClick={() => dispatch(actions.plusLike())}
          />
          <LikeCounter>{likeDislikeState.likesCount}</LikeCounter>
        </LikeContainer>
        <DislikeContainer>
          <DislikeImg
            src={DislikeIcon}
            alt="dislike"
            onClick={() => dispatch(actions.plusDislike())}
          />
          <DislikeCounter>{likeDislikeState.dislikesCount}</DislikeCounter>
        </DislikeContainer>
        <Button
          name="Reset results"
          onClick={() => dispatch(actions.resetResults())}
        />
      </FeedbackWrapper>
    </div>
  );
}

export default Feedback;
