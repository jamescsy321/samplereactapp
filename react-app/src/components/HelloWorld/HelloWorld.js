import React, {Component} from 'react';
import {MapTo} from '@adobe/cq-react-editable-components';
require('./HelloWorld.css');

const HelloWorldEditConfig = {

    emptyLabel: 'Hello World',

    isEmpty: function(props) {
        return !props || !props.message || props.message.trim().length < 1;
    }
};

class HelloWorld extends Component {

    render() {
        
         
        if(this.props.message) {
            return (
                <div className="cmp-helloworld">
                    helloworld
                    <h1 className="cmp-helloworld_message">{this.props.message}</h1>
                </div>
            );
        }
        return null;
    }
}

MapTo('aemsamplereactapp/components/helloworld')(HelloWorld, HelloWorldEditConfig);