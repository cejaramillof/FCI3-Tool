import './styles.scss';

import React, { Component } from 'react';
import Small from 'patterns/atoms/Small';
import Title from 'patterns/atoms/Title';

class ProfileComponent extends Component {
  static defaultProps = {
    showAdditionalInfo: false,
    user: {
      personalData: {
        fullname: 'Guest Full Name',
      },
      applyData: {
        position: 'Glober',
        location: 'World',
      },
    },
  };

  render() {
    let personalData = this.getPersonalData();
    let applyData = this.getApplyData();

    return (
      <div className="profile-component col">
        <Title priority="6">{personalData.fullname}</Title>
        <Small>{applyData.position}</Small>
        <Small>{applyData.location}</Small>
        {this.renderAdditionalInfo(applyData)}
      </div>
    );
  }

  renderAdditionalInfo({ candidateId }) {
    return this.props.showAdditionalInfo ? (
      <div>
        <Small>ID: {candidateId}</Small>
        <hr />
      </div>
    ) : null;
  }

  getPersonalData() {
    return this.props.user.personalData;
  }

  getApplyData() {
    return this.props.user.applyData;
  }
}

export default ProfileComponent;
