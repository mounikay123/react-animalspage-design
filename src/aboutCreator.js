import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import zirafi  from  './pexels-photo-631228.jpeg';
class AboutCreator extends Component {
    render() {
        return (
            <div>
             <div className="container">
                 <div className="row">
                         <div className="col-md-5 ">
                             <img className="logo-imag2" src={zirafi} alt="Logo"  />
                         </div>
                         <div className="col-md-7">
                             <div class="bg-abt light-bg">
                                 <div class="container">
                                     <div class="title-desc  pb-sm-3">
                                         <h4 class="main-title-w3pvt">about creature</h4>
                                         <p>helping animals &amp; working on environmental issues.</p>
                                     </div>
                                     <div class="row flex-column mt-lg-4 mt-3">
                                         <div class="abt-grid">
                                             <div class="row">
                                                 <div class="col-sm-3">
                                                     <div class="abt-icon" data-blast="bgColor" style="background-color: rgb(22, 217, 233);">
                                                         <span class="fa fa-ravelry"></span>
                                                     </div>
                                                 </div>
                                                 <div class="col-sm-9 pl-sm-0">
                                                     <div class="abt-txt ml-sm-0">
                                                         <h4>sanctus takimata </h4>
                                                         <p>Lo sea takimata sanctus est Lorem ipolor sit amet, no sea takimata
                                                             sanctus est Loremsum dolor sit amet.</p>
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                         <div class="abt-grid mt-4 pt-lg-2">
                                             <div class="row">
                                                 <div class="col-sm-3">
                                                     <div class="abt-icon" data-blast="bgColor" style="background-color: rgb(22, 217, 233);">
                                                         <span class="fa fa-laptop"></span>
                                                     </div>
                                                 </div>
                                                 <div class="col-sm-9 pl-sm-0">
                                                     <div class="abt-txt ml-sm-0">
                                                         <h4>takimata sanctus</h4>
                                                         <p>Lo sea takimata sanctus est Lorem ipsum dolorsita.Lorem ipsum dolor
                                                             sit amet,sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                                             magna aliquyam erat, At vero eos et accusam et justo duo dolores et
                                                             ea
                                                             rebum. Lorem ipsum dolor sit amet, no sea takimata sanctus est
                                                             Lorem
                                                             ipsum dolor sit amet. Stet clita kasd gubergren.</p>
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
             </div>
            </div>
        );
    }
};

export default  AboutCreator;