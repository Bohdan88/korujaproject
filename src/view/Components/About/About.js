import React, { useContext } from "react";
import { Grid, Container, Header, List } from "semantic-ui-react";
import { ABOUT_PUBLIC_ID, CLOUD_NAME } from "../../../constants/";
import { Image as CloudImage } from "cloudinary-react";
import "./style.scss";
import LangContext from "../../../context/LangContext";

const About = () => {
  const { about } = useContext(LangContext).currentLangData;
  return (
    <Grid id="about" className="grid-about" divided="vertically">
      <Grid.Column computer={8} mobile={16} className="first-column-about">
        <Container fluid className="about-desc">
          <Header className="header-about-desc" as="h2">
            {about.header}
          </Header>
          <p className="paragraph-about-desc">
            <b>KoRuJa </b>
            {about.desc}
          </p>

          <p className="paragraph-about-desc">{about.current}</p>

          <p className="paragraph-about-desc">{about.spec}</p>

          <List className="list-content-about">
            {about.list.map((desc, key) => {
              return (
                <List.Item key={key}>
                  <List.Icon
                    size={window.innerWidth < 768 ? "small" : "small"}
                    corent="bottom left"
                    className="about-icon"
                    name="checkmark"
                  />
                  <List.Content>{desc}</List.Content>
                </List.Item>
              );
            })}
          </List>
        </Container>
      </Grid.Column>
      <Grid.Column
        computer={8}
        mobile={16}
        stretched
        className="second-column-about"
      >
        <CloudImage
          alt={"about"}
          className="about-image"
          cloudName={CLOUD_NAME}
          publicId={ABOUT_PUBLIC_ID}
        />
      </Grid.Column>
    </Grid>
  );
};

export default About;
