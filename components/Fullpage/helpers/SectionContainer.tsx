import React, { Component, Children, cloneElement } from 'react';

type MyState = {
    activeSection?: number;
    scrollingStarted?: boolean;
    sectionScrolledPosition?: number;
    windowHeight?: number;
};

type MyProps = {
    scrollCallback?: (state: MyState) => void;
    delay?: number;
    verticalAlign?: boolean;
    scrollBar?: boolean;
    navigation?: boolean;
    className?: string;
    sectionClassName?: string;
    navigationClass?: string;
    navigationAnchorClass?: string;
    activeClass?: string;
    sectionPaddingTop?: string;
    sectionPaddingBottom?: string;
    arrowNavigation?: boolean;
    activeSection?: number;
    touchNavigation?: boolean;
    anchors?: string[];
    children?: any;
};

class SectionContainer extends Component<MyProps, MyState> {

    static defaultProps = {
        scrollCallback: null,
        delay: 1000,
        verticalAlign: false,
        scrollBar: false,
        navigation: true,
        className: 'SectionContainer',
        sectionClassName: 'Section',
        anchors: [],
        activeClass: 'active',
        sectionPaddingTop: '0',
        sectionPaddingBottom: '0',
        arrowNavigation: true,
        activeSection: 0,
        touchNavigation: true
    }

    state = {
        activeSection: this.props.activeSection,
        scrollingStarted: false,
        sectionScrolledPosition: 0,
        windowHeight: 0
    };

    resetScrollTimer;
    childrenLength;
    mediaQuery;

    componentWillUnmount() {
        this.clearResetScrollTimer();
        this.removeDefaultEventListeners();
        this.removeMouseWheelEventHandlers();
        this.removeOverflowFromBody();
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.mediaQuery = window.matchMedia('(max-width: 768px)');
        this.childrenLength = this.props.children.length;

        this.handleResize();
        window.addEventListener('resize', this.handleResize);

        if (!this.props.scrollBar) {
            this.addCSS3Scroll();
            this.handleAnchor();

            window.addEventListener('hashchange', this.handleAnchor, false);

            if (this.props.arrowNavigation) {
                window.addEventListener('keydown', this.handleArrowKeys);
            }

            if (this.props.touchNavigation) {
                this.handleTouchNav();
            }
        }
    }

    // getDerivedStateFromProps(nextProps) {
    //     console.log(this)
    //     if (this.props.activeSection !== nextProps.activeSection) {
    //         this.setState({ activeSection: nextProps.activeSection });
    //         this.setAnchor(nextProps.activeSection);
    //         this.handleSectionTransition(nextProps.activeSection);
    //         this.addActiveClass();
    //     }
    // }

    removeDefaultEventListeners = () => {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('hashchange', this.handleAnchor);

        if (this.props.arrowNavigation) {
            window.removeEventListener('keydown', this.handleArrowKeys);
        }
    }

    addCSS3Scroll = () => {
        this.addOverflowToBody();
        this.addMouseWheelEventHandlers();
    }

    addActiveClass = () => {
        this.removeActiveClass();

        const hash = window.location.hash.substring(1);
        const activeLinks = document.querySelectorAll(`a[href="#${hash}"]`);

        for (let i = 0; i < activeLinks.length; i++) {
            activeLinks[i].className =
                activeLinks[i].className +
                (activeLinks[i].className.length > 0 ? ' ' : '') +
                `${this.props.activeClass}`;
        }
    }

    removeActiveClass = () => {
        const activeLinks = document.querySelectorAll(
            `a:not([href="#${this.props.anchors[this.state.activeSection]}"])`
        );

        for (let i = 0; i < activeLinks.length; i++) {
            activeLinks[i].className = activeLinks[i].className.replace(
                /\b ?active/g,
                ''
            );
        }
    }

    addChildrenWithAnchorId = () => {
        let index = 0;

        return Children.map(this.props.children, (child: React.ReactElement) => {
            const id = this.props.anchors[index];

            index++;

            if (id) {
                return cloneElement(child, {
                    id: id
                });
            } else {
                return child;
            }
        });
    }

    addOverflowToBody = () => {
        document.querySelector('body').style.overflow = 'hidden';
    }

    removeOverflowFromBody = () => {
        document.querySelector('body').style.overflow = 'initial';
    }

    addMouseWheelEventHandlers = () => {
        window.addEventListener('mousewheel', this.handleMouseWheel, false);
        window.addEventListener('DOMMouseScroll', this.handleMouseWheel, false);
    }

    removeMouseWheelEventHandlers = () => {
        window.removeEventListener('mousewheel', this.handleMouseWheel);
        window.removeEventListener('DOMMouseScroll', this.handleMouseWheel);
    }

    handleMouseWheel = event => {
        const e = window.event || event;
        const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
        const activeSection = this.state.activeSection - delta;

        if (
            this.state.scrollingStarted ||
            activeSection < 0 ||
            this.childrenLength === activeSection
        ) {
            return false;
        }

        this.setAnchor(activeSection);
        this.handleSectionTransition(activeSection);
        this.addActiveClass();
    }

    handleResize = () => {
        const position = 0 - this.state.activeSection * window.innerHeight;

        this.setState({
            scrollingStarted: true,
            windowHeight: window.innerHeight,
            sectionScrolledPosition: position
        });

        this.resetScroll();
    }

