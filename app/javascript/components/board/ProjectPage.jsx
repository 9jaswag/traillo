import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import InternalHeader from '../dashboard/InternalHeader';

@inject('store')
@observer class ProjectPage extends Component {
  render() {
    return (
      <InternalHeader />
    );
  }
};

export default ProjectPage;

