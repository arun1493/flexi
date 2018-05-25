import React from 'react';
import {withFormsy} from 'formsy-react';
import {isNotEmpty} from './utils';
import _ from 'lodash';

class TextField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.setValue(this.props.defaultValue);
    }

    setValue(value) {
        this.props.setValue(value);
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props.defaultValue, nextProps.defaultValue)) {
            this.setValue(nextProps.defaultValue);
        }
    }

    onFocus = () => {
        this.setState({
            focus: true,
        });
    };

    onBlur = () => {
        this.props.setValue(this.props.getValue() || '');
        this.setState({
            focus: false,
        });
    };


    onChange = (event) => {
        const value = event.currentTarget.value;
        // Store validation but dont validate
        if(!this.props.isValid()){
            this.props.setValue(value);
        } else {
            this.props.setValue(value, false);
        }
        this.props.onChange(value);
    };

    onMount = (input)  =>{
        this.input = input;
    };

    render() {
        return (
            <div >
                <label  htmlFor={this.props.name}>{this.props.label}</label>
                <input
                    autoComplete="off"
                    ref={this.onMount}
                    type={this.props.type}
                    name={this.props.name}
                    required={this.props.required}
                    placeholder={this.props.label}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    value={this.props.getValue() || ''}
                    onChange={this.onChange}
                />
                {
                    !this.state.focus &&
                    <span >{
                        isNotEmpty(this.props.getValue()) &&
                        this.props.getErrorMessage()}</span>
                }
            </div>
        )
    }
}

TextField.defaultProps = {
    type: 'text',
    onChange: () => {},
};

export default withFormsy(TextField);