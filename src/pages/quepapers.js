import React,{useEffect,useContext} from 'react';
import logo from "../logos/gist.jpeg";
import nptellogo from "../logos/nptellogo.png";
import book from "../logos/e-books.png";
import journal from "../logos/jounals.png";
import logoutlogo from "../logos/logout.png";
import passwordlogo from "../logos/password.png";
import {Link,useNavigate} from "react-router-dom"
import "./nptel.css";
 
import qplogo from "../logos/qplogo.png"
import nbalogo from "../logos/nbalogo.png"
import naaclogo from "../logos/naaclogo.png"
import {store} from "../App"
import { useToast } from '../components/ToastProvider';
import {jwtDecode} from "jwt-decode"
import linkslogo from "../logos/other links.png"


function Quepapers() {
    const { showToast } = useToast();
    const[token]=useContext(store)
    const storedToken = localStorage.getItem('token');
    const navigate = useNavigate();
   

    useEffect(() => {
        if (!token || !storedToken) {
            showToast('error', 'Please login again');
            navigate('/');
        } else {
            try {
                const decodedToken = jwtDecode(storedToken);
                const currentTime = Date.now() / 1000;

                if (decodedToken.exp < currentTime) {
                    showToast('warning', 'Session expired. Please login again.');
                    localStorage.removeItem('token');
                    navigate('/');
                }
            } catch (error) {
                console.error("Invalid token:", error);
                showToast('error', 'Invalid token. Please login again.');
                localStorage.removeItem('token');
                navigate('/');
            }
        }
    }, [storedToken, navigate, token, showToast]);

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
            <h1>Question Papers</h1>
            <div className='journal-matter'>Depending on your branch, determine your needs.</div>
            <div className="btech-branches">
                <div className='btech-name'>
                               B.Tech:  

                </div>
                <div className="branches">
                              <div className="SH-back">
                                <a style={{ textDecoration:"none"}}href="https://drive.google.com/drive/folders/12sUJlwULAjwiN3svr2jr-IexOpEDyBIN" ><div className='span'>S&H</div></a>
                                </div>
                            <div className="CSE-back">
                            <a style={{ textDecoration:"none"}}href="https://drive.google.com/drive/folders/17bRQ4D-XL3bu7156HafTZlT0d3AVdgQ3" >
                            <div className='span'>CSE</div></a>
                                    
                                </div>
                                <div className="ECE-back">
                                <a style={{ textDecoration:"none"}}href="https://drive.google.com/drive/folders/19kA3_GaEe12yxSgLnwtstj_kZLVPFSbk" ><div className='span'>ECE</div></a>
                                </div>
                                <div className="EEE-back">
                                <a style={{ textDecoration:"none"}}href="https://drive.google.com/drive/folders/1PU-s30udnPhLpXvtV3sLf87AtUA6Suc8" ><div className='span'>EEE</div></a>
                                </div>
                                <div className="CIVIL-back">
                                    <a style={{ textDecoration:"none"}}href="https://drive.google.com/drive/folders/1eZciSXDc6Xc4zOuIhQyfA8NyLCKKK-7h" ><div className='span'>CIVIL</div></a>
                                </div>
                                <div className="SH-back">
                                <a style={{ textDecoration:"none"}}href="https://drive.google.com/drive/folders/12sSY94CvU_K-cUN4GVhm1SlbsiaFKdRE" ><div className='span'>MECH</div></a>
                                </div>
                    </div>

          
                        
            </div>
            <div className="btech-branches">
                <div className='btech-name'> 
                           Diploma:

                </div>
                <div className="branches">
                    
                            <div className="dce-back">
                                <a style={{ textDecoration:"none"}}href="https://drive.google.com/drive/folders/1GRwR1cO84k8dqf1NCm8xHkDbbGTEmQXr" ><div className='span'>DCE</div></a>
                                </div>
                                <div className="dme-back">
                                <a style={{ textDecoration:"none"}}href="https://drive.google.com/drive/folders/1ukwDK4zNT_kr0qs4Ypdq6q4p6GSaKDAC" ><div className='span'>DME</div></a>
                                </div>
                                <div className="deee-back">
                                    <a style={{ textDecoration:"none"}}href="https://drive.google.com/drive/folders/1JZ3BJIenp0HKg0NeANzz6E_Ml86q3RAF" ><div className='span'>DEEE</div></a>
                                </div>
                                <div className="dece-back">
                                    <a style={{ textDecoration:"none"}}href="https://drive.google.com/drive/folders/1X3dDBHoFckhkGtCQ2oPdcIjVHEYMm1kh" ><div className='span'>DECE</div></a>
                                </div>
                                <div className="dcme-back">
                                    <a style={{ textDecoration:"none"}}href="https://drive.google.com/drive/folders/1l-tjOsi3aLQqk1XoX2QyUkZnuZffGLQ4" ><div className='span'>DCME</div></a>
                                </div>
                                 <div className="dcme-back">
                                    <a style={{ textDecoration:"none"}}href="https://drive.google.com/drive/folders/1Cr1837Oze831_DFtu1JLTbGEk9QjoprA" ><div className='span'>Common</div></a>
                                </div>

                </div>

            
            </div>
                
                    
               
            </div>
        </div>
    );
}

export default Quepapers;
