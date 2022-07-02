import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {message: '',
  message1: '',
  message2: '',
  message3: ''
  };
  }
  async componentDidMount() {
    try {
      Promise.all([
        fetch('http://localhost:4500/api/business/count'),
        fetch('http://localhost:4500/api/product/count'),
        fetch('http://localhost:4500/api/award/count'),
        fetch('http://localhost:4500/api/service/count')
      ]).then(async ([res1, res2, res3, res4]) => {
        const data1 = await res1.json();
        const data2 = await res2.json();
        const data3 = await res3.json();
        const data4 = await res4.json();
        console.log(data1.data);
        console.log(data2.data);
        console.log(data3.data);
        console.log(data4.data);
        this.setState({
          message: data1.data,
          message1: data2.data,
          message2: data3.data,
          message3: data4.data
        });
      }
      );
    } catch (err) {
      console.log(err);
    }
  }
    render() {
        return (
            <div>
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">Dashboard</h1>
          </div>{/* /.col */}
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        {/* Small boxes (Stat box) */}
        <div className="row">
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-info">
              <div className="inner">
              <h3>{this.state.message1}</h3>
                <p>Product</p>
              </div>
              <div className="icon">
                <i className="ion ion-bag" />
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-success">
              <div className="inner">
              <h3>{this.state.message2}<sup style={{fontSize: 20}}></sup></h3>
                <p>Awards</p>
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars" />
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-warning">
              <div className="inner">
              <h3> { this.state.message } </h3>
                <p>Business</p>
              </div>
              <div className="icon">
                <i className="ion ion-person-add" />
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
          {/* ./col */}
          {/* <div className="col-lg-3 col-6">
            
            <div className="small-box bg-danger">
              <div className="inner">
              <h3>{this.state.message3}</h3>
                <p>Service</p>
              </div>
              <div className="icon">
                <i className="ion ion-pie-graph" />
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div> */}
          {/* ./col */}
           </div>
      </div>
    </section>
  </div>
</div>

        )
    }
}