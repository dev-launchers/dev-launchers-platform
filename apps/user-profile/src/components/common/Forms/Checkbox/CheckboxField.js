import Checkbox from '@devlaunchers/components/src/components/atoms/Checkbox'
import { CheckboxContainer } from './StyledCheckboxField';
const InputField = ({ customLabel, label, onChange, required, checked, children }) => {
    return (
        <CheckboxContainer>
            <Checkbox
                label={customLabel}
                onChange={onChange}
                required={required}
                checked={checked}
            />
        </CheckboxContainer>

    )
}

export default InputField;