import React from 'react';
// import { Picker, Popup, PopupPicker } from '../../components';
import { Picker, Popup, PopupPicker } from 'easy-picker';
import { PickerAddress } from '../components-city';
import './index.scss';

const userData = {
  data1: [
    { name: '杜保坤', value: 0 },
    { name: '况宏瑞', value: 1 },
    { name: '盘维', value: 2 },
    { name: '杨泉', value: 3 },
    { name: '福娃', value: 4 },
    { name: 'Lincal', value: 5 },
    { name: '记忆残骸', value: 6 },
    { name: 'Raoh', value: 7 },
    { name: '铁甲飞龙', value: 8 },
    { name: '吴泽兵', value: 9 },
    { name: '邱福龙', value: 10 },
    { name: '小泥巴', value: 11 }
  ],
  data2: [
    { name: '杜保坤', value: 0 },
    { name: '况宏瑞', value: 1 },
    { name: '盘维', value: 2 },
    { name: '杨泉', value: 3 },
    { name: '福娃', value: 4 },
    { name: 'Lincal', value: 5 },
    { name: '记忆残骸', value: 6 },
    { name: 'Raoh', value: 7 },
    { name: '铁甲飞龙', value: 8 },
    { name: '吴泽兵', value: 9 },
    { name: '邱福龙', value: 10 },
    { name: '小泥巴', value: 11 }
  ]
};

export default class PickerDemo extends React.Component {
  constructor() {
    super();

    this.state = {
      userPickerVisible2: false,
      selectedValue: {
        data1: 4,
        data2: 5
      },
      selectedAddrName: {}
    };
  }

  // user选择
  showUserPicker(e) {
    e.nativeEvent.stopImmediatePropagation();
    this.setState({ userPickerVisible2: true });
  }

  render() {
    return (
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
            {`多项选择`}
          </button>
        </section>
        
        
        
        
        

        <PopupPicker
          data={userData}
          selectedValue={this.state.selectedValue}
          visible={this.state.userPickerVisible2}
          liveUpdate={false}
          onCancel={() => this.setState({ userPickerVisible2: false })}
          onSelect={selectedValue =>{
          	console.log('selectedValue'+ JSON.stringify(selectedValue));
            this.setState({
              userPickerVisible2: false,
              selectedValue
            })}
          }
          onChanging={(selectedValue, key, value, name) => {
            console.log('onChanging' ,selectedValue, key, value, name);
          }}
        />
      </main>
    );
  }
}
