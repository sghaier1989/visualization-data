import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import {arraySort} from '../utils'

class TableNoe extends Component {
    render () {
        let {data,isFetching} = this.props
        //console.og('data Table => ',...this.props.data)
        for(let i in data)
        {
            data[i] = [data[i].name,data[i].estimated_diameter_min,data[i].estimated_diameter_max]
        }
        var dataEstimat = arraySort(data)
        
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
                            .keys(dataEstimat)
                            .map( key => (
                                <tr key={key}>                 
                                    <td>{key}</td>
                                    <td>{dataEstimat[key][0]}</td>
                                    <td>{dataEstimat[key][1]}</td>
                                    <td>{dataEstimat[key][2]}</td>
                                    
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