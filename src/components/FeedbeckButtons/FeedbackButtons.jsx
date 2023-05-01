import PropTypes from 'prop-types';
import { ButtonBox, BtnElement } from './FeedbackButtons.styled';

const FeedbackBtn = ({ options, onGetFeedback }) => {
  return (
    <ButtonBox>
      {options.map(option => (
        <BtnElement
          key={option}
          type="button"
          onClick={() => onGetFeedback(`${option}`)}
        >
          {option}
        </BtnElement>
      ))}
    </ButtonBox>
  );
};

FeedbackBtn.ProtoTypes = {
  options: PropTypes.array.isRequired,
  onGetFeedback: PropTypes.func.isRequired,
};

export default FeedbackBtn;