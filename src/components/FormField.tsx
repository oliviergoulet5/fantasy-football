import React from 'react';
import { Field } from 'formik';
import { FormFieldProps } from '../types';
import FormLabel from './FormLabel';

function FormField({ name, type, errorMessage }: FormFieldProps) {

    return (
        <>
            <FormLabel name={ name } errorMessage={ errorMessage } />
            <Field name={name} type={type} className="input-text" />
        </>
    );
}

export default FormField;
