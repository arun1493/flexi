/**
 * Created by vatsalya on 6/7/17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class Container extends React.Component {


    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    }

    getTitle(title) {
        return <CardHeader title={ title } titleColor="white"/>
    }

    render() {


        return (
            <Card>
                { this.getTitle(this.props.title) }
                <CardText> { this.props.children } </CardText>
            </Card>
        );
    }
}

Container.childContextTypes = {
    muiTheme: PropTypes.object
};
export default Container;

