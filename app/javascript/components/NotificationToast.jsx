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
    return (
      <React.Fragment>
        <section id="snackbar" style={{ backgroundColor: '#315989' }}>{this.props.message}</section>
      </React.Fragment>
    );
  }
}

export default NotificationToast
