
import React, { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
// import 'sweetalert/dist/sweetalert.css';
import {Button} from 'semantic-ui-react';

export class MyAlert extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
    };
  }
  onConfirm() {
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <div>
        <Button basic color="green" onClick={() => this.setState({ show: true })}>Alert</Button>
        <SweetAlert
          success
          show={this.state.show}
          title="WoW"
          animation="slide-from-top"
          onConfirm={this.onConfirm.bind(this)}
        > I did it </SweetAlert>
      </div>
    );
  }
}
