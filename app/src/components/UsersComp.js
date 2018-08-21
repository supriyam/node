import React from 'react';
import {Button} from 'react-bootstrap';

export default class UsersComp extends React.Component{
    constructor(props){
        super(props);
        this.showEdit = this.showEdit.bind(this);
        this.showDelete = this.showDelete.bind(this);
    }
    showEdit(e){
        console.log(e)
    }
    showDelete(e){
        console.log(e)
    }
    render(){
        return(
            <table>
                
                <tr><th>{'name'}</th><th>{'age'}</th> <th>{'address'}</th> <th>{'salary'}</th></tr>
                {this.props.data && this.props.data.map(res => {
                  return(
                    <tr>
                        <td>{res.name}</td>
                        <td>{res.age}</td>
                        <td>{res.address}</td>
                        <td>{res.salary}</td>
                        <td><Button onClick = {this.showEdit(res)}>Edit</Button></td>
                        <td><Button onClick = {this.showDelete(res)}>Delete</Button></td>
                        </tr>
                  )  
                
                })
                }    
            </table> 
        )
    }
}

