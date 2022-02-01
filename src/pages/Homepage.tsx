import React, { Fragment, FC } from 'react'
import { useSelector } from 'react-redux'

import Header from '../components/Header'
import { translate } from '../i18n'
import { RootState } from '../redux-store'



const Homepage: FC = () => {

    const { language } = useSelector((state: RootState) => state.language)

    return (
        <Fragment>
            <Header/>
            <p>{translate('introText', language)}</p>
        </Fragment>
    )
}

export default Homepage;