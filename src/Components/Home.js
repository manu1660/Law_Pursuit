import React from "react";
import { useState } from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Grid, Typography, Paper, Box, Avatar} from "@mui/material";
import { Button } from "react-bootstrap";
import SimpleImageSlider from 'react-simple-image-slider'
import Navbar from "./Navbar";



const Home = () => {

  const images = [
    { url: "https://i.ibb.co/b5Gh5bT/img-1.jpg" },
    { url: "https://i.ibb.co/Xz9Xcc6/img-2.jpg" },
    { url: "https://i.ibb.co/dBgHyMW/img-3.jpg" },
    { url: "https://i.ibb.co/rH7bW4d/img-4.jpg" },

  ];
  // initial value ,  set value(function)
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1,setIsHovered1]= useState(false);
  const [isHovered2,setIsHovered2]= useState(false);
  const [isHovered3,setIsHovered3]= useState(false);
  const [isHovered4,setIsHovered4]= useState(false);
  const [isHovered5,setIsHovered5]= useState(false);
  const [isHovered6,setIsHovered6]= useState(false);
  const [isHovered7,setIsHovered7]= useState(false);
  const [isHovered8,setIsHovered8]= useState(false);
  const [isHovered9,setIsHovered9]= useState(false);
  return (
    <div  >

      <SimpleImageSlider    
        width="100%"
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={5}
      
      />

      <Grid item sx={{ alignItems: 'center', p: "100px", paddingTop: 0, paddingX: 0 }}>
        <Paper sx={{ p: 5, boxShadow: '0px 0px 15px rgba(0,0,0,0.5)' }}>
          <Typography variant='h5' sx={{ fontSize: 25, fontWeight: "bold", color: '#737373', marginLeft: '170px' }} gutterBottom >
            OUR TEAM <h3></h3>
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: "bold", fontSize: 40, color: '#737373', marginTop: '-55px', marginLeft: '335px' }}>|</Typography>

          <Typography variant='h6' sx={{ fontSize: 17, marginTop: '-45px', marginLeft: '380px' }} >
            Our Team is our confidence. We work to meet the golden standards of quality client <br />
            expectations and desired results by leveraging the capabilities of entire Firm, Effectively.
            <Button href="/team" variant="danger" style={{ marginTop: '-35px', marginLeft: '30px', fontSize: 20 }}>Know More</Button>
          </Typography>
        </Paper>

        <Grid item xs={12} >

          <Paper sx={{ p: 0, boxSizing: 'unset', boxShadow: '0px 0px 15px rgba(0,0,0,0.5)', height: '600px' }}>
            <img src="https://i.ibb.co/S0dsfph/img-practice-h.jpg" style={{ height: '600px', width: '400px' }}></img>
            <Typography variant='h5' sx={{ fontSize: 30, fontWeight: 'bold', color: '#cf2129', marginTop: '-550px', marginLeft: '450px', }} gutterBottom >
              Practice Focus
            </Typography>
            <Typography variant='h6' sx={{ fontSize: 15, marginLeft: '450px' }} >
              Law Pursuit is one of the fastest growing and commercially astute multi-disciplinary law firms in India with a mission to provide legal<br />
              services that compliment our creative, qualitative as well as pragmatic approach. Headquartered in Kochi, we combine our knowledge <br />
              and experience with a deep understanding of our client's business needs and work as partners to help them navigate through <br />
              challenges and capitalize on opportunities.
            </Typography>
          {/* box gridd */}
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
        <Avatar src="https://i.ibb.co/1qypvyM/icon-1.png" sx={{ height: '70px', width: '70px' }} />
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
        <Avatar src="https://i.ibb.co/z8zTzHT/icon-2.png" sx={{ height: '70px', width: '70px' }} />
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
        <Avatar src="https://i.ibb.co/VYyD7Jx/icon-3.png" sx={{ height: '70px', width: '70px',marginTop:'-20px' }} />
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
        <Avatar src="https://i.ibb.co/xHcWb3S/icon-4.png" sx={{ height: '70px', width: '70px' }} />
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
        <Avatar src="https://i.ibb.co/vjNcdbX/icon-5.png" sx={{ height: '70px', width: '70px' }} />
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
          url:('./images/logo1.png'),
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
        <Avatar src="https://i.ibb.co/m6pyQXS/icon-6.png" sx={{ height: '70px', width: '70px',marginTop:'-20px' }} />
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
        <Avatar src="https://i.ibb.co/gPvNBHJ/icon-7.png" sx={{ height: '70px', width: '70px' }} />
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
        <Avatar src="https://i.ibb.co/f9VscHB/icon-8.png" sx={{ height: '70px', width: '70px' }} />
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
        <Avatar src="https://i.ibb.co/37CRhsK/icon-9.png" sx={{ height: '70px', width: '70px' }} />
        <Typography variant="body1" align="center" marginTop="5px" style={{ color: isHovered8 ? 'white' : 'black' }}>
          Pharmaceutical <br/>and healthcare
        </Typography>
      </div>
    </Grid>

    <Grid item xs={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <div
        style={{
          top:'100px',
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
        <Avatar src="https://i.ibb.co/1qypvyM/icon-1.png" sx={{ height: '70px', width: '70px',marginTop:'-20px' }} />
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
    </div>




  );
}

export default Home;
