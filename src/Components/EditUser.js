import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.editUserObject.id,
            name:this.props.editUserObject.name,
            tel:this.props.editUserObject.tel,
            Permission:this.props.editUserObject.Permission
        }
    }
    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]:value
        });
    }
    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.Permission = this.state.Permission;
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus();
    }
    render() {
        return (
            <div className="col">
                    <div className="card text-white bg-warning border-primary mb-3 mt-2">
                        <form>
                            <div className="card-header text-center">Sửa thông tin User</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)} defaultValue={this.props.editUserObject.name} type="text" name="name" className="form-control" placeholder="Nhập tên User" />
                                </div>
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)} defaultValue={this.props.editUserObject.tel} type="text" name="tel" className="form-control" placeholder="Nhập số điện thoại" />
                                </div>
                                <div className="form-group">
                                    <select onChange={(event) => this.isChange(event)} defaultValue={this.props.editUserObject.Permission} className="custom-select" name="Permission" >
                                        <option defaultValue>Chọn quyền</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>User</option>
                                        <option value={3}>Developer</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="button" onClick={() => this.saveButton()} className="btn btn-block btn-danger" value="Lưu" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        );
    }
}

export default EditUser;