import React from 'react';
import { Form, Button, Icon } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  }

  onChange = e => this.setState({
    data: {...this.state.data, [e.target.name]: e.target.value}
  });

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if(Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  };

  validate = (data) => {
    const errors = {};
    if(!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if(!data.password) errors.password = "Can't be Blank";
    return errors;
  }

  render() {

    const {data, errors} = this.state;

    return(
      <Form onSubmit={this.onSubmit}>
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Your Pasword"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>
        <Button animated='vertical' basic color='teal' circular>
          <Button.Content visible>Login</Button.Content>
          <Button.Content hidden>
            <Icon name='sign in' />
            Login
          </Button.Content>
        </Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default LoginForm;
