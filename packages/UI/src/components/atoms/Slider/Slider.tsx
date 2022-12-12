import { useState } from 'react';
import Box from '../Box';
import { typographyStyles } from '../Typography';

import {
  Bubble,
  BubbleContainer,
  Container,
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
  maxWidth,
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
    <Container maxWidth={maxWidth}>
      <BubbleContainer>
        <Bubble newVal={getBubblePosition()}>
          <p css={typographyStyles['labelSmall']}>
            {value} {postfix}
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
        <Box justifyContent="space-between">
          <p css={typographyStyles['labelSmall']}>
            {value} {postfix}
          </p>
          {(max - min) % 2 === 0 && (
            <p css={typographyStyles['labelSmall']}>
              {min + (max - min) / 2} {postfix}
            </p>
          )}
          <p css={typographyStyles['labelSmall']}>
            {max} {postfix}
          </p>
        </Box>
      )}
    </Container>
  );
}
