import React, { Component } from 'react';

type MyProps = {
    color?: string;
    verticalAlign?: boolean;
    sectionClassName?: string;
    sectionPaddingTop?: string;
    sectionPaddingBottom?: string;
    className?: string;
    style?: React.CSSProperties;
    id?: any;
};
type MyState = {
    windowHeight?: number;
};

class Section extends Component<MyProps, MyState> {
    state = {
        windowHeight: 0
    };

    handleResize() {
        this.setState({
            windowHeight: window.innerHeight
        });
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', () => this.handleResize());
    }

    componentWillUnmount() {
        window.removeEventListener('resize', () => this.handleResize());
    }

    renderVerticalAlign = () => {
        const verticalAlignStyle = {
            display: 'table-cell',
            verticalAlign: 'middle',
            width: '100%'
        };

        return <div style={verticalAlignStyle}>{this.props.children}</div>;
    };

    render() {
        const alignVertical =
            this.props.verticalAlign || this.context.verticalAlign;

        const sectionStyle = {
            width: '100%',
            display: alignVertical ? 'table' : 'block',
            height: this.state.windowHeight,
            maxHeight: this.state.windowHeight,
            overflow: 'auto',
            backgroundColor: this.props.color,
            paddingTop: this.context.sectionPaddingTop,
            paddingBottom: this.context.sectionPaddingBottom,
            ...this.props.style
        };

        return (
            <div
                className={
                    this.context.sectionClassName +
                    (this.props.className ? ` ${this.props.className}` : '')
                }
                id={this.props.id}
                style={sectionStyle}>
                {alignVertical ? this.renderVerticalAlign() : this.props.children}
            </div>
        );
    }
}

export default Section;
