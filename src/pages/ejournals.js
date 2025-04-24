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
function Ejournals() {
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
                                        <Link to="/links"><img src={linkslogo} alt="Journals" className="journal-logo-nav" /></Link>  
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
            <h1><img src ={ejournalpagelogo} width="70px" height="60px"  ></img>e-Journals</h1>
            {/* <div className="btech-branches"> */}
{/* 
                            <div className="btech-name">
                                        B.Tech:

                            </div>
   
                            <div className="branches">
                                    <div className="CSE-back">
                                            <div className="span">CSE</div>
                                        </div>
                                        <div className="ECE-back">
                                            <div className="span">ECE</div>
                                        </div>
                                        <div className="EEE-back">
                                            <div className="span">EEE</div>
                                        </div>
                                        <div className="CIVIL-back">
                                            <div className="span"> CIVIL</div>
                                        </div>
                                        <div className="SH-back">
                                            <div className="span">SH</div>
                                        </div>
                            </div>
            </div>
            <div className="btech-branches">
                <div className="btech-name">
                          Diploma:

                </div>
                <div className="branches">
                    
                        <div className="dce-back">
                                <div  className="span" >DCE</div>
                            </div>
                            <div className="dme-back">
                                <div  className="span" >DME</div>
                            </div>
                            <div className="deee-back">
                                <div  className="span" > DEEE</div>
                            </div>
                            <div className="dece-back">
                                <div  className="span" >DECE</div>
                            </div>
                            <div className="dcme-back">
                                <div  className="span" >DCME</div>
                            </div>

                </div>
          
            </div> */}
            <div className='journals-container'>
                <div className='journal-matter'>You can access the paid journals through the free e-resources option offered by the Digital Library.
             <br></br>   For the credentials for the journal platforms listed below, get in touch with the college library. </div>




                <div className="journals-logo-container">
                            <div className='knimbus'>
                               <a href='https://www.knimbus.com'><img className='knimbus-logo' src={knimbuslogo}></img></a> 
                                
                            </div>
                            <div className='delnet'>
                            <a href='http://www.delnet.in/'><img className='delnet-logo' src={delnetlogo}></img></a>  

                            </div>
                            <div className='nlist'>
                            <a href=' https://nlist.inflibnet.ac.in/'> <img className="nlist-logo" src={nlistlogo}></img></a> 

                            </div>

                </div>
               

            </div>
                
                    
               
            </div>
        </div>
    );
}

export default Ejournals;