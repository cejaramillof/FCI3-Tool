import './styles.scss';

import React, { Component } from 'react';
import ProfileComponent from 'patterns/molecules/ProfileComponent';
import { Trans } from 'react-i18next';
import { connect } from 'react-redux';
import Title from 'patterns/atoms/Title';
import QuoteText from 'patterns/molecules/QuoteText';
const i18n = function(key) {
  return <Trans>{key}</Trans>;
};

class HeaderComponent extends Component {
  static defaultProps = {
    username: 'Guest',
    quotes: true,
  };

  render() {
    return (
      <div className="header-content-component">
        <div className={`jumbotron row ${this.props.className}`}>
          <div className="container">
            {this.renderTitle()}
            <QuoteText withQuote={this.props.quotes}>
              {this.getSubTitle()}
            </QuoteText>
          </div>
        </div>
      </div>
    );
  }

  renderTitle() {
    const { showProfile, candidateData } = this.props;
    let Component = null;

    if (showProfile) {
      let renderHeaderItems = [
        <Title priority="1" className="display-4">
          {this.getTitle()}
        </Title>,
        <ProfileComponent user={candidateData.user} />,
      ];

      if (this.props.reverse) {
        renderHeaderItems.reverse();
      }

      Component = (
        <div className="row header-wrapper-title">
          <div className="header--title">{renderHeaderItems[0]}</div>
          <div className="col">{renderHeaderItems[1]}</div>
        </div>
      );
    } else {
      Component = (
        <Title priority="1" className="display-4">
          {this.getTitle()}
        </Title>
      );
    }

    return Component;
  }

  getTitle() {
    const { title, competence } = this.props;
    const titleToRender = title || competence.id;
    return i18n(titleToRender);
  }

  getSubTitle() {
    const { subTitle, competence } = this.props;
    const subTitleToRender = subTitle || competence.description;
    return i18n(subTitleToRender);
  }
}

const mapStateToProps = state => ({
  competence: state.report.competenceSelected,
  candidateData: state.candidate,
  language: state.report.language,
});

export default connect(mapStateToProps)(HeaderComponent);
