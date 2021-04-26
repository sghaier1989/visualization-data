import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';

class DropDownMenu extends Component {
    
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        
    }

    state = {
        selectedValue:''
    }
    
    
    handleChange(event){
        console.log('event',event)
        this.props.value(event)
        this.setState({selectedValue:event})
    }

    render () {
        return (
            <div >
            <DropdownButton id="dropdown-basic-button" title={this.state.selectedValue?this.state.selectedValue:'Search '}
            value={this.state.selectedValue}
            onSelect={ this.handleChange}>
                {
                    Object
                    .keys(this.props.menu)
                    .map( key => (
                        <Dropdown.Item key={key} eventKey={this.props.menu[key]} >{this.props.menu[key]}</Dropdown.Item>
                        ))
                }
            </DropdownButton>           
            </div>
        )
    }
}

export default DropDownMenu