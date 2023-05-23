import { useEffect, useState } from 'react';
import {
  Bubble,
  BubbleContainer,
  Container,
  LabelsContainer,
  SliderInput,
  SliderInputContainer,
} from './StyledSlider';


export default function Slider({
  min = 0,
  max = 100,
  prefix,
  initialValue = 0,
  onChange,
}) {
  const [value, setValue] = useState(initialValue);

  const handleOnChange = (value) => {
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
            <p>
              <span>{value}</span>
              <span>{prefix}</span>
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
        <LabelsContainer>
          <p>
            {min} {prefix}
          </p>
          {(max - min) % 2 === 0 && (
            <p>
              {min + (max - min) / 2} {prefix}
            </p>
          )}
          <p>
            {max} {prefix}
          </p>
        </LabelsContainer>
      </Container>
  );
}
