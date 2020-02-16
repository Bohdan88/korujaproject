import React, {useContext} from 'react';
import {
    Grid,
    Image,
    Container,
    Header,
    List
} from 'semantic-ui-react';
import {
    LIST_DESCRIPTION
} from '../../../constants/';
import aboutImg from '../../../assets/about.jpg';
import './style.scss';
import LangContext from '../../../context/LangContext';

const About = () => {
    const {about} = useContext(LangContext).currentLangData;
    return (
        <Grid
            id='about'
            className="grid-about"
            divided='vertically'>
            <Grid.Column
                computer={8}
                mobile={16}
                className='first-column-about'>
                <Container
                    fluid
                    className='about-desc'>
                    <Header
                        className='header-about-desc'
                        as='h2'>
                        {about.header}
                    </Header>
                    <p
                        className='paragraph-about-desc'
                    >
                        <b>KoRuJa </b>{about.desc}
                    </p>

                    <p className='paragraph-about-desc'>
                        {about.spec}
                    </p>

                    <List className='list-content-about'
                    >
                        {about.list.map((desc, key) => {
                            return <List.Item key={key}>
                                <List.Icon
                                    size={window.innerWidth < 768 ? 'small' : 'small'}
                                    corent='bottom left'
                                    className="about-icon"
                                    name='checkmark'
                                />
                                <List.Content
                                >
                                    {desc}
                                </List.Content>
                            </List.Item>
                        })}
                    </List>
                </Container>


            </Grid.Column>
            <Grid.Column
                computer={8}
                mobile={16}
                stretched
                className='second-column-about'>
                <Image src={aboutImg}/>
            </Grid.Column>
        </Grid>
    );
};

export default About;