    handleSectionTransition = (index: number) => {
        const position = 0 - index * this.state.windowHeight;

        if (
            !this.props.anchors.length ||
            index === -1 ||
            index >= this.props.anchors.length
        ) {
            return false;
        }

        this.setState({
            scrollingStarted: true,
            activeSection: index,
            sectionScrolledPosition: position
        });

        this.resetScroll();
        this.handleScrollCallback();
    }

    handleArrowKeys = (e) => {
        const event = window.event ? window.event : e;
        const activeSection =
            event.keyCode === 38 || event.keyCode === 37
                ? this.state.activeSection - 1
                : event.keyCode === 40 || event.keyCode === 39
                    ? this.state.activeSection + 1
                    : -1;

        if (
            this.state.scrollingStarted ||
            activeSection < 0 ||
            this.childrenLength === activeSection
        ) {
            return false;
        }

        this.setAnchor(activeSection);
        this.handleSectionTransition(activeSection);
        this.addActiveClass();
    }

    handleTouchNav = () => {
        const that = this;

        const touchsurface = document.querySelector('.' + this.props.className);
        let swipedir,
            startX,
            startY,
            dist,
            distX,
            distY;
            const threshold = 50;
            const restraint = 100;
            const allowedTime = 1000;
            let elapsedTime,
            startTime;
            // const handleswipe = function (swipedir) {
            //     console.log(swipedir);
            // };

        touchsurface.addEventListener(
            'touchstart',
            function (e: any) {
                const touchobj = e.changedTouches[0];
                swipedir = 'none';
                dist = 0;
                startX = touchobj.pageX;
                startY = touchobj.pageY;
                startTime = new Date().getTime();

            },
            false
        );

        touchsurface.addEventListener(
            'touchmove',
            function (e) {
                e.preventDefault();
            },
            false
        );

        touchsurface.addEventListener(
            'touchend',
            function (e: any) {
                const touchobj = e.changedTouches[0];
                distX = touchobj.pageX - startX;
                distY = touchobj.pageY - startY;
                elapsedTime = new Date().getTime() - startTime;
                if (elapsedTime <= allowedTime) {

                    if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {

                        swipedir = distY < 0 ? 'up' : 'down';
                        const direction =
                            swipedir === 'down'
                                ? that.state.activeSection - 1
                                : swipedir === 'up'
                                    ? that.state.activeSection + 1
                                    : -1;
                        const hash = that.props.anchors[direction];

                        if (!that.props.anchors.length || hash) {
                            window.location.hash = '#' + hash;
                        }

                        that.handleSectionTransition(direction);
                    }
                }
                // handleswipe(swipedir);

            },
            false
        );
    }

    handleAnchor = () => {
        const hash = window.location.hash.substring(1);
        const activeSection = this.props.anchors.indexOf(hash);

        if (this.state.activeSection !== activeSection) {
            this.handleSectionTransition(activeSection);
            this.addActiveClass();
        }
    }

    setAnchor = (index) => {
        const hash = this.props.anchors[index];

        if (!this.props.anchors.length || hash) {
            window.location.hash = '#' + hash;
        }
    }

    handleScrollCallback = () => {
        if (this.props.scrollCallback) {
            setTimeout(() => this.props.scrollCallback(this.state), 0);
        }
    }

    resetScroll = () => {
        this.clearResetScrollTimer();

        this.resetScrollTimer = setTimeout(() => {
            this.setState({
                scrollingStarted: false
            });
        }, this.props.delay + 300);
    }

    clearResetScrollTimer = () => {
        if (this.resetScrollTimer) {
            clearTimeout(this.resetScrollTimer);
        }
    }

    renderNavigation = () => {
        const navigationStyle: React.CSSProperties = {
            position: 'fixed',
            zIndex: '7',
            left: '66px',
            top: '50%',
            transform: 'translate(-50%, -50%)'
        };

        const anchors = this.props.anchors.map((link, index) => {
            const anchorStyle = {
                display: this.mediaQuery?.matches ? 'none' : 'block' ,
                margin: '22px 0',
                borderRadius: '100%',
                backgroundColor: this.state.activeSection === index ? '#fff' : 'rgba(255, 255, 255, 0.6)',
                width: '12px',
                height: '12px',
                transition: 'all 0.2s',
                transform: this.state.activeSection === index ? 'scale(1.3)' : 'none'
            };

            return (
                <a
                    href={`#${link}`}
                    key={index}
                    className={this.props.navigationAnchorClass || 'Navigation-Anchor'}
                    style={this.props.navigationAnchorClass ? null : anchorStyle}
                />
            );
        });

        return (
            <div
                className={this.props.navigationClass || 'Navigation'}
                style={this.props.navigationClass ? null : navigationStyle}>
                {anchors}
            </div>
        );
    }

    render() {
        const containerStyle: React.CSSProperties = {
            height: '100%',
            width: '100%',
            position: 'relative',
            transform: `translate3d(0px, ${
                this.state.sectionScrolledPosition
                }px, 0px)`,
            transition: `all ${this.props.delay}ms ease`
        };
        return (
            <>
                <div className={this.props.className} style={containerStyle}>
                    {this.props.scrollBar
                        ? this.addChildrenWithAnchorId()
                        : this.props.children}
                </div>
                {this.props.navigation && !this.props.scrollBar
                    ? this.renderNavigation()
                    : null}
            </>
        );
    }
}



export default SectionContainer;