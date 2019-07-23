import React, { PureComponent } from 'react';
import RegisterForm from '../../components/RegisterForm';

class Register extends PureComponent {
    onSubmitHandle = (value) => {
        console.log(value);
    }
    render() {
        return (
            <div>
                <RegisterForm handleSubmit={this.onSubmitHandle} />
            </div>
        );
    }
}

Register.propTypes = {

};

export default Register;