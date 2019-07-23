import React, { PureComponent } from 'react';
import { InputField, SelectField } from '../FormField';
import { Field, reduxForm } from 'redux-form'


class RegisterForm extends PureComponent {
    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props;
        const gender = [
            {
                value: '',
                label: 'Select gender',
                active: true,
            },
            {
                value: 'male',
                label: 'Male',
                active: false,
            },
            {
                value: 'female',
                label: 'Female',
                active: false,
            }
        ];
        return (
            <form onSubmit={handleSubmit} className="form-horizontal" >
                <Field name="first-name" type="text" id="first-name" label="First Name" component={InputField} />
                <Field name="last-name" type="text" id="last-name" label="Last Name" component={InputField} />
                <Field name="username" type="text" id="username" label="Username" component={InputField} />
                <Field name="password" type="password" id="password" label="Password" component={InputField} />
                <Field name="password-confirm" type="password" id="password-confirm" label="Password Confirm" component={InputField} />
                <Field name="email" type="email" id="email" label="Email" component={InputField} />
                <Field name="gender"  id="gender" label="Gender" component={SelectField} options={gender} />
                <button type="submit" disbaled={submitting} className="btn btn-primary" value="submit">Submit</button>
                <button type="submit" disbaled={pristine || submitting} className="btn btn-default" value="submit" onClick={reset}>Reset</button>
            </form>
        );
    }
}


export default reduxForm({
    form: 'registerForm'
})(RegisterForm);