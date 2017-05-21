import React from 'react';


class SiteFooter extends React.Component {

    constructor () {
        super();
    }

    render () {

        return (

            <footer className="site-footer" role="contentinfo" itemScope itemType="http://schema.org/WPFooter">
                <div className="grid-container grid-full">

                    <div className="site-footer__copyright">
                        <p className="site-footer__text">
                            <small className="site-footer__copyright-info">&copy; 2011-2016 <a className="site-footer__copyright-link" href="index.html">Fat-Cow Production</a></small>
                        </p>
                    </div>
                    <div className="site-footer__social">
                        <ul className="site-footer__social-list">
                            <li className="site-footer__social-item">
                                <a className="site-footer__social-link" href="http://facebook.com/fatcowproduction" target="_blank" title="Facebook open in new window">
                                    <i className="site-footer__social-icon fa fa-facebook"></i><span className="fc-sr-content">Facebook</span>
                                </a>
                            </li>
                            <li className="site-footer__social-item">
                                <a className="site-footer__social-link" href="https://twitter.com/fatcowdesign" target="_blank" title="Twitter open in new window">
                                    <i className="site-footer__social-icon fa fa-twitter"></i><span className="fc-sr-content">Twitte</span>
                                </a>
                            </li>
                            <li className="site-footer__social-item">
                                <a className="site-footer__social-link" href="https://www.behance.net/fatcow" target="_blank" title="Behance open in new window">
                                    <i className="site-footer__social-icon fa fa-behance"></i><span className="fc-sr-content">Behance</span>
                                </a>
                            </li>
                            <li className="site-footer__social-item">
                                <a className="site-footer__social-link" href="http://codepen.io/dennischow/" target="_blank" title="CodePen open in new window">
                                    <i className="site-footer__social-icon fa fa-codepen"></i><span className="fc-sr-content">CodePen</span>
                                </a>
                            </li>
                            <li className="site-footer__social-item">
                                <a className="site-footer__social-link" href="http://fat-cow.net/index.php/feed/" target="_blank" title="RSS Feed open in new window">
                                    <i className="site-footer__social-icon fa fa-rss"></i><span className="fc-sr-content">RSS Feed</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="site-footer__remark">
                        <p className="site-footer__text">
                            <span className="fc-sr-content">code and design both are </span>Handcrafted by <a className="site-footer__remark-link" href="about.html" title="learn more about dennis chow">Dennis Chow</a>
                        </p>
                    </div>
                    <button className="site-footer__scroll-to-up ui-btn" data-fc-fn="scroll-to-top" title="Click here scroll to top">Scroll to top <i className="site-footer__scroll-to-up-icon fa fa-chevron-up"></i></button>

                </div>
            </footer>

        );

    }

}

export default SiteFooter;


