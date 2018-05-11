import React from 'react';

class AddMember extends React.Component {
  render() {
    return (
      <div className="mt-1 px-3 py-1">
        <form action="">
          <input className="form-control form-control-sm add-member-search" type="text" placeholder="e.g janedoe@traillo.com" />
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
