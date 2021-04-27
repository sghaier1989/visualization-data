import React, { Component } from 'react'
import { Table } from 'react-bootstrap';

class TableNoe extends Component {
    render () {
        let {data,isFetching} = this.props
        //console.og('data Table => ',...this.props.data)
        for(let i in data)
        {
            data[i] = [data[i].name,data[i].estimated_diameter_min,data[i].estimated_diameter_max]
        }
        
        return (
            
            <div>
                <h1>{isFetching ? 'Fetching data...' : ''}</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>NOE Name</th>
                        <th>Min Estimated Diameter (km)</th>
                        <th>Max Estimated Diameter</th>
                        </tr>
                    </thead>
                    <tbody>                            
                        {
                            Object
                            .keys(data)
                            .map( key => (
                                <tr key={key}>                 
                                    <td>{key}</td>
                                    <td>{data[key][0]}</td>
                                    <td>{data[key][1]}</td>
                                    <td>{data[key][2]}</td>
                                    
                                </tr>
                            
                            ))
                        }
                        
                    </tbody>
                    </Table>
            </div>
        )
    }
}

export default TableNoe