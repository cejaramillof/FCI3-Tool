import React from 'react';
import { connect } from 'react-redux';
import { signIn } from 'redux/actions/UserActions';
import SingleContentLayout from 'patterns/layouts/SingleContent'
import LogoImage from 'img/talent_app.png';
import Card from 'patterns/molecules/Card';
import Preloader from 'patterns/atoms/Preloader';
import Button from 'patterns/atoms/Button';

const Login = props => {

  const onClick = e => {
    props.signIn({
      name: 'Gabo',
      lastname: 'Martinez',
      email: 'gabo@globant.com',
    })
  }

  return (
    <SingleContentLayout>
      <SingleContentLayout.SmallContent>
        <Card>
          <Card.Header>
            <img src={LogoImage} alt="Logo App" />
          </Card.Header>
          <Card.Body>
            <p>Welcome to Talent App, This app is to provide a competenece qualification to your candidates.</p>
            <Preloader isLoading={props.user.loading}>
              <Button onClick={onClick}>Login</Button>
            </Preloader>
          </Card.Body>
        </Card>
      </SingleContentLayout.SmallContent>
    </SingleContentLayout>
  );
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  signIn: signIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);