import React from 'react';


class SiteStatistics extends React.Component {

    constructor () {
        super();
    }

    render () {

        return (

            <div className="site-statistics">
                <div className="grid-container grid-full">

                    <div className="site-statistics__col">
                        <div className="site-statistics__box">
                            <p className="site-statistics__content">
                                <span className="site-statistics__num" data-total="34">34</span><span className="site-statistics__text">projects uploaded</span>
                            </p>
                        </div>
                        <div className="site-statistics__box">
                            <p className="site-statistics__content">
                                <span className="site-statistics__num" data-total="185">185</span><span className="site-statistics__text">articles shared</span>
                            </p>
                        </div>
                        <div className="site-statistics__box">
                            <p className="site-statistics__content">
                                <span className="site-statistics__num" data-total="4">4</span><span className="site-statistics__text">testimonials received</span>
                            </p>
                        </div>
                        <div className="site-statistics__box">
                            <p className="site-statistics__content">
                                <span className="site-statistics__num">Infinite</span><span className="site-statistics__text">passion</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        );

    }

}

export default SiteStatistics;


