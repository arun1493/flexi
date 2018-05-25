import React, { Component } from 'react';
import {baseTypes} from './BaseTypes';
import Formsy from 'formsy-react';

class Flexi extends Component {

    buildUI(items) {
        return items.map((componentData, index) => {

            let {type, children, ...props} = componentData;
            const Component = baseTypes[type];
            if(children) {
                //if a component has children then build the UI tree recursively
                return (
                    <Component key={index} {...props}>{this.buildUI(children)}</Component>
                )
            }
            else {
                return <Component key={index} {...props} />;
            }
        });
    }

    handleSubmit(data) {
        console.log(data);
    }

    render() {
        return (
            <Formsy onSubmit={this.handleSubmit}>
                {this.buildUI(this.props.config.items)}
                <button type={'submit'}>Submit</button>
            </Formsy>
        );
    }
}

export default Flexi;
