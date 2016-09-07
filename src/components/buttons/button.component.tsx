import * as React from 'react';
import * as ClassNames from 'classnames';

export class Button extends React.Component<IButtonProps, IButtonState> {
    
    componentWillMount(): void {
       var bntClass = ClassNames(
            "button",
            this.props.boder,
            this.props.size,
            this.props.type,
            this.props.lighten,
            this.props.shadow,
            this.props.animation
        );

        this.setState({
            classes: bntClass
        });
    }

    render() {      

        return (
            <button className={this.state.classes}>
                {this.props.label}
                {this.props.children}
            </button>
        );
    }
}

interface IButtonProps {
    label?: string,
    boder?: "rounded" | "cycle-button" | "square-button", 
    size?: "mini-button" | "small-button" | "large-button",
    type?: "primary" | "success" | "info" | "danger" | "warning" | "link" | string[]
    lighten?: "text-shadow" | "lighten";
    shadow?: "block-shadow-success" | "block-shadow-warning" | "block-shadow-danger" | "block-shadow-info"
    animation?: "loading-pulse" | "loading-cube"
}

interface IButtonState{
    classes: string;
}