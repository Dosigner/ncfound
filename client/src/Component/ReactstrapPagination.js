import React, {Component} from 'react';
import {Pagination,PaginationItem, PaginationLink} from 'reactstrap';
import { Link } from 'react-router-dom';

class ReactstrapModel extends Component{
    constructor(props){
		super(props);
		this.state = {
            page_num:this.props.page_num,
            type:this.props.type,
		}
	}
    render(){
        console.log('타입',this.props.type+"2");
        return(
            <>
            <Pagination style={{color:"green"}} aria-label="Page navigation example">
                <PaginationItem onClick={e=>this.setState({page_num:this.state.page_num-1})}>
                    <PaginationLink previous/>
                </PaginationItem>
                <PaginationItem active={this.state.page_num===1} onClick={e=>this.setState({page_num:1})}>
                    <Link to={'/ncfound'}>
                        <PaginationLink >1</PaginationLink>
                    </Link>
                </PaginationItem>
                <PaginationItem active={this.state.page_num===2} onClick={e=>this.setState({page_num:2})}>
                    <Link to={'/make2'}>
                        <PaginationLink >2</PaginationLink>
                    </Link>
                </PaginationItem>
                <PaginationItem active={this.state.page_num===3} onClick={e=>this.setState({page_num:3})}>
                    <PaginationLink href={'/draw'}>3</PaginationLink>
                </PaginationItem>
                <PaginationItem onClick={e=>this.setState({page_num:3})}>
                    <PaginationLink last/>
                </PaginationItem>
            </Pagination>
            </>
        )
    }
}
export default ReactstrapModel