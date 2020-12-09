import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue:'',
            userObj: {}
        }
    }
    getUserEditInfo = (info) => {
        this.setState({
            userObj:info
        });
        this.props.getUserEditInfoApp(info);
    }
    isShowEditForm = () => {
        if(this.props.editUserStatus === true) {
            return <EditUser
                getUserEditInfo = {(info) => this.getUserEditInfo(info)}
                editUserObject = {this.props.editUserObject}
                changeEditUserStatus={() => this.props.changeEditUserStatus()}/>
        }
        else {
            return true
        }
    }
    isChange = (event) => {
        console.log(event.target.value);
        this.setState({
            tempValue: event.target.value
        });
        this.props.checkConnect(this.state.tempValue);
    }
    hienThiForm = () => {
        if(this.props.hienThiForm === true) {
            return <div onClick={this.props.ketNoi} className="btn btn-block btn-outline-secondary mt-2">Đóng lại</div>
        }
        else {
            return <div onClick={this.props.ketNoi} className="btn btn-block btn-outline-info mt-2">Thêm mới</div>
        }
    }
    render() {
        return (
            <div className="col-12">
                {this.isShowEditForm()}
                <div className="form-group">
                    <div className="btn-group">
                        <input onChange={(event) => this.isChange(event)} type="text" className="form-control" placeholder="Nhập từ khóa" />
                        <div className="btn btn-info" onClick={(dl) => this.props.checkConnect(this.state.tempValue)}>Tìm</div>
                    </div>
                    {this.hienThiForm()}
                </div>
            </div>
        );
    }
}

export default Search;