import React from "react";
import { Grid, Link} from "@mui/material";

import "./Navbar.css";
// import { hover } from "@testing-library/user-event/dist/hover";


const Navbar = () => {
    
    return (
        <nav className="navbar">
            <div className='container'>
            
            <Grid   >
                
                <ul className="navlinks">
                    <li>
                        <a href="/">
                        <img src="https://i.ibb.co/F5w639M/logo1.png" alt="Logo" className="logo"></img>
                        </a>
                    </li>

                    {/* <li><a href='/'> 
                        Home</a>
                        </li> */}
                
                    <li><a href='/firm_profile'> 
                    The Firm</a>
                    </li>


                    <li><a href='/middle_east_practice'>
                    Middle East Practice</a> 
                    </li>
                    
                    <li class="nav-item dropdown dropdown-hover"   >
                    <a  class="nav-link dropdown-toggle text-black"  href="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false"  >
                      Practice Focus </a>
                        <ul class="dropdown-menu"style={{lineHeight:1}}>
                            <li><a class="dropdown-item" href="/corporate_commericial_laws">Corporate Law and Practice</a></li>
                            <li><a class="dropdown-item" href="/entertainment_law_media">Entertainment and Media Law</a></li>
                            <li><a class="dropdown-item" href="/income_tax">Income Tax</a></li>
                            <li><a class="dropdown-item" href="/real_estate_education">Real Estate and Construction</a></li>
                            <li><a class="dropdown-item" href="/intellectual_property">Intellectual Property</a></li>
                            <li><a class="dropdown-item" href="/telecom&IT">Telecom & IT</a></li>
                            <li><a class="dropdown-item" href="/dispute_resolution">Dispute Resolution</a></li>
                            <li><a class="dropdown-item" href="/employment_labour_law">Employment and Labour Laws</a></li>
                            <li><a class="dropdown-item" href="/pharmaceutical_healthcare">Pharmaceutical and Healthcare</a></li>
                            <li><a class="dropdown-item" href="/litigation">Litigation</a></li>
                            <li><a class="dropdown-item" href="/family_court_services">Family Court Services</a></li>
                        </ul>
                    </li>
                    

                    <li class="nav-item dropdown dropdown-hover">
                    <a class="nav-link dropdown-toggle text-black" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                      Team </a>
                        <ul class="dropdown-menu" style={{lineHeight:1}}>
                            <li><a class="dropdown-item" href="/smitha_nair">Smitha Nair</a></li>
                            <li><a class="dropdown-item" href="/jay_sankar">Jay Sankar</a></li> 
                        </ul>
                    </li>
                    

                    <li><a href='/work_with_us'> 
                    Work with Us</a>
                    </li>
                    

                    <li><a href='/contact'> 
                    Contact</a>
                    </li>
                </ul>
                

            </Grid>
            </div>
        </nav>
   
       

                    
    )
}


export default Navbar;