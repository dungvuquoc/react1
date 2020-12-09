import './../App.css';
import AddUser from './AddUser';
import TableData from './TableData';
import Header from './Header';
import Search from './Search';
import React, { Component } from 'react';
import DataUser from './Data.json';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm : true,
      data : [],
      searchText : '',
      editUserStatus:false,
      editUserObject:{}
    }
  }
  componentWillMount() {
    if(localStorage.getItem('userData') === null) {
      localStorage.setItem('userData', JSON.stringify(DataUser));
    }
    else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      });
    }
  }
  deleteUser = (idUser) => {
    var tempData = this.state.data;
    tempData = tempData.filter(item => item.id !== idUser);
    this.setState({
      data:tempData
    });
    localStorage.setItem('userData', JSON.stringify(tempData));
  }
  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value, key) => {
      if(value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.Permission = info.Permission;
      }
    })
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }
  editUser = (user) => {
    this.setState({
      editUserObject:user
    });
  }
  getNewUserData = (name, tel, permission) => {
    console.log('ket noi ok');
    var item = {};
    item.id = uuidv4(); 
    item.name = name;
    item.tel = tel;
    item.Permission = parseInt(permission);
    var items = [];
    items = this.state.data;
    items.push(item);
    this.setState({
      data:items
    });
    localStorage.setItem('userData', JSON.stringify(items));

  }
  getTextSearch = (dl) => {
    this.setState({
      searchText:dl
    });
  }
  doiTrangThai = () => {
    this.setState({
      hienThiForm : !this.state.hienThiForm
    });
  }
  
 
  
  render() {
    var ketqua = []
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item);
      }
    })
    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
                getUserEditInfoApp = {(info) => this.getUserEditInfoApp(info)}
                editUserObject = {this.state.editUserObject}
                checkConnect={(dl)=>this.getTextSearch(dl)}
                ketNoi={() => this.doiTrangThai()}
                hienThiForm={this.state.hienThiForm}
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus={() => this.changeEditUserStatus()}/>
              <div className="col-12">
                <hr />
              </div>
              <TableData
                deleteUser = {(idUser) => this.deleteUser(idUser)}
               changeEditUserStatus={() => this.changeEditUserStatus()} editFun={(user) => this.editUser(user)} dataUserProps={ketqua}/>
              <AddUser add={(name, tel, permission) => this.getNewUserData(name, tel, permission)} hienThiForm={this.state.hienThiForm}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}

export default App;
