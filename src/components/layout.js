import React, { Component } from 'react';

class Layout extends Component {
    state = {
        classBtnVal: { name: 'none', email: 'none', cell: 'none', id: 'none' },
        searchName: '',
        employees: this.props.employees.results
    };

    render() {
        const { searchName, employees } = this.state;
     

        return (
            <div className="container02">
                <h1 className="top"> PROFILE MANAGER</h1>
                Below you can view information regarding existing employees. Use the filter option to find a specific employee
                <br></br>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Filter by First Name"
                    onChange={(e) => {
                        this.setState({ searchName: e.target.value });
                        this.setState({
                            employees: employees.filter((employee) => {
                                return employee.name.first.toLowerCase().includes(searchName.toLowerCase());
                            })
                        });
                    }}
                />
<br></br><br></br>
                 <input
                    type="text"
                    class="form-control"
                    placeholder="Filter by Last Name"
                    onChange={(e) => {
                        this.setState({ searchName: e.target.value });
                        this.setState({
                            employees: employees.filter((employee) => {
                                return employee.name.last.toLowerCase().includes(searchName.toLowerCase());
                            })
                        });
                    }}
                />
     
             
              
                <table className="table">
                <thead className="thead2">
                        <tr>
                            <th scope="col">PICTURE</th>
                            <th scope="col">FIRST NAME</th>
                            <th scope="col">LAST NAME</th>
                            <th scope="col">PHONE NUMBER</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">ID REF</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr className="table-row" key={employee.login.uuid}>
                                <td>
                                    <img src={employee.picture.medium} alt="employee photo" />
                                </td>
                                <td>
                                    {employee.name.first}  </td>
                                    <td>
                                    {employee.name.last}
                                </td>
                                <td>{employee.cell}</td>
                                <td>{employee.email}</td>
                                <td>{employee.id.name} {employee.id.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}



export default Layout;