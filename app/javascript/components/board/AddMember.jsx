import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer class AddMember extends React.Component {
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
  }

  onChange(event) {
    const { searchUser } = this.props.store.Board;
    this.setState({ [event.target.name]: event.target.value }, () => {
      if (this.state.search_term.length > 1) {
        searchUser(this.state.search_term);
      }
    })
  }

  render() {
    const { searchedUsers } = this.props.store.Board;
    const searchInstruction = <p className="m-0 quiet-text">
      Search for a person in Traillo by name or email address, or enter an email address to invite someone new.
    </p>;
    const searchedUserList = searchedUsers.map(user => (
      <li key={user._source.id} className="search-user">
        <span><img src="https://avatars2.githubusercontent.com/u/8125356?s=460&v=4" alt="" className="member-avatar" width="30" height="30" /></span>
        <span className="pl-1">{user._source.name} ({user._source.username})</span>
      </li>
    ));
    const searchResult = <div>
      <p className="m-0">Select to Add</p>
      <hr className="mt-1" />
      <ul className="create-dropdown-list">
        {searchedUserList}
      </ul>
    </div>;
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
          {searchedUsers.length > 0 ? searchResult : searchInstruction}
        </div>
      </div>
    );
  }
}

export default AddMember;
