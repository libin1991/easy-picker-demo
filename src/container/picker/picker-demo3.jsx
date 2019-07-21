import React from 'react';
//import { Picker, Popup, PopupPicker } from '../../components';
import { Picker, Popup, PopupPicker } from 'easy-picker';
import { PickerAddress } from '../picker-address';
import './index.scss';



export default class PickerDemo extends React.Component {
  constructor() {
    super();

    this.state = {
      addressPickerVisible: false,
      // 地址的
      showAddrPicker:false,
      selectedAddrName: {}
    };
  }

  // user选择
  showUserPicker(e) {
    e.nativeEvent.stopImmediatePropagation();
    this.setState({ userPickerVisible: true });
  }
  // user选择
  showUserPicker2(e) {
    e.nativeEvent.stopImmediatePropagation();
    this.setState({ userPickerVisible2: true });
  }




  render() {
    return (
      <main className="picker-demo">
        <header>
         
          <p>已选择地址：{JSON.stringify(this.state.selectedAddrName)}</p>
        </header>
       

        <section className="button-wrap">
          <button
            type="button"
            onClick={()=>{this.setState({
              showAddrPicker:true
            })}}
            className="btn button-primary"
          >
            选择地址
          </button>
        </section>

      
        <PickerAddress
          visible={this.state.showAddrPicker}
          onCancel={()=>this.setState({
            showAddrPicker:false,
          })}
          onSelect={(oVal, oName)=>{
            this.setState({
              selectedAddrName: oName,
              showAddrPicker:false,
            })
          }}
        />
      </main>
    );
  }
}
