import FormField from '@devlaunchers/components/src/components/organisms/FormField'

const InputField = ({customLabel, error, label, onChange, placeholder, required,touched, name }) => {
    return (

        <FormField
            error={error}
            label={label}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            touched={touched}
            name={name}
        >

        </FormField>)
}

export default InputField;