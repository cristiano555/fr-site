import React, { Fragment, FC } from 'react'
import { useSelector } from 'react-redux'

import { translate } from '../i18n'
import { RootState } from '../redux-store'


const Contact: FC = () => {

    const { language } = useSelector((state: RootState) => state.language)

    return (
        <Fragment>
            <p>{translate('contactsectionText', language)}</p>
        </Fragment>
    )
}

export default Contact;