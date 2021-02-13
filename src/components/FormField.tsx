import React from 'react';
import { Field } from 'formik';
import toTitleCase from '../utils/toTitleCase';

type Props = {
    name: string;
    type: 'password' | 'text';
    errorMessage?: string;
};

function FormField({ name, type, errorMessage }: Props) {
    const labelText = toTitleCase(name);

    return (
        <>
            <div
                className={
                    'flex content-end justify-between' +
                    (errorMessage !== undefined && ' ring-red-600')
                }
            >
                <label htmlFor={name} className="label">
                    {labelText}
                </label>
                <p className="text-xs text-red-600">{errorMessage}</p>
            </div>
            <Field name={name} type={type} className="input-text" />
        </>
    );
}

export default FormField;
