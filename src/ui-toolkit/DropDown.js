import React from 'react';
import SelectWrapper from 'react-select';
import {withFormsy} from 'formsy-react';
import {isNullOrUndefined} from './utils';
import _ from 'lodash';

class DropDown extends React.Component {


    componentDidMount() {
        this.setValue(this.props.defaultValue);
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props.defaultValue, nextProps.defaultValue)) {
            this.setValue(nextProps.defaultValue);
        }
    }

    setValue(value) {
        if (!isNullOrUndefined(value)) {
            this.props.onChange({name: this.props.name, value});
            this.props.setValue(value);
        }
    }

    onChange = (item) => {
        let value = null;
        if (this.props.multiple) {
            value = _.map(item, 'value');
        } else {
            value = item && item.value;
        }
        this.setValue(value || '');
    };


    render() {
        const values = _.map(this.props.values, (value) => ({
            label: value,
            value,
        }));
        return (
            <div>
                <div>{this.props.label}</div>
                <SelectWrapper
                    multi={this.props.multiple}
                    options={values}
                    placeholder={this.props.label}
                    onChange={this.onChange}
                    value={isNullOrUndefined(this.props.getValue()) ? '' : this.props.getValue()}
                />
            </div>
        );
    }
}

DropDown.defaultProps = {
    onChange: () => {},
    list: [],
};

export default withFormsy(DropDown);