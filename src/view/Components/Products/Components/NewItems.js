import React, { useContext, useState } from "react";
import { Card, Accordion, Icon, List } from "semantic-ui-react";
import { Image as CloudImage } from "cloudinary-react";
import { ILLUMA_PUBLIC_ID, CLOUD_NAME } from "../../../../constants";
import LangContext from "../../../../context/LangContext";

const NewItems = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const { newItem } = useContext(LangContext).currentLangData.products;

  return (
    <div>
      <Card fluid>
        <div className="mobile-new-item-image-container">
          <CloudImage
            alt={"iLLUMA"}
            className="mobile-new-item-image"
            cloudName={CLOUD_NAME}
            publicId={ILLUMA_PUBLIC_ID}
          />
        </div>
        <Card.Content className="new-item-content-container">
          <div className="new-item-container-image">
            <CloudImage
              alt={"iLLUMA"}
              className="new-item-image"
              cloudName={CLOUD_NAME}
              publicId={ILLUMA_PUBLIC_ID}
            />
          </div>
          <div className="new-item-content">
            <Card.Header as="h2">iLLUMA PN Booster</Card.Header>
            <Card.Description className="new-item-desc">
              <p className="new-item-paragraph">{newItem.desc}</p>
              <Accordion styled fluid>
                {newItem.accordion.map((listItem, key) => {
                  return (
                    <React.Fragment key={listItem.listTitle}>
                      <Accordion.Title
                        active={activeIndex === key}
                        index={key}
                        onClick={() =>
                          setActiveIndex(key === activeIndex ? -1 : key)
                        }
                      >
                        <Icon name="dropdown" />
                        {listItem.listTitle}
                      </Accordion.Title>
                      <Accordion.Content active={activeIndex === key}>
                        <List className="new-item-list">
                          {listItem &&
                            listItem.list.map((desc, key) => {
                              return (
                                <List.Item key={key}>
                                  <List.Icon
                                    size={
                                      window.innerWidth < 768
                                        ? "small"
                                        : "small"
                                    }
                                    corent="bottom left"
                                    className="about-icon"
                                    name="checkmark"
                                  />
                                  <List.Content>{desc}</List.Content>
                                </List.Item>
                              );
                            })}
                        </List>
                      </Accordion.Content>
                    </React.Fragment>
                  );
                })}
              </Accordion>
            </Card.Description>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default NewItems;
