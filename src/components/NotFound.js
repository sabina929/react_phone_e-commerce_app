import React, { Component } from 'react';

export default class NotFound extends Component {
  render() {
    // console.log(this.props);

    return (
      <div className="container">
          <div className="row">
              <div className="col-10 mx-auto text-center text-title text-uppercase mt-5">
                      <h1 className="text-black">404</h1>
                      <h1 className="text-black">Error</h1>
                      <h2 className="text-black">Page Not Found</h2>
                      <h3>The Requested URL <span className="text-red">{this.props.location.pathname}</span> Was Not Found</h3>
              </div>
          </div>
          
            </div>
    )
  }
}
