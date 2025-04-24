import React,{useEffect,useContext} from 'react'
import logo from "../logos/gist.jpeg"
import nptellogo from "../logos/nptellogo.png"
import book from "../logos/e-books.png"
import journal from "../logos/jounals.png"
import logoutlogo from "../logos/logout.png"
import passwordlogo from "../logos/password.png"
import {Link,useNavigate} from "react-router-dom"
import "./nptel.css"
import ejournalpagelogo from "../logos/journal-page-logo.png"
import qplogo from "../logos/qplogo.png"
import nbalogo from "../logos/nbalogo.png"
import naaclogo from "../logos/naaclogo.png"
import {store} from "../App"
import {jwtDecode} from "jwt-decode"
import delnetlogo from "../logos/delnet-logo.png"
import nlistlogo from "../logos/nlist-logo.jpeg"
import knimbuslogo from "../logos/knimbus-logo.png"
import linkslogo from "../logos/other links.png"
import ndli from "../logos/ndli.jpg"
import bookboon from "../logos/bookboon.jpg"
import pdfdrive from "../logos/pdfdrive.png"
import faadooengineers from "../logos/faadooengineers.jpg"
import coursera from "../logos/coursera.png"
import obooko from "../logos/obooko.png"
import niscir from "../logos/niscir.jpg"
import scientificresearch from "../logos/scientificresearch.png"
import springeropen from "../logos/springeropen.png"
import oajse from "../logos/oajse.jpg"
function OpenLinks() {
    const[token]=useContext(store)
    const storedToken = localStorage.getItem('token');
    const navigate = useNavigate();
   


    useEffect(() => {
        if (!token || !storedToken) {
            alert("Please login again");
            navigate('/');
        } else {
            try {
                const decodedToken = jwtDecode(storedToken);
                const currentTime = Date.now() / 1000;
    
                if (decodedToken.exp < currentTime) {
                    alert("Session expired. Please login again.");
                    localStorage.removeItem('token');
                    navigate('/');
                }
            } catch (error) {
                console.error("Invalid token:", error);
                alert("Invalid token. Please login again.");
                localStorage.removeItem('token');
                navigate('/');
            }
        }
    }, [storedToken, navigate, token]);

    return (
        <div className="nptel-main">
            
           <div className="navbar">
                    <div className="gist-logo-container">
                                            <Link to="/UserDashboard"> <img className="nav-img" src={logo} alt="logo" /></Link> 
                                            <div className="estd">Estd:2008</div>
                    
                                            </div>
                       <div className="navbar-name">
                           <h1>GEETHANJALI INSTITUTE OF SCIENCE AND TECHNOLOGY</h1>
                           <h2>(AUTONOMOUS INSTITUTION)</h2>
                           <h6 className="add-nav"> 3<sup>rd</sup>Mile, Nellore-Bombay Highway,Gangavaram(V),Kovur(Md),SPSR Nellore Dt.Andhra Pradesh,India-524137</h6>
           
                       </div>
                       <div className="logos"> 
                                              <img className='nba-logo' src={nbalogo} alt="nba"></img>
                                              <img className='naac-logo' src={naaclogo} alt="naac"></img>
                       
                                              </div>
             </div>
                <div className="sidebar-nav">
                                <div className="sidebar-menu-nav">
                                    <div className="menu-1-nav">
                                        <div className="logo-container-nav">
                                        <Link to="/Nptel"> <img src={nptellogo} alt="NPTEL" className="nptel-logo-nav" /></Link>
                                            <span className="tooltip-text-nav">NPTEL Videos</span>
                                        </div>
                                        <div className="logo-container-nav">
                                        <Link to="/E-books"><img src={book} alt="Books" className="book-logo-nav" /></Link> 
                                            <span className="tooltip-text-nav">e-Books</span>
                                        </div>
                                        
                                         <div className="logo-container-nav">
                                         <p className="qp">Q&P</p>
                                              <Link to="/quepapers"><img src={qplogo} alt="Logout" className="qp-logo-nav" /></Link>  
                                                 <span className="tooltip-text-nav">Question Papers</span>
                                         </div>
                                         <div className="logo-container-nav">
                                        <Link to="/E-journals"><img src={journal} alt="Journals" className="journal-logo-nav" /></Link>  
                                            <span className="tooltip-text-nav">e-Journals</span>
                                        </div>
                                         <div className="logo-container-nav">
                                        <Link to="/E-journals"><img src={linkslogo} alt="Journals" className="journal-logo-nav" /></Link>  
                                            <span className="tooltip-text-nav">other links</span>
                                        </div>
                                    </div>
                                    <div className="menu-2-nav">
                                        <div className="logo-container-nav">
                                           <Link to="/changepass"><img src={passwordlogo} alt="Change Password" className="password-logo-nav" /></Link> 
                                            <span className="tooltip-text-nav">Change Password</span>
                                        </div>
                                        <div className="logo-container-nav">
                                            <Link to="/"><img src={logoutlogo} alt="Logout" className="logout-logo-nav" /></Link>  
                                            <span className="tooltip-text-nav">Logout</span>
                                        </div>
                                      
                                    </div>
                                </div>
                            </div>
                       
                
            <div className="nptel-page-content">
            <h1>Open access Links</h1>
           
           
           <div className='openlinks-main-container'>
                        <div className="openlinks-matter">
                        You can go through the open access platforms where you can find many e-journals, publishers, e-books etc..
                    
                            
                        </div>
                        <div className='openlinks-container'>
                                <div className='national-dl'>
                                    <a href="https://ndl.iitkgp.ac.in/"> <img className='ndli-logo' src={ndli}></img> </a> 
                                </div>
                                <div className='bookboon'>
                                <a href="https://www.bookboon.com"> <img className='bookboon-logo' src={bookboon}></img> </a>   
                                </div>
                                <div className='pdf-drive'>
                                <a href="https://www.pdfdrive.com/category/43">   <img className='pdfdrive-logo' src={pdfdrive}></img></a>  
                                </div>
                                <div className="faadoo engineers">
                                <a href=" https://www.faadooengineers.com">   <img className='faadoo-logo' src={faadooengineers}></img></a>  

                                </div>
                                <div className="coursera">
                                <a href="https://www.coursera.org">  <img className='coursera-logo' src={coursera}></img></a>   

                                </div>
                                <div className='obooko'>
                                <a href="https://www.obooko.com">  <img className='obooko-logo' src={obooko}></img></a>  

                                </div>
                                <div className='niscair'>
                                <a href=" http://op.niscair.res.in">   <img className='niscir-logo' src={niscir}></img></a>  
                                </div>
                                <div className='scientific-research'>
                                <a href=" https://www.scirp.org/journal/index.aspx"><img className='scienceresearch-logo' src={scientificresearch}></img> </a>   
                                </div>
                                <div className="springer-open">
                                <a href="https://www.springeropen.com">  <img className='springer-logo' src={springeropen}></img> </a> 
                                </div>
                                {/* <div className="oajse">
                                <a href="http://oajse.com/a-z/a.html">  <img className='oajse-logo' src={oajse}></img> </a>  
                                </div> */}

                            </div>
           </div>
          
         
                
                    
               
            </div>
        </div>
    );
}

export default OpenLinks;