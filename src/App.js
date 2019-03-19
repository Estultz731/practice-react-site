import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <>
            <nav>
                <a className="site" href="#practice">Practice Bootstrap Site</a>
                <div className="dropdown">
                    <button className="dropbtn">Pages</button>
                    <div className="dropdown-content">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                    </div>
                 </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-4">
                        <div className="card">
                            <div className="top"><span className="fas fa-cat" /></div>
                            <div className="bottom">In id massa consequat, auctor elit vel, aliquam erat.</div>
                        </div>
                    </div>
                <div className="col-sm-12 col-lg-4">
                    <div className="card">
                        <div className="top"><span className="fas fa-dog" /></div>
                        <div className="bottom">In id massa consequat, auctor elit vel, aliquam erat.</div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-4">
                    <div className="card">
                        <div className="top"><span className="fas fa-fish" /></div>
                        <div className="bottom">In id massa consequat, auctor elit vel, aliquam erat.</div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-4">
                    <div className="card">
                        <div className="top"><span className="fas fa-hippo" /></div>
                        <div className="bottom">In id massa consequat, auctor elit vel, aliquam erat.</div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-4">
                    <div className="card">
                        <div className="top"><span className="fas fa-otter" /></div>
                        <div className="bottom">In id massa consequat, auctor elit vel, aliquam erat.</div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-4">
                    <div className="card">
                        <div className="top"><span className="fas fa-spider" /></div>
                        <div className="bottom">In id massa consequat, auctor elit vel, aliquam erat.</div>
                    </div>
                </div>
            </div>
            </div>
        </>
            
    );
  }
}

export default App;
