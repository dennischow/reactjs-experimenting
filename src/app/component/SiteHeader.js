import React from 'react';


class SiteHeader extends React.Component {

    constructor () {
        super();
    }

    render () {

        return (

            <header className="site-header" role="banner">
                <div className="grid-container grid-full">

                    <div className="site-header__branding" itemScope itemType="http://schema.org/WPHeader">
                        <p className="site-header__branding-logo" itemProp="headline">
                            <a className="site-header__branding-link" href="index.html">Branding</a>
                        </p>
                    </div>

                    <button type="button" className="site-header__menu-trigger ui-btn" data-fc-fn="menu-trigger" title="Click to trigger navigation menu show or hide" role="button" aria-expanded="false" aria-pressed="false">
                        <span className="site-header__menu-trigger-text">Menu</span>
                        <span className="site-header__menu-trigger-icon open">
                            <span className="site-header__menu-trigger-bar"></span>
                            <span className="site-header__menu-trigger-bar"></span>
                            <span className="site-header__menu-trigger-bar"></span>
                        </span>
                    </button>

                    <nav className="site-header__navigation site-header__navigation--large" role="navigation" itemScope itemType="http://schema.org/SiteNavigationElement">
                        <ul className="site-header__navlist site-header__navlist--large" role="menubar">
                            <li className="site-header__navlist-item" role="none">
                                <a className="site-header__navlist-link" href="index.html" title="overview of fat-cow production" role="menuitem" itemProp="url">
                                    <i className="site-header__navlist-icon fa fa-home"></i><span className="site-header__navlist-text" itemProp="name">Home</span>
                                </a>
                            </li>
                            <li className="site-header__navlist-item" role="none">
                                <a className="site-header__navlist-link" href="about.html" title="introduction of dennis" role="menuitem" itemProp="url">
                                    <i className="site-header__navlist-icon fa fa-user"></i><span className="site-header__navlist-text" itemProp="name">About</span>
                                </a>
                            </li>
                            <li className="site-header__navlist-item" role="none">
                                <a className="site-header__navlist-link" href="work.html" title="digital platform to showcase my work samples" role="menuitem" itemProp="url">
                                    <i className="site-header__navlist-icon fa fa-lightbulb-o"></i><span className="site-header__navlist-text" itemProp="name">Work</span>
                                </a>
                            </li>
                            <li className="site-header__navlist-item" role="none">
                                <a className="site-header__navlist-link" href="blog.html" title="what's on my mind" itemProp="url">
                                    <i className="site-header__navlist-icon fa fa-rss"></i><span className="site-header__navlist-text" itemProp="name">Articles</span>
                                </a>
                            </li>
                            <li className="site-header__navlist-item" role="none">
                                <a
                                    className="site-header__navlist-link"
                                    href="#contact"
                                    title="get in touch with me"
                                    role="menuitem"
                                    data-btn-contact>
                                    <i className="site-header__navlist-icon fa fa-envelope-o"></i><span className="site-header__navlist-text">Contact</span>
                                </a>
                            </li>
                            <li className="site-header__navlist-item" role="none">
                                <a
                                    className="site-header__navlist-link"
                                    href="#search"
                                    title="find blog post you enjoy"
                                    role="menuitem"
                                    data-btn-search-blog>
                                    <i className="site-header__navlist-icon fa fa-search"></i><span className="site-header__navlist-text">Search</span>
                                </a>
                            </li>
                        </ul>
                    </nav>

                </div>
            </header>

        );

    }

}

export default SiteHeader;


