import { Field } from 'formik';
import { FormFieldProps } from '../../types';
import { FormLabel } from './FormLabel';

export function FormField({ name, type, errorMessage }: FormFieldProps) {
    return (
        <div>
            <FormLabel name={ name } errorMessage={ errorMessage } />
            <Field name={name} type={type} className="input-text" />
        </div>
    );
}
