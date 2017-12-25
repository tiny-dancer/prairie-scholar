import * as React from "react";
import Link from "gatsby-link";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { menuItems } from "../layouts";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon
} from "semantic-ui-react";

interface IndexPageProps {
  location: {
    pathname: string;
  };
}

export default (props: IndexPageProps) => (
  <div>
    {/* Master head */}
    <Segment
      vertical
      inverted
      textAlign="center"
      className="masthead"
      style={{
        background:
          'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("/static/prairie-house.jpg"',
        "background-repeat": "no-repeat",
        "background-attachment": "fixed",
        "background-position": "center",
        "background-size": "cover"
      }}
    >
      <HeaderMenu
        Link={Link}
        pathname={props.location.pathname}
        items={menuItems}
        inverted
      />
      <Container text>
        <Header inverted as="h1">
          Prairie Scholor
        </Header>
        <Header inverted as="h2">
          Pioneer Boy to University President
        </Header>
        <Button primary size="huge">
          Learn More
        </Button>
      </Container>
    </Segment>

    {/* About this starter */}
    <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="8">
            <Header>Lorem ipsum</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              laudantium ad, quae, perspiciatis ipsa distinctio.
            </p>
            <Header>Dolor sit amet</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              laudantium ad, quae, perspiciatis ipsa distinctio.
            </p>
          </Grid.Column>
          <Grid.Column width="6" floated="right">
            {/* TODO replace with a pretty GIF */}
            <Header>Lorem ipsum</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              laudantium ad, quae, perspiciatis ipsa distinctio.
            </p>
            <Header>Dolor sit amet</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              laudantium ad, quae, perspiciatis ipsa distinctio.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* Key features */}
    <Segment vertical className="stripe alternate feature">
      <Grid
        columns="3"
        textAlign="center"
        divided
        relaxed
        stackable
        className="container"
      >
        <Grid.Row>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard" />
              A kind of magic!
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              eaque at quae cupiditate aspernatur quibusdam! Distinctio quod
              non, harum dolorum earum molestias, beatae expedita aliquam
              dolorem asperiores nemo amet quaerat.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard" />
              A kind of magic!
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              eaque at quae cupiditate aspernatur quibusdam! Distinctio quod
              non, harum dolorum earum molestias, beatae expedita aliquam
              dolorem asperiores nemo amet quaerat.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard" />
              A kind of magic!
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              eaque at quae cupiditate aspernatur quibusdam! Distinctio quod
              non, harum dolorum earum molestias, beatae expedita aliquam
              dolorem asperiores nemo amet quaerat.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>
);
