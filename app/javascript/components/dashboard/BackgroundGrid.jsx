import React from "react";
import { observer, inject } from "mobx-react";

@inject('store')
@observer export default class BackgroundGrid extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const { Dashboard } = this.props.store;
    Dashboard.backgroundProp['bgImg'] = '';
    Dashboard.backgroundProp['bgColor'] = '';
    const prop = Object.getOwnPropertyNames(this.props)[0];
    Dashboard.backgroundProp[prop] = this.props[prop];
  }

  render() {
    const { bgColor, bgImg } = this.props
    return (<li className="background-grid-item">
      <button className='background-grid-trigger' style={{ backgroundImage: `url(${bgImg})`, backgroundColor: bgColor }} onClick={this.onClick}></button>
    </li>);
  }
}
