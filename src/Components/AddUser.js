import React, { Component } from 'react';

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            Permission: ""
        }
    }


    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        });
        // var item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.Permission = this.state.Permission;
        // console.log(item);
    }
    kiemTraTrangThai = () => {
        if (this.props.hienThiForm === true) {
            return (
                <div className="col">
                    <div className="card border-primary mb-3 mt-2">
                        <form>
                            <div className="card-header">Thêm User</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input type="text" name="name" onChange={(event) => this.isChange(event)} className="form-control" placeholder="Nhập tên User" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="tel" onChange={(event) => this.isChange(event)} className="form-control" placeholder="Nhập số điện thoại" />
                                </div>
                                <div className="form-group">
                                    <select className="custom-select" name="Permission" onChange={(event) => this.isChange(event)}>
                                        <option defaultValue>Chọn quyền</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>User</option>
                                        <option value={3}>Developer</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="reset" onClick={(name, tel, permission) => this.props.add(this.state.name, this.state.tel, this.state.Permission)} className="btn btn-block btn-primary" value="Thêm mới" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
        else return true
    }
    render() {
        // console.log(this.state);
        return (
            <div>
                {
                    this.kiemTraTrangThai()
                }
            </div>
        );
    }
}

export default AddUser;