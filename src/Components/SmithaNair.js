import React from "react";
import { Grid, Typography, Paper, Box, Avatar } from "@mui/material";
import images from './images/team.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { RxDotFilled } from "react-icons/rx"
import { LinkedIn } from "@mui/icons-material";
import { useState } from "react";
const SmithaNair = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);
  const [isHovered9, setIsHovered9] = useState(false);
  return (
    <Grid container>
      <Grid item xs={12} sx={{ backgroundImage: `url(${images})`, backgroundRepeat: "no-repeat", height: '500px' }}>
        <h1 style={{ color: 'white', fontSize: '45px', fontWeight: 700, position: 'absolute', left: '250px', top: '180px' }}>Team</h1>
        <Grid item xs={12} sx={{ alignItems: 'center', mt: 27, p: "100px" }}>
          <Paper sx={{ p: 5, height: '520px' }}>
            <Typography gutterBottom >
              <div class="image">
                <img src="https://i.ibb.co/r7rr7PX/partner-1.jpg"></img>
                <div style={{ color: '#737373', fontWeight: 500, fontSize: '25px', lineHeight: 1.5, fontFamily: 'inherit' }}>SMITHA NAIR</div>
                <div style={{ color: '#4c4c4c', fontSize: '18px' }}>PARTNER</div>
                <div class="w500" style={{ color: '#737373', fontWeight: 700 }}>Key Focus Areas :</div>
                <ul>
                  <li><RxDotFilled />Contract & Company Laws</li>
                  <li><RxDotFilled />Cyber Laws</li>
                  <li><RxDotFilled />IPR Laws</li>
                  <li><RxDotFilled />Entertainment and Media Law</li>
                </ul>

                <div class="w501" style={{ color: '#737373', fontWeight: 700 }}>Professional Memberships</div>
                <ul>
                  <li><RxDotFilled />Kerala Bar Council (2006)</li>
                </ul>

                <div class="social">
                  <button type="button" style={{ marginLeft: '60px' }} class="btn btn-primary"><a href="https://www.linkedin.com/in/adv-smitha-d-nair-79332711"><LinkedIn style={{ marginTop: '-5px' }} />LinkedIn</a></button>

                </div>
              </div>
            </Typography>

            <Typography variant='h6' sx={{ fontSize: 15, marginLeft: '350px', marginTop: '-475px' }} >
              <p>Smitha is a Partner at Magus Legal. She has over decade of professional work experience <br /> and specializes in Contract and Company laws, Entertainment & Media laws, Cyber laws <br /> and IPR laws.</p>
              <p>Smitha has represented various leading MNCs and Fortune 500 companies, such as <br /> Facebook and YouTube in matters relating to Corporate, contractual, employment and <br /> regulatory matters. As mentor, she advises several start-up companies and has assisted <br /> them with setting up of their companies, registering their Intellectual properties and <br /> safeguarding their IP assets.</p>
              <p>She has a particular focus on media and entertainment laws and has advised various <br /> leading production houses, television channels and writers/artists in matters pertaining to <br /> piracy, copyright and movie related agreements. Additionally, she has also counselled <br /> several broadcasting channels in signing up Agreements related to satellite rights of <br /> movies, agreements with YouTube, Facebook among others.</p>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sx={{ mt: -12 }}>

          <Paper sx={{ p: 0, boxSizing: 'unset', boxShadow: '0px 0px 15px rgba(0,0,0,0.5)', height: '550px' }}>
            <img src="https://i.ibb.co/S0dsfph/img-practice-h.jpg" style={{ height: '550px', width: '380px' }}></img>
            <Typography variant='h5' sx={{ fontSize: 30, fontWeight: 'bold', color: '#cf2129', marginTop: '-500px', marginLeft: '450px' }} gutterBottom >
              Practice Focus
            </Typography>
            <Typography variant='h6' sx={{ fontSize: 15, marginLeft: '450px' }} >
              Law Pursuit is one of the fastest growing and commercially astute multi-disciplinary law firms in India with a mission to provide legal<br />
              services that compliment our creative, qualitative as well as pragmatic approach. Headquartered in Kochi, we combine our knowledge <br />
              and experience with a deep understanding of our client's business needs and work as partners to help them navigate through <br />
              challenges and capitalize on opportunities.
            </Typography>

            <Box sx={{ flexGrow: 3 }}>
              <Grid container xs={12} marginTop='30px' marginLeft='300px'>
                <Grid item xs={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                  
                  <div
                    style={{
                      width: '130px',
                      height: '130px',
                      borderRadius: '5px',
                      // background color = if ishovered is true then #0072b7 otherwise transparent
                      backgroundColor: isHovered ? '#0072b7' : 'transparent',
                      transition: 'background-color 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <a href="/corporate_commericial_laws">
                    <Avatar src="https://i.ibb.co/1qypvyM/icon-1.png"  sx={{ height: '70px', width: '70px' }} /></a>
                    <Typography variant="body1" align="center" marginTop="5px" style={{ color: isHovered ? 'white' : 'black' }}>
                      Corporate Law <br />and Practice
                    </Typography>
                  </div>
                </Grid>

                <Grid item xs={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                  <div
                    style={{
                      width: '130px',
                      height: '130px',
                      borderRadius: '5px',
                      backgroundColor: isHovered1 ? '#337ab7' : 'transparent',
                      transition: 'background-color 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)}
                  >
                    <a href="/entertainment_law_media">
                    <Avatar src="https://i.ibb.co/z8zTzHT/icon-2.png" sx={{ height: '70px', width: '70px' }} /></a>
                    <Typography variant="body1" align="center" marginTop="5px" style={{ color: isHovered1 ? 'white' : 'black' }}>
                      Entertainment <br />and Media Law
                    </Typography>
                  </div>
                </Grid>

                <Grid item xs={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                  <div
                    style={{
                      width: '130px',
                      height: '130px',
                      borderRadius: '5px',
                      backgroundColor: isHovered2 ? '#337ab7' : 'transparent',
                      transition: 'background-color 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                  >
                    <a href="/income_tax">
                    <Avatar src="https://i.ibb.co/VYyD7Jx/icon-3.png" sx={{ height: '70px', width: '70px', marginTop: '-20px' }} /></a>
                    <Typography variant="body1" align="center" marginTop="5px" style={{ color: isHovered2 ? 'white' : 'black' }}>
                      Income Tax
                    </Typography>
                  </div>
                </Grid>

                <Grid item xs={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                  <div
                    style={{
                      width: '130px',
                      height: '130px',
                      borderRadius: '5px',
                      backgroundColor: isHovered3 ? '#337ab7' : 'transparent',
                      transition: 'background-color 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onMouseEnter={() => setIsHovered3(true)}
                    onMouseLeave={() => setIsHovered3(false)}
                  >
                    <a href="/real_estate_education">
                    <Avatar src="https://i.ibb.co/xHcWb3S/icon-4.png" sx={{ height: '70px', width: '70px' }} /></a>
                    <Typography variant="body1" align="center" marginTop="5px" style={{ color: isHovered3 ? 'white' : 'black' }}>
                      Real Estate and <br />Construction
                    </Typography>
                  </div>
                </Grid>

                <Grid item xs={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                  <div
                    style={{
                      width: '130px',
                      height: '130px',
                      borderRadius: '5px',
                      backgroundColor: isHovered4 ? '#337ab7' : 'transparent',
                      transition: 'background-color 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onMouseEnter={() => setIsHovered4(true)}
                    onMouseLeave={() => setIsHovered4(false)}
                  >
                    <a href="/intellectual_property">
                    <Avatar src="https://i.ibb.co/vjNcdbX/icon-5.png" sx={{ height: '70px', width: '70px' }} /></a>
                    <Typography variant="body1" align="center" marginTop="5px" style={{ color: isHovered4 ? 'white' : 'black' }}>
                      Intellectual <br />Property Rights
                    </Typography>
                  </div>
                </Grid>
              </Grid>

              <Grid container xs={12} marginTop='60px' marginLeft='300px'>
                <Grid item xs={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                  <div
                    style={{
                      width: '130px',
                      height: '130px',
                      borderRadius: '5px',
                      backgroundColor: isHovered5 ? '#337ab7' : 'transparent',
                      transition: 'background-color 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onMouseEnter={() => setIsHovered5(true)}
                    onMouseLeave={() => setIsHovered5(false)}
                  >
                    <a href="/telecom&IT">
                    <Avatar src="https://i.ibb.co/m6pyQXS/icon-6.png" sx={{ height: '70px', width: '70px', marginTop: '-20px' }} /></a>
                    <Typography variant="body1" align="center" marginTop="5px" style={{ color: isHovered5 ? 'white' : 'black' }}>
                      Telecom & IT
                    </Typography>
                  </div>
                </Grid>

                <Grid item xs={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                  <div
                    style={{
                      width: '130px',
                      height: '130px',
                      borderRadius: '5px',
                      backgroundColor: isHovered6 ? '#337ab7' : 'transparent',
                      transition: 'background-color 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onMouseEnter={() => setIsHovered6(true)}
                    onMouseLeave={() => setIsHovered6(false)}
                  >
                    <a href="/dispute_resolution">
                    <Avatar src="https://i.ibb.co/gPvNBHJ/icon-7.png" sx={{ height: '70px', width: '70px' }} /></a>
                    <Typography variant="body1" align="center" marginTop="5px" style={{ color: isHovered6 ? 'white' : 'black' }}>
                      Dispute Resolution
                    </Typography>
                  </div>
                </Grid>

                <Grid item xs={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                  <div
                    style={{
                      width: '130px',
                      height: '130px',
                      borderRadius: '5px',
                      backgroundColor: isHovered7 ? '#337ab7' : 'transparent',
                      transition: 'background-color 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onMouseEnter={() => setIsHovered7(true)}
                    onMouseLeave={() => setIsHovered7(false)}
                  >
                    <a href="/employment_labour_law">
                    <Avatar src="https://i.ibb.co/f9VscHB/icon-8.png" sx={{ height: '70px', width: '70px' }} /></a>
                    <Typography variant="body1" align="center" marginTop="5px" style={{ color: isHovered7 ? 'white' : 'black' }}>
                      Employment & <br />Labour Laws
                    </Typography>
                  </div>
                </Grid>

                <Grid item xs={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                  <div
                    style={{
                      width: '130px',
                      height: '130px',
                      borderRadius: '5px',
                      backgroundColor: isHovered8 ? '#337ab7' : 'transparent',
                      transition: 'background-color 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onMouseEnter={() => setIsHovered8(true)}
                    onMouseLeave={() => setIsHovered8(false)}
                  >
                    <a href="/pharmaceutical_healthcare">
                    <Avatar src="https://i.ibb.co/37CRhsK/icon-9.png" sx={{ height: '70px', width: '70px' }} /></a>
                    <Typography variant="body1" align="center" marginTop="5px" style={{ color: isHovered8 ? 'white' : 'black' }}>
                      Pharmaceutical <br />and healthcare
                    </Typography>
                  </div>
                </Grid>

                <Grid item xs={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                  <div
                    style={{
                      width: '130px',
                      height: '130px',
                      borderRadius: '5px',
                      backgroundColor: isHovered9 ? '#337ab7' : 'transparent',
                      transition: 'background-color 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onMouseEnter={() => setIsHovered9(true)}
                    onMouseLeave={() => setIsHovered9(false)}
                  >
                    <a href="/litigation">
                    <Avatar src="https://i.ibb.co/1qypvyM/icon-1.png" sx={{ height: '70px', width: '70px', marginTop: '-20px' }} /></a>
                    <Typography variant="body1" align="center" marginTop="5px" style={{ color: isHovered9 ? 'white' : 'black' }}>
                      Litigation
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>

      </Grid>
    </Grid>
  )
}

export default SmithaNair