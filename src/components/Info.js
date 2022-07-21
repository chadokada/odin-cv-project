import React, { Component } from 'react';

class Info extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="info">
        <div className="name">John Doe</div>
        <table>
          <tbody>
            <tr>
              <th className="address-label">Address:</th>
              <td className="address-line1">123 Main Street</td>
              <td className="info-blank"></td>
              <th>Email:</th>
              <td>johndoe@email.com</td>
            </tr>
            <tr>
              <td></td>
              <td className="address-line2">Anytown, HI 96817</td>
              <td className="info-blank"></td>
              <th>LinkedIn:</th>
              <td>johndoe123</td>
            </tr>
            <tr>
              <th>Phone:</th>
              <td className="phone">(123) 456-7890</td>
              <td className="info-blank"></td>
              <th className="github">Github:</th>
              <td>johndoe123</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Info;