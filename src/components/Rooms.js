// import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

function Rooms() {
    return (
        <section className="clubrooms">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="card mb-3">
                            <div className="card-header">
                                <div className="row justify-content-between align-items-center flex-grow-1">
                                    <div className="col-6 col-lg-3">
                                        Clubhouse Rooms
                                    </div>
                                    <div className="col-6 col-lg-3">
                                        <a href="#home" className="btn btn-primary float-right">
                                            See all <i className="fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="card-body"> */}
                                <Table striped bordered hover responsive>
                                    <thead>
                                        <tr>
                                            <th>Room</th>
                                            <th>No. of Members</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Urban Adventurers</td>
                                            <td>235 people</td>
                                            <td>
                                                <i className="fas fa-circle" style={{ color : "#7FD1AE"}}></i> Active
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Out and About Social Club</td>
                                            <td>111 people</td>
                                            <td>
                                                <i className="fas fa-circle" style={{ color : "#FF5159"}}></i> Inactive
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Happy, Healthy, Fit</td>
                                            <td>6 people</td>
                                            <td>
                                                <i className="fas fa-circle" style={{ color : "#7FD1AE"}}></i> Active
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Support Your Sport Club</td>
                                            <td>0 people</td>
                                            <td>
                                                <i className="fas fa-circle" style={{ color : "#FF5159"}}></i> Inactive
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>More Than Foodies</td>
                                            <td>10 people</td>
                                            <td>
                                                <i className="fas fa-circle" style={{ color : "#7FD1AE"}}></i> Active
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Happy and Single</td>
                                            <td>27 people</td>
                                            <td>
                                                <i className="fas fa-circle" style={{ color : "#FF5159"}}></i> Inactive
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ladies Empower</td>
                                            <td>12 people</td>
                                            <td>
                                                <i className="fas fa-circle" style={{ color : "#7FD1AE"}}></i> Active
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Tango and Beyond Social Club</td>
                                            <td>145 people</td>
                                            <td>
                                                <i className="fas fa-circle" style={{ color : "#FF5159"}}></i> Inactive
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Paint It</td>
                                            <td>25 people</td>
                                            <td>
                                                <i className="fas fa-circle" style={{ color : "#7FD1AE"}}></i> Active
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>The Pen Club</td>
                                            <td>5 people</td>
                                            <td>
                                                <i className="fas fa-circle" style={{ color : "#FF5159"}}></i> Inactive
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Rooms
