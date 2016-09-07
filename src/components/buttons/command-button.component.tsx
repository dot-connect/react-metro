import * as React from 'react';
import * as ClassNames from 'classnames';

export class CommandButton extends React.Component<ICommandButtonProps, ICommandButtonState>{
    componentWillMount(): void { 
        var classNames = ClassNames(
            "command-button",
            this.props.iconSide == "right" ? "icon-right" : "",
            this.props.type
        );

        var iconClassNames = ClassNames(
            "icon",
            this.props.icon
        );

        this.setState({
            classes: classNames,
            iconClasses: iconClassNames
        });
    }

    render() {
        return (
            <button className={this.state.classes}>
                <span className={this.state.iconClasses}></span>
                {this.props.title}
                <small>{this.props.subTitle}</small>
            </button>
        );
    }
}

interface ICommandButtonProps{
    title?: string;
    subTitle?: string;
    icon?: "mif-share" | string;
    iconSide?: "left" | "right"
    type?:  "primary" | "success" | "info" | "danger" | "warning" | "link" | string[]
}

interface ICommandButtonState {
    classes?: string;
    iconClasses?: string;
}