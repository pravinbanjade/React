import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LoginForm from '../forms/LoginForm';
import {login} from '../../actions/auth';
import { Grid, Header, Message, Segment, Button, Icon } from 'semantic-ui-react'

class LoginPage extends React.Component {
  submit = data => this.props.login(data).then(() => this.props.history.push("/"));

  render() {
    return (
      <div className='login-form'>
        <Grid
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{maxWidth: 450}}> <br />
            <Header as='h2' color='teal' textAlign='center'>
              Login to your account
            </Header>
              <Segment stacked>
                <LoginForm submit={this.submit}/>
              </Segment>
            <Message>
              Don't have Account? <br /><br />
            <Button animated basic color='primary'>
              <Button.Content visible>Sign Up</Button.Content>
              <Button.Content hidden>
                <Icon name='right arrow' />
              </Button.Content>
            </Button>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(null, {login})(LoginPage);
