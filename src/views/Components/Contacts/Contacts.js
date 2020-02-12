import React from 'react';
import './style.css';
import {
    Grid,
    Header,
    Image,
    Form,
    Button
} from 'semantic-ui-react';
import {
    CONTACTS_LINK,
    FORM_CONTENT
} from '../../../constants';

const Contacts = () => {
    return (
        <div id="contacts">
            <Grid>
                    <Grid.Column
                        computer={8}
                        mobile={16}
                        stretched
                    className='contacts-image-column'
                    >
                        <Image
                            className='image-contacts'
                            src={CONTACTS_LINK}
                        />
                    </Grid.Column>
                    <Grid.Column
                        computer={8}
                        mobile={16}
                    >
                        <Header
                            textAlign='center'
                            className='header-contacts'
                            as='h2'>
                            КОНТАКТЫ
                        </Header>
                        <Form
                            className='form-contacts'
                        >

                            {FORM_CONTENT.ru.map((value, key) =>
                                <Form.Field
                                    key={key}
                                    className='form-field-contacts'
                                >
                                    <label>{value}</label>
                                    <input placeholder={value}/>
                                </Form.Field>
                            )}
                            <Form.TextArea
                                    label='ВАШЕ СООБЩЕНИЕ'
                                    placeholder='ВАШЕ СООБЩЕНИЕ' />
                            <Button
                                className='contacts-button'
                                type='submit'>
                                ОТПРАВИТЬ
                            </Button>
                        </Form>
                    </Grid.Column>
            </Grid>
        </div>
    );
};

export default Contacts;
