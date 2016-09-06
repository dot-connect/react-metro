import * as React from 'react';
import { Link } from 'react-router';

// import AuthComponent from './auth/ui/auth.component.tsx';
// import TodoCounter from './todo/ui/todo.counter.tsx';
// import LoadingComponent from './common/loading/loading.component.tsx';

import * as Components from './components';

export default class MainComponent extends React.Component<{ children: any }, {}> {

    private controls: {
    }

    constructor(props) {
        super(props);

        this.controls = {
            modal: null
        }
    }    

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Link to='/'>Home</Link>
                <div>
                    Buttons
                    <div>
                        <Components.Buttons.Button label={'Default'} type="primary" shadow="block-shadow-success" />
                        <Components.Buttons.Button label={'Rounded'} boder="rounded" type="link" />
                        <Components.Buttons.Button label={'Cycle'} boder="cycle-button"/>
                        <Components.Buttons.Button label={'Cycle'} type="primary" lighten="lighten" animation="loading-pulse"/>
                    </div>
                </div>
                <div>{this.props.children}</div>
            </div>
        );
    }
}