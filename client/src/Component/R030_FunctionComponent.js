import React, {Component} from 'react'; // react 라이브러리 import
import {Button ,Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {UncontrolledCarousel} from 'reactstrap'

const items=[
	{
		src:"",
		altText:'슬라이드 1 이미지 대체 문구',
		caption:'슬라이드1 설명',
		header:'슬라이드 1제목',
	},
	{
		src:"https://1.bp.blogspot.com/-QELd67pUwLw/XTgEGbI0_nI/AAAAAAAARRY/s6GHJQssgx43RKOyqRUU_tRIhvMnkVupQCLcBGAs/s1600/pink-rose-250x250.png",
		altText:'슬라이드 1 이미지 대체 문구',
		caption:'슬라이드1 설명',
		header:'슬라이드 1제목',
	},
	{
		src:"https://1.bp.blogspot.com/-QELd67pUwLw/XTgEGbI0_nI/AAAAAAAARRY/s6GHJQssgx43RKOyqRUU_tRIhvMnkVupQCLcBGAs/s1600/pink-rose-250x250.png",
		altText:'슬라이드 1 이미지 대체 문구',
		caption:'슬라이드1 설명',
		header:'슬라이드 1제목',
	}
]

class mopal extends Component{
	constructor(props){
		super(props);
		this.state = {
			modal:this.props.value
		}
	}
	toggle =()=>{
		console.log(this.state.modal,"안에 잇을 대 값")
		this.setState({modal:!this.state.modal})
	}

	render(){
		return(
			<>
				<Modal isOpen={this.state.modal} fade={true} style={{background:'#FF5259'}}>
					<ModalHeader style={{background:'#FF3333'}} toggle={this.toggle}>젤로</ModalHeader>
					<ModalBody>
						<UncontrolledCarousel items={items}/>
						크리스마스 트리 만들기
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={this.toggle}>확인</Button>
					</ModalFooter>
				</Modal>
			</>
		)}

}


export default mopal;