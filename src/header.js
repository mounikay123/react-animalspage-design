/*class Header extends Component{
 render(){
 return(
 <div>
 <div className="container m-0">
 {/!*  <section className="customer-logos slider">

 <div className="slide"><img className="logo-imag" src={elephant} alt="Logo"  /></div>
 <div className="slide"> <img className="logo-imag" src={zirafi} alt="Logo"  /></div>
 <div className="slide"><img className="logo-imag" src={zirafi2} alt="Logo"  /></div>


 </section>*!/}
 <div id="myCarousel" className="carousel slide" data-ride="carousel">

 <ol className="carousel-indicators">
 <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
 <li data-target="#myCarousel" data-slide-to="1"></li>
 <li data-target="#myCarousel" data-slide-to="2"></li>
 </ol>


 <div className="carousel-inner">
 <div className="item active">
 <img src="la.jpg" alt="Los Angeles"></img>
 </div>

 <div className="item">
 <img src="chicago.jpg" alt="Chicago"></img>
 </div>

 <div className="item">
 <img src="ny.jpg" alt="New York"></img>
 </div>
 </div>

 <a className="left carousel-control" href="#myCarousel" data-slide="prev">
 <span className="glyphicon glyphicon-chevron-left"></span>
 <span className="sr-only">Previous</span>
 </a>
 <a className="right carousel-control" href="#myCarousel" data-slide="next">
 <span className="glyphicon glyphicon-chevron-right"></span>
 <span className="sr-only">Next</span>
 </a>
 </div>
 <nav className="navbar navbar-expand-lg navbar-light fixed-top  p-0">
 <h1>
 <a className="navbar-brand cret-col"  data-blast="color" >
 CREATURE
 </a>
 </h1>
 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
 <span className="navbar-toggler-icon"></span>
 </button>
 <div className="collapse navbar-collapse" id="navbarSupportedContent">
 <ul className="navbar-nav mx-lg-auto text-center">
 <li className="nav-item active">
 <a className="nav-link  nav-brd" href="index.html" data-blast="color">Home
 <span className="sr-only">(current)</span>
 </a>
 </li>
 <li className="nav-item  mt-lg-0 mt-3">
 <a className="nav-link scroll" href="#about">about</a>
 </li>
 <li className="nav-item mt-lg-0 mt-3">
 <a className="nav-link scroll" href="#services">features</a>
 </li>
 <li className="nav-item dropdown mt-lg-0 mt-3">
 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
 Dropdown
 </a>
 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
 <a className="dropdown-item scroll nav-link" href="#plans">pricing</a>
 <a className="dropdown-item scroll nav-link" href="#team">team</a>
 <a className="dropdown-item scroll nav-link" href="#portfolio">portfolio</a>
 <a className="dropdown-item scroll nav-link" href="#posts">latest posts</a>
 </div>
 </li>
 <li className="nav-item  mt-lg-0 mt-3">
 <a className="nav-link scroll" href="#contact">Contact</a>
 </li>
 </ul>
 <div>
 <span className="fa fa-user text-white icon-back"></span>
 </div>

 </div>

 </nav>
 </div>
 </div>

 )
 }
 }*/
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import elephant from './lion-safari-afika-landscape-40756.jpeg';
import zirafi  from  './pexels-photo-631228.jpeg';
import zirafi2  from  './pexels-photo-750538.jpeg';

class DemoCarousel extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid pad-lef-right">
                    <Carousel>
                        <div>
                            <img className="logo-imag" src={elephant} alt="Logo"  />
                            <div className="carousel-caption">
                                <h3 className="heading-sty">Protect WildLife</h3>
                                <span className="Lin-sty"><hr /></span>
                                <p className="para-sty">We Move the World To Protect Animals</p>
                                <button className="btn btn-lg view-btn">View</button>
                            </div>
                        </div>
                        <div>
                            <img className="logo-imag" src={zirafi} alt="Logo"  />
                            <div className="carousel-caption">
                                <h3 className="heading-sty">Discover Creature</h3>
                                <span className="Lin-sty"><hr /></span>
                                <p className="para-sty">We Move the World To Protect Animals</p>
                                <button className="btn btn-lg view-btn">View</button>
                            </div>
                        </div>
                        <div>
                            <img className="logo-imag" src={zirafi2} alt="Logo"  />
                            <div className="carousel-caption">
                                <h3 className="heading-sty">Animals Foundation</h3>
                                <span className="Lin-sty"><hr /></span>
                                <p className="para-sty">We Move the World To Protect Animals</p>
                                <button className="btn btn-lg view-btn">View</button>
                            </div>
                        </div>
                    </Carousel>
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top  p-0">
                        <h1>
                            <a className="navbar-brand cret-col" data-blast="color">
                                CREATURE
                            </a>
                        </h1>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-lg-auto text-center">
                                <li className="nav-item active">
                                    <a className="nav-link  nav-brd" href="index.html" data-blast="color">Home
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item  mt-lg-0 mt-3">
                                    <a className="nav-link scroll" href="#about">about</a>
                                </li>
                                <li className="nav-item mt-lg-0 mt-3">
                                    <a className="nav-link scroll" href="#services">features</a>
                                </li>
                                <li className="nav-item dropdown mt-lg-0 mt-3">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item scroll nav-link" href="#plans">pricing</a>
                                        <a className="dropdown-item scroll nav-link" href="#team">team</a>
                                        <a className="dropdown-item scroll nav-link" href="#portfolio">portfolio</a>
                                        <a className="dropdown-item scroll nav-link" href="#posts">latest posts</a>
                                    </div>
                                </li>
                                <li className="nav-item  mt-lg-0 mt-3">
                                    <a className="nav-link scroll" href="#contact">Contact</a>
                                </li>
                            </ul>
                            <div>
                                <span className="fa fa-user text-white icon-back"></span>

                            </div>

                        </div>
                    </nav>
                </div>
            </div>
        );
    }
};

export default  DemoCarousel;
