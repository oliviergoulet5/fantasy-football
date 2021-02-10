import React from 'react';
import { Field } from 'formik';

type Props = {
    name: string;
    type: 'password' | 'text';
    errorMessage?: string;
};

const titleCase = (str: string) => str.toLowerCase().replace(/\w{3,}/g, (match) => match.replace(/\w/, (m) => m.toUpperCase()));    

function FormField({ name, type, errorMessage }: Props) {
    const labelText = titleCase(name);

    return (
        <>
            <div className={"flex content-end justify-between" + (errorMessage !== undefined && ' ring-red-600')}>
                <label htmlFor={name} className="label">
                    { labelText }
                </label>
                <p className="text-xs text-red-600">{errorMessage}</p>
            </div>
            <Field name={name} type={type} className="input-text" />
        </>
    );
}

export default FormField;
