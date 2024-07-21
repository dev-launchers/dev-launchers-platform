import { useEffect, useState } from 'react';
import {
  Bubble,
  BubbleContainer,
  Container,
  LabelsContainer,
  SliderInput,
  SliderInputContainer,
} from './StyledSlider';

interface Props {
  min: number;
  max: number;
  prefix?: string;
  initialValue?: number;
  onChange: (value: number) => void;
}

export default function Slider({
  min = 0,
  max = 100,
  prefix,
  initialValue = 0,
  onChange,
}: Props) {
  const [value, setValue] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedValue = localStorage.getItem('sliderValue');
      if (savedValue) {
        return parseInt(savedValue, 10);
      } else {
        return initialValue;
      }
    }
  });

  useEffect(() => {
    if (value !== undefined) {
      setIsValueAvailable(true);
      localStorage.setItem('sliderValue', value.toString());
    }
  }, [value]);

  const handleOnChange = (value: number) => {
    setValue(value);
    onChange(value);
  };

  const [isValueAvailable, setIsValueAvailable] = useState(false);

  const getBubblePosition = () => {
    return value > 0 ? Number(((value - min) * 90) / (max - min)) : 0;
  };

  return (
    <Container>
      {isValueAvailable && (
        <BubbleContainer>
          <Bubble newVal={getBubblePosition()}>
            <p>
              <span>{value}</span>
              <span>{prefix}</span>
            </p>
          </Bubble>
        </BubbleContainer>
      )}
      <SliderInputContainer>
        <SliderInput
          step={1}
          min={min}
          max={max}
          value={value}
          onChange={({ target }) => handleOnChange(+target.value)}
        />
      </SliderInputContainer>
      {isValueAvailable && (
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
      )}
    </Container>
  );
}
