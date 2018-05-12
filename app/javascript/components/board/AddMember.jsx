import React from 'react';

class AddMember extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      search_term: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    console.log(this.state.search_term)
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div className="mt-1 px-3 py-1">
        <form action="" onSubmit={this.onSubmit}>
          <input
            className="form-control form-control-sm add-member-search"
            type="text"
            placeholder="e.g janedoe@traillo.com"
            name="search_term"
            value={this.state.search_term}
            onChange={this.onChange}
            required />
        </form>
        <div className="pt-3 pb-2">
          <p className="m-0 quiet-text">
            Search for a person in Traillo by name or email address, or enter an email address to invite someone new.
          </p>
        </div>
      </div>
    );
  }
}

export default AddMember;
