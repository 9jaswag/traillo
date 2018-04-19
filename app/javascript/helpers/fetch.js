export default (endpoint, method, params) => {
  const hostUrl = `${window.location.protocol}//${window.location.host}`;
  const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  const makeRequest = () => {
    return fetch(`${hostUrl}/${endpoint}`, {
      body: JSON.stringify(params),
      credentials: 'same-origin',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: method
    })
      .then(response => response.json())
      .then((responseData) => {
        return responseData;
      })
  };

  return makeRequest();
};

// const token = $('meta[name="csrf-token"]').attr('content');
// $.ajax({
//   url: `${hostUrl}/api/signup`,
//   type: 'post',
//   beforeSend: function (xhr) {
//     xhr.setRequestHeader('X-CSRF-Token', token)
//   },
//   data: userData,
//   contentType: false,
//   processData: false
// });
