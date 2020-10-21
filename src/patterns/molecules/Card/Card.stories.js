import React from 'react';
import { withKnobs, text } from "@storybook/addon-knobs";
import centered from '@storybook/addon-centered/react';
import SingleContentLayout from 'patterns/layouts/SingleContent';
import Card from './index';
import readme from './readme.md';
import 'index.scss';


export default {
  title: 'Molecules/Card ',
  parameters: {
    notes: readme,
  },
  component: Card,
  decorators: [withKnobs, centered]
};

export const Overall = () => (
  <SingleContentLayout>
    <SingleContentLayout.SmallContent>

      <Card>
        <Card.Image src={text('Card.Image src', 'http://placehold.it/280x180')} alt="placehold" />
        <Card.Body>
          <Card.Title>{text('<Card.Title> children', 'H5 Example title')}</Card.Title>
          <Card.Subtitle>{text('<Card.Subtitle> children', 'H6 Example Subtitle')}</Card.Subtitle>
          <Card.Text>
            {text("<Card.Text> children", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in elit condimentum, imperdiet quam quis, pulvinar orci. Ut leo nunc, tempus at feugiat sit amet, ullamcorper nec magna. Morbi interdum mi arcu, vel faucibus eros congue ut. Nunc in tellus non risus tempus euismod ac in nisl")}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <p>{text("<Card.Footer> children", "Card footer")}</p>
        </Card.Footer>
      </Card>


    </SingleContentLayout.SmallContent>
  </SingleContentLayout>
);

export const Header = () => (
  <SingleContentLayout>
    <SingleContentLayout.SmallContent>

      <Card>
        <Card.Header>
          {text('<Card.Header> children', 'Place you card header')}
        </Card.Header>
        <Card.Body>
          <Card.Text><br />
            Quick example to add Header on the top of the Card using Card.Header
          </Card.Text>
        </Card.Body>
      </Card>


    </SingleContentLayout.SmallContent>
  </SingleContentLayout>
);
export const Titles = () => (
  <SingleContentLayout>
    <SingleContentLayout.SmallContent>

      <Card>
        <Card.Body>
          <Card.Title>{text('<Card.Title> children', 'H5 Example title')}</Card.Title>
          <Card.Subtitle>{text('<Card.Subtitle> children', 'H6 Example Subtitle')}</Card.Subtitle>
          <Card.Text><br />
            Quick example to add Title on the top of the body using Card.Title <br /><br />
            Quick example to add Subtitle on the top of the body using Card.Subtitle
          </Card.Text>
        </Card.Body>
      </Card>


    </SingleContentLayout.SmallContent>
  </SingleContentLayout>
);

export const Image = () => (
  <SingleContentLayout>
    <SingleContentLayout.SmallContent>
      <Card>
        <Card.Image src={text('Card.Image src', 'http://placehold.it/280x180')} alt="placehold" />
        <Card.Body>
          <Card.Text>
            Quick example to add image on the top using Card.Image to place a image in the top.
          </Card.Text>
        </Card.Body>
      </Card>
    </SingleContentLayout.SmallContent>
  </SingleContentLayout>
);


export const Footer = () => (
  <SingleContentLayout>
    <SingleContentLayout.SmallContent>
      <Card>
        <Card.Body>
          <Card.Text>Quick example to add Footer on the top of the body using Card.Footer</Card.Text>
        </Card.Body>
        <Card.Footer>
          <p>{text("<Card.Footer> children", "Card footer")}</p>
        </Card.Footer>
      </Card>
    </SingleContentLayout.SmallContent>
  </SingleContentLayout>
);
