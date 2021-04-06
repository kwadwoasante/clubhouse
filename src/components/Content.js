import Rooms from "./Rooms";

function Content() {
    return (
        <main>
            <section className="counters">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                            <div className="card">
                                <div className="card-body d-flex align-items-center justify-content-between">
                                    <div>
                                        <h1>54</h1>
                                        <span>Customers</span>
                                    </div>
                                    <div>
                                        <span className="fas fa-users"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                            <div className="card">
                                <div className="card-body d-flex align-items-center justify-content-between">
                                    <div>
                                        <h1>79</h1>
                                        <span>Projects</span>
                                    </div>
                                    <div>
                                        <span className="fas fa-users"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                            <div className="card">
                                <div className="card-body d-flex align-items-center justify-content-between">
                                    <div>
                                        <h1>124</h1>
                                        <span>Orders</span>
                                    </div>
                                    <div>
                                        <span className="fas fa-users"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                            <div className="card">
                                <div className="card-body d-flex align-items-center justify-content-between">
                                    <div>
                                        <h1>$6k</h1>
                                        <span>Income</span>
                                    </div>
                                    <div>
                                        <span className="fas fa-users"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>

            <Rooms />
        </main>
    )
}

export default Content
