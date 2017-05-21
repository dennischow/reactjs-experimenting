import React from 'react';

import SiteHeader from './SiteHeader';
import SiteMain from './SiteMain';
import SiteFooter from './SiteFooter';
import SiteStatistics from './SiteStatistics';

class SiteLayout extends React.Component {

    constructor () {
        super();
    }

    render () {

        return (

            <div className="page-view">
                <SiteHeader />
                <SiteMain />
                <SiteFooter />
                <SiteStatistics />
            </div>

        );

    }

}

export default SiteLayout;