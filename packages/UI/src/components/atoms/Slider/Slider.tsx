import { useState } from 'react';
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
    return value > 0 ? (value / max) * 100 : 0;
  };

  return (
    <Container>
      <BubbleContainer>
        <Bubble newVal={getBubblePosition()}>
          <p>
            <span>{value}</span>
            <span>{postfix}</span>
          </p>
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
          <p>
            {min} {postfix}
          </p>
          {(max - min) % 2 === 0 && (
            <p>
              {min + (max - min) / 2} {postfix}
            </p>
          )}
          <p>
            {max} {postfix}
          </p>
        </LabelsContainer>
      )}
    </Container>
  );
}
