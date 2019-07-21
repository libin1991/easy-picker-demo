## 移动端react选择器，支持多级联动 , **秒杀其它大多数picker组件**

**forked from** [springalskey/picker](https://github.com/springalskey/picker)
-  修复了滑动卡顿问题
-  统一了样式
-  **fix掉rem布局缺陷(导致滑动计算误差)**

在原有的基础上优化了实现，更换了更清晰的数据格式，更好的交互体验。

## 快速体验 : [https://libin1991.github.io/easy-picker-demo/demo/](https://libin1991.github.io/easy-picker-demo/demo/)

## 特点

 * 真实的3D滚轮，效果更接近原生
 * 更合理的用户交互
 * 支持多级联动，选项动态更新
 * 灵活的选项配置
 * 兼容ios的背景滚动问题

## demo预览

![image](https://raw.githubusercontent.com/libin1991/easy-picker-demo/master/demo/1563702409(1).jpg)

Chrome打开开发者工具，切换到手机模拟器预览  
[demo](https://libin1991.github.io/easy-picker-demo/demo/)


手机二维码扫描预览

![image](https://raw.githubusercontent.com/libin1991/easy-picker-demo/master/demo/1563702476_wps%E5%9B%BE%E7%89%87.png)


## 如何使用

```shell
$ npm install easy-picker -S
```
## [单列](https://github.com/libin1991/easy-picker-demo/blob/e77ea0a79e1d036b692626dc513dfaad4a7bf6f4/src/container/picker/picker-demo1.jsx)
```js
import React from 'react';
// import { Picker, Popup, PopupPicker } from '../../components';
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

```

## [双列不联动](https://github.com/libin1991/easy-picker-demo/blob/e77ea0a79e1d036b692626dc513dfaad4a7bf6f4/src/container/picker/picker-demo2.jsx)
## [城市选择器](https://github.com/libin1991/easy-picker-demo/blob/e77ea0a79e1d036b692626dc513dfaad4a7bf6f4/src/container/picker/picker-demo3.jsx)

## API

### PopupPicker

| props | type | default value | description |
|--|--| -- | -- |
| visible | bool | `false` | 是否显示组件 |
| data | object | `{}` | 选项列表数据，数据结构参考上面的例子 |
| selectedValue | object | `{}` | 已选择的值 |
| liveUpdate | bool | `false` | 用户滑动到某个位置时，是否立即是更新为选中☑️的值，并通过onSelect传递出去 |
| viewCount | number | `5` | 每列选项中可显示的行数。建议不要改，没有完全自动兼容UI。修改的话，请拷贝`src/components/scss/index.scss`到自己的项目，并修改里面的`$viewCount`变量。 |
| onSelect | func | `undefined` | 用户点击`确定`时触发，传递两个参数：`(selectedValue, selectedName)` |
| onCancel | func | `undefined` | 用户点击`取消`时触发，无参数传递 |
| onChanging | func | `undefined` | 用户正在滑动或选择时触发 |

### Popup

| props | type | default value | description |
|--|--| --| -- |
| visible | boolean | 必填 | 是否显示组件 |
| onConfirm | func | 必填 | 用户点击`确定`时触发 |
| onCancel | func | 必填 | 用户点击`取消`时触发 |

### Picker

| props | type | default value | description |
|--|--| --| -- |
| data | object | `{}` | 选项列表数据，数据结构参考上面的例子 |
| selectedValue | object | `{}` | 已选择的值 |
| onChange |  func | `undefined` | 用户正在或选择时触发 |
| viewCount | number | `5`  | 同PopupPicker 的 viewCount |
