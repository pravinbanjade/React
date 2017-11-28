import React from 'react';
import {connect} from 'react-redux';
import DropDown from '../views/DropDownMenu/DropDownMenu';

const GraphPage = () => (
  <div>
    <DropDown />
  </div>
);

export default connect(null)(GraphPage);
