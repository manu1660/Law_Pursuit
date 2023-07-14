import React from "react";
import { Grid, Typography, Paper ,Box, Avatar, colors,fontSize} from "@mui/material";
import images from './images/telecom.jpg'
import { RxDotFilled } from "react-icons/rx"
import { useState } from "react";
const Litigation = () => {
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
    return(
        <Grid container>
            <Grid item xs={12} sx={{ backgroundImage: `url(${images})`, backgroundRepeat:"no-repeat",height:'500px'}}>
            <h1 style={{color:'white', fontSize:'45px',fontWeight:700,position:'absolute',left:'100px',top:'180px'}}>Practice Focus</h1>
                <Grid item xs={12} sx={{ alignItems:'center', mt: 27, p: "100px" }}>
                    <Paper sx={{ p: 5, boxShadow:'0px 0px 15px rgba(0,0,0,0.5)' }}>
                        <Typography variant='h5' sx={{ fontSize: 25, fontWeight:"bold",color:'#cf2129' }} gutterBottom >
                        Litigation
                        </Typography>

                        <Typography variant='h6' sx={{ fontSize: 15,lineHeight:2}} >
                        In our law firm, we offer comprehensive litigation services specifically tailored to the legal landscape in India. 
                        Our experienced team of litigators is well-versed in Indian laws and practices, representing clients in various courts 
                        and tribunals throughout the country. Here's an overview of our litigation services in India:
                         </Typography>
                         <br />
                         <Typography variant='h6' sx={{ fontSize: 15,lineHeight:2}}>
                         Some of the services that Law Pursuit regularly provides for our telecommunication industry clients include:
                         <ul>
                            <li><RxDotFilled />Civil Litigation: We handle a wide range of civil litigation matters, including contract disputes, property disputes, tort claims, consumer disputes, and more. Our lawyers assist clients in filing or defending civil suits before the appropriate civil courts.</li>
                            <li><RxDotFilled />Commercial Litigation: We represent businesses and individuals in commercial litigation matters, including breach of contract, partnership disputes, intellectual property disputes, debt recovery, insolvency proceedings, and corporate litigation. We have extensive experience in handling complex commercial disputes at all levels of courts.</li>
                            <li><RxDotFilled />Constitutional and Administrative Litigation: Our firm handles cases involving constitutional law, public interest litigation (PIL), and administrative law. We represent clients before the High Courts and the Supreme Court of India, challenging government actions, seeking remedies, and protecting constitutional rights.</li>
                            <li><RxDotFilled />Criminal Defense: Our skilled criminal defense lawyers provide legal representation to clients facing criminal charges in both trial courts and appellate courts. We handle various criminal matters, including white-collar crimes, fraud, cybercrime, and more</li>
                            <li><RxDotFilled />Tax Litigation: Our team assists clients in tax-related disputes, representing them before tax tribunals, appellate authorities, and courts. We handle matters related to income tax, goods and services tax (GST), customs and excise, and other tax-related issues.
                                    Family Court disputes</li>
                            <li><RxDotFilled />Appellate Advocacy: We have a strong track record of appellate advocacy, representing clients in appeals before the High Courts and the Supreme Court of India. Our lawyers have the expertise to present persuasive arguments and effectively challenge lower court decisions.</li>
                            <li><RxDotFilled />Legal Research and Opinion: Our firm offers comprehensive legal research and opinion services to clients. We provide in-depth analysis, case law research, and written legal opinions to support clients' legal positions and decision-making.</li>
                            <li><RxDotFilled />Client Communication and Support: We prioritize effective communication with our clients throughout the litigation process. We provide regular updates, strategic advice, and ensure that clients are well-informed about their case's progress and potential outcomes.</li>
                            
                        </ul>
                        </Typography>
                    </Paper>  
                </Grid>
            
                <Grid item xs={12} >
                <Paper sx={{ p: 0, boxSizing: 'unset', boxShadow: '0px 0px 15px rgba(0,0,0,0.5)', height: '600px',marginTop:'-100px' }}>
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
export default Litigation;