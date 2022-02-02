import React, { Fragment, FC } from 'react'
import { useSelector } from 'react-redux'

import { translate } from '../i18n'
import { RootState } from '../redux-store'


const AboutUs: FC = () => {

    const { language } = useSelector((state: RootState) => state.language)

    return (
        <Fragment>
            <p>{translate('aboutUsText', language)}</p>
        </Fragment>
    )
}

export default AboutUs;