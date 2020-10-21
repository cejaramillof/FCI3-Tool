import React from 'react';
import { mount } from 'enzyme';
import Card from './index';


const wrapper = mount(
  <Card>
    <Card.Image src="http://placehold.it/280x180" alt="placehold" />
    <Card.Body>
      <Card.Title>H5 Example title</Card.Title>
      <Card.Subtitle>H6 Example Subtitle</Card.Subtitle>
      <Card.Text>
        Lorem ipsum dolor sit amet
    </Card.Text>
    </Card.Body>
    <Card.Footer>
      <p>Card footer</p>
    </Card.Footer>
  </Card>
)

it('Should render correctly', () => expect(wrapper).toMatchSnapshot());
