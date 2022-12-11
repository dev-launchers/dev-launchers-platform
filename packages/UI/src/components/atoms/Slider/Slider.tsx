import { useState } from 'react';
import Typography from '../Typography';
import {
  Bubble,
  BubbleContainer,
  Container,
  LabelsContainer,
  SliderInput,
  SliderInputContainer,
} from './StyledSlider';
import type { SliderProps } from '.';

export default function Slider({
  min = 0,
  max = 100,
  postfix,
  initialValue = 0,
  onChange,
  withLabels = true,
}: SliderProps) {
  const [value, setValue] = useState(initialValue);

  const handleOnChange = (value: number) => {
    setValue(value);
    onChange(value);
  };

  const getBubblePosition = () => {
    return value > 0 ? Number(((value - min) * 90) / (max - min)) : 0;
  };

  return (
    <Container>
      <BubbleContainer>
        <Bubble newVal={getBubblePosition()}>
          <Typography type="labelSmall">
            {value} {postfix}
          </Typography>
        </Bubble>
      </BubbleContainer>
      <SliderInputContainer>
        <SliderInput
          step={1}
          min={min}
          max={max}
          value={value}
          onChange={({ target }) => handleOnChange(+target.value)}
        />
      </SliderInputContainer>
      {withLabels && (
        <LabelsContainer>
          <Typography type="labelSmall">
            {min} {postfix}
          </Typography>
          {(max - min) % 2 === 0 && (
            <Typography type="labelSmall">
              {min + (max - min) / 2} {postfix}
            </Typography>
          )}
          <Typography type="labelSmall">
            {max} {postfix}
          </Typography>
        </LabelsContainer>
      )}
    </Container>
  );
}
