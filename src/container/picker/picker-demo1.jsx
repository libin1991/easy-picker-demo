import React from 'react';
//import { Picker, Popup, PopupPicker } from '../../components';
import './index.scss';
import { Picker, Popup, PopupPicker } from 'easy-picker';

const userData = {
	data1: [{
			name: '杜保坤',
			value: 0
		},
		{
			name: '况宏瑞',
			value: 1
		},
		{
			name: '盘维',
			value: 2
		},
		{
			name: '杨泉',
			value: 3
		},
		{
			name: '福娃',
			value: 4
		},
		{
			name: 'Lincal',
			value: 5
		},
		{
			name: '记忆残骸',
			value: 6
		},
		{
			name: 'Raoh',
			value: 7
		},
		{
			name: '铁甲飞龙',
			value: 8
		},
		{
			name: '吴泽兵',
			value: 9
		},
		{
			name: '邱福龙',
			value: 10
		},
		{
			name: '小泥巴',
			value: 11
		}
	]
};

export default class PickerDemo extends React.Component {
	constructor() {
		super();

		this.state = {
			userPickerVisible: false,
			selectedValue: {
				data1: 4
			},
			// 第一个picker没有用<PopupPicker/>, 要自己缓存用户滚动时，但未点击“完成”时的值
			cacheSelectedValue1: 4
		};
	}

	// user选择
	showUserPicker(e) {
		e.nativeEvent.stopImmediatePropagation();
		this.setState({
			userPickerVisible: true
		});
	}

	 

	closeUserPicker() {
		console.log("ok");
		this.setState({
			userPickerVisible: false,
			selectedValue: {
				...this.state.selectedValue,
				data1: this.state.cacheSelectedValue1
			}
		});
	}

	cancelUserPicker() {
		console.log('关闭');
		this.setState({
			userPickerVisible: false
		});
	}

	render() {
		return(
			<main className="picker-demo">
		        <header>
		          <p>已选择：{JSON.stringify(
		            PopupPicker.getName(userData, this.state.selectedValue)
		          )}</p>
		        </header>
		
		        <section className="button-wrap">
		          <button
		            type="button"
		            onClick={this.showUserPicker.bind(this)}
		            className="btn button-primary"
		          >
		            {`单项选择`}
		          </button>
		        </section>



		        <Popup
		          onCancel={this.cancelUserPicker.bind(this)}
		          onConfirm={this.closeUserPicker.bind(this)}
		          visible={this.state.userPickerVisible}
		        >
		          <Picker
		            onChange={value =>{
		          	  console.log('onChange:' + value)
		              this.setState({
		                cacheSelectedValue1: value
		              })}
		            }
		            data={userData.data1}
		            selectedValue={this.state.cacheSelectedValue1}
		          />
		        </Popup>
            </main>
		);
	}
}