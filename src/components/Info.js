/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Info extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const info = this.props.info
    return (
      <div className="info-render">
        <div className="name">{info.name}</div>
        <table>
          <tbody>
            <tr>
              <th className="address-label">Address:</th>
              <td className="address-line1">{info.address1}</td>
              <td className="info-blank"></td>
              <th>Email:</th>
              <td>{info.email}</td>
            </tr>
            <tr>
              <td></td>
              <td className="address-line2">{info.address2}</td>
              <td className="info-blank"></td>
              <th>LinkedIn:</th>
              <td>{info.linkedIn}</td>
            </tr>
            <tr>
              <th>Phone:</th>
              <td className="phone">(123) 456-7890</td>
              <td className="info-blank"></td>
              <th className="github">Github:</th>
              <td>{info.gitHub}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Info;