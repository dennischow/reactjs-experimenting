import React from 'react';

import SiteHeader from '../SiteHeader';
import SiteMain from '../SiteMain';
import SiteFooter from '../SiteFooter';
import SiteStatistics from '../SiteStatistics';

class SiteLayout extends React.Component {

    constructor () {
        super();

        this.state = {
            title: "Branding"
        };

    }

    render () {

        return (

            <div className="page-view">
                <SiteHeader title={this.state.title} />
                <SiteMain />
                <SiteFooter />
                <SiteStatistics />
            </div>

        );

    }

}

export default SiteLayout;