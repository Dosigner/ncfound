import React, {Component} from 'react';
import {Pagination,PaginationItem, PaginationLink} from 'reactstrap';

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
                    <PaginationLink href={"/ncfound"}>1</PaginationLink>
                </PaginationItem>
                <PaginationItem active={this.state.page_num===2} onClick={e=>this.setState({page_num:2})}>
                    <PaginationLink href={"/make2"} >2</PaginationLink>
                </PaginationItem>
                <PaginationItem active={this.state.page_num===3} onClick={e=>this.setState({page_num:3})}>
                    <PaginationLink>3</PaginationLink>
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