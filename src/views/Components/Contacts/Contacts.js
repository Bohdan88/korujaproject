import React from 'react';
import './style.css';
import {
    Grid,
    Image
} from 'semantic-ui-react';
import {
    CONTACTS_LINK
} from '../../../constants';

const Contacts = () => {
    return (
        <div className='contacts-container'>
            <Grid>
                <Grid.Row columns={2} divided>
                    <Grid.Column>
                        <Image
                            className='image-contacts'
                            src={CONTACTS_LINK}/>
                    </Grid.Column>
                    <Grid.Column>
            2
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );

}

export default Contacts;
