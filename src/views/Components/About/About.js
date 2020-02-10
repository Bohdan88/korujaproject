import React from 'react';
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
import about from '../../../assets/about.jpg';
import './style.scss';

const About = () => {
    return (
        <Grid
            id='about'
            className="grid-about"
            divided='vertically'>
            <Grid.Row
                className="row-about"
                columns={2}>
                <Grid.Column
                    className='first-column-about'>
                    <Container
                        fluid
                        className='about-desc'>
                        <Header
                            className='header-about-desc'
                            as='h2'>
                            О НАС
                        </Header>
                        <p
                            className='paragraph-about-desc'
                        >
                            <b>KoRuJa</b> оптовая экспортная компания <br/>
                            профессиональной косметики и <br/>
                            косметологичкеских препаратов из <br/>
                            Ю.Кореи и Японии.
                        </p>

                        <p className='paragraph-about-desc'>
                            Специализация:
                        </p>

                        <List className='list-content-about'
                        >
                            {LIST_DESCRIPTION.ru.map((desc, key) => {
                                return <List.Item key={key}>
                                    <List.Icon
                                        size='large'
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
                    stretched
                    className='second-column-about'>
                    <Image src={about}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default About;
