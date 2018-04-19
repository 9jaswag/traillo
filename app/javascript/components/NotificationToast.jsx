import React from "react"
import PropTypes from "prop-types"
class NotificationToast extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const snackbar = document.getElementById("snackbar");
    snackbar.className = "show";
    setTimeout(() => { snackbar.className = snackbar.className.replace("show", ""); }, 4000);
  }

  render() {
    const type = this.props.type;
    const color = this.props.type == 'error' ? '#cd4242' : '#218838';
    return (
      <React.Fragment>
        <section id="snackbar" style={{ backgroundColor: color }}>{this.props.message}</section>
      </React.Fragment>
    );
  }
}

export default NotificationToast
