**Molecules**

# Card


A Card is a flexible and extensible content container. It includes options for Headers, Body, Titles, Subtitle, Text and Footers.

#### **Basic Example**

```jsx 
import Card from 'patterns/molecules/Card';

<Card>
  <Card.Body>
    Place your Card body
  </Card.Body>
</Card>
```


#### **Overall**

```jsx 
import Card from 'patterns/molecules/Card';

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
```

#### **Header**

```jsx 
import Card from 'patterns/molecules/Card';

<Card>
  <Card.Header>
    Place your Header
  </Card.Header>
</Card>
```

#### **Titles**

```jsx 
import Card from 'patterns/molecules/Card';

<Card>
  <Card.Body>
    <Card.Title>Place your Title</Card.Title>
    <Card.Subtitle>Place your Subtitle</Card.Subtitle>
  </Card.Body>
</Card>
```

#### **Image**

```jsx 
import Card from 'patterns/molecules/Card';

<Card>
  <Card.Image src="http://placehold.it/280x180" alt="placehold" />
</Card>
```

#### **Footer**

```jsx 
import Card from 'patterns/molecules/Card';

<Card>
  <Card.Footer>Place your Footer</Card.Footer>
</Card>
```