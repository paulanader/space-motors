import { FieldHookConfig, useField, ErrorMessage } from 'formik';
import { useMemo } from 'react';
import InputMask from 'react-input-mask';

interface ITextFieldProps {
    label: string;
    maxLength?: number;
    placeholder?: string;
    mask?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<
    ITextFieldProps & FieldHookConfig<string>
> = props => {
    const [field, meta] = useField(props);

    const fieldProps = useMemo(
        () => ({
            className: `form-control shadow-none text-white ${
                meta.touched && meta.error && 'is-invalid'
            }`,
            autoComplete: 'off',
            ...field,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                props.onChange?.(e);
                field.onChange(e);
            },
            maxLength: props.maxLength,
            placeholder: props.placeholder,
        }),
        [field, meta.error, meta.touched, props]
    );

    return (
        <div className="mb-4">
            <label htmlFor={field.name} className="mb-2 fs-6 text-light-gray">
                {props.label}
            </label>
            <InputMask mask={props.mask ? props.mask : ''} {...fieldProps} />
            <ErrorMessage component="div" name={field.name} className="error" />
        </div>
    );
};

export default TextField;
