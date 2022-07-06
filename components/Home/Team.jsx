import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import Zoom from 'react-reveal/Zoom';

function Team() {
    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: '#1C1C1C', pt: 8, mt: -1 }} >
                <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                    <Zoom cascade >
                        <Typography variant="h2" sx={{
                            width: {
                                md: '350px',
                                sm: '250px',
                                xs: '200px'
                            }, background: "#1C1C1C",
                            fontSize: {
                                md: '64px',
                                xs: '40px'
                            }, fontFamily: 'AvenirNextUltraLight', fontWeight: 600, color: '#FFFFFF', textTransform: 'capitalize', textAlign: 'center', lineHeight: {
                                md: '85px'
                            }, position: 'relative', zIndex: 1
                        }} component="div">
                            The Team
                        </Typography>
                    </Zoom>
                    <Box sx={{
                        width: '100%', height: '1px', backgroundColor: '#95BCCE', mt: {
                            md: -5,
                            sm: -4,
                            xs: -3
                        }
                    }} ></Box>
                    <Box sx={{ flexGrow: 1, width: '100%', mt: 10 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Box sx={{
                                    width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '48px', flexDirection: 'column', px: 4, py: {
                                        md: 8,
                                        xs: 6
                                    }, "&:hover": {
                                        boxShadow: '0px 3px 70px rgba(255, 255, 255, 0.4) inset',
                                        border: '1px solid white',
                                    }, border: '1px solid transparent', transition: 'all 0.3s ease'
                                }} >
                                    <Box sx={{ width: '200px', height: '200px' }} >
                                        <Zoom cascade >
                                            <img src="/3.png" alt="img" style={{ width: '100%', height: '100%' }} />
                                        </Zoom>
                                    </Box>
                                    <Zoom cascade >
                                        <Typography variant="h2" sx={{
                                            fontSize: {
                                                md: '20px',
                                                xs: '16px'
                                            }, lineHeight: '24px', fontFamily: 'Bitter', fontWeight: 'medium', color: '#34EFFE', textAlign: 'center', mt: 4
                                        }} component="div">
                                            Co-Founder
                                        </Typography>
                                        <Typography variant="h2" sx={{
                                            fontSize: {
                                                md: '24px',
                                                xs: '14px'
                                            }, lineHeight: '30px', fontFamily: 'Bitter', fontWeight: 'regular', color: 'white', textAlign: 'center', mt: 1
                                        }} component="div">
                                            Hidayet Kilic
                                        </Typography>
                                    </Zoom>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{
                                    width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '48px', flexDirection: 'column', px: 4, py: {
                                        md: 8,
                                        xs: 6
                                    }, "&:hover": {
                                        boxShadow: '0px 3px 70px rgba(255, 255, 255, 0.4) inset',
                                        border: '1px solid white',
                                    }, border: '1px solid transparent', transition: 'all 0.3s ease'
                                }} >
                                    <Box sx={{ width: '200px', height: '200px' }} >
                                        <Zoom cascade >
                                            <img src="/1.png" alt="img" style={{ width: '100%', height: '100%' }} />
                                        </Zoom>
                                    </Box>
                                    <Zoom cascade >
                                        <Typography variant="h2" sx={{
                                            fontSize: {
                                                md: '20px',
                                                xs: '16px'
                                            }, lineHeight: '24px', fontFamily: 'Bitter', fontWeight: 'medium', color: '#34EFFE', textAlign: 'center', mt: 4
                                        }} component="div">
                                            Co-Founder
                                        </Typography>
                                        <Typography variant="h2" sx={{
                                            fontSize: {
                                                md: '25px',
                                                xs: '14px'
                                            }, lineHeight: '30px', fontFamily: 'Bitter', fontWeight: 'regular', color: 'white', textAlign: 'center', mt: 1
                                        }} component="div">
                                            Steven Tanzman
                                        </Typography>
                                    </Zoom>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{
                                    width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '48px', flexDirection: 'column', px: 4, py: {
                                        md: 8,
                                        xs: 6
                                    }, "&:hover": {
                                        boxShadow: '0px 3px 70px rgba(255, 255, 255, 0.4) inset',
                                        border: '1px solid white',
                                    }, border: '1px solid transparent', transition: 'all 0.3s ease'
                                }} >
                                    <Box sx={{ width: '200px', height: '200px' }} >
                                        <Zoom cascade >
                                            <img src="/2.png" alt="img" style={{ width: '100%', height: '100%' }} />
                                        </Zoom>
                                    </Box>
                                    <Zoom cascade >
                                        <Typography variant="h2" sx={{
                                            fontSize: {
                                                md: '20px',
                                                xs: '16px'
                                            }, lineHeight: '24px', fontFamily: 'Bitter', fontWeight: 'medium', color: '#34EFFE', textAlign: 'center', mt: 4
                                        }} component="div">
                                            Co-Founder
                                        </Typography>
                                        <Typography variant="h2" sx={{
                                            fontSize: {
                                                md: '25px',
                                                xs: '14px'
                                            }, lineHeight: '30px', fontFamily: 'Bitter', fontWeight: 'regular', color: 'white', textAlign: 'center', mt: 1
                                        }} component="div">
                                            Jason Rodriguez
                                        </Typography>
                                    </Zoom>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Zoom cascade >
                        <Zoom cascade >
                        </Zoom>
                        <Typography variant="h2" sx={{
                            fontSize: {
                                md: '24px',
                                xs: '16px'
                            }, lineHeight: '30px', fontFamily: 'Bitter', fontWeight: 'light', color: 'white', textAlign: 'center', mt: 6
                        }} component="div">
                            With more than 25 years of achievements in the luxury yacht and hospitality industries, Steven Tanzman has a rare depth of experience in the flawless execution of one-of-a-kind elegant events.<br />
                            <br />
                            Founded in 2003, his company, Yacht Events LLC, coordinates 5-star cuisine, service, and staged entertainment abroad world-class yachts and venues. Clients and guests include billionaire George Soros, business mogul Donald Trump, fashion icon Donna Karan, the Saudi Arabian Royal family, United Nations ambassadors, and several world champion teams of the NFL-NBA-NHL and MLB.<br />
                            <br />
                            As president of Yacht Events, Mr. Tanzman regularly navigates the course separating success from failure, where months or sometimes years of planning come down to a few hours with countless details perfectly executed. He always meets the challenge, whether it’s a private yacht sailing to an unconventional docking spot or hundreds of staff and rentals coordinated and brought to an island accessible only by ferry. His events range from small family or corporate celebrations to large galas with more than 2,000 guests.<br />
                        </Typography>
                    </Zoom>
                </Container>
                <Box id='ReadyToBoard' sx={{ width: '100%', mt: 18 }} >
                    <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', flexDirection: 'column', }} >
                        <Zoom cascade >
                            <Typography variant="h2" sx={{
                                fontSize: '40px', fontFamily: "AvenirNextBoldItallic", fontWeight: 900, color: '#FFFFFF', textTransform: 'capitalize', textAlign: 'center', lineHeight: {
                                    md: '53px'
                                }, position: 'relative', zIndex: 1
                            }} component="div">
                                Ready to board?
                            </Typography>
                            <Button variant='contained' sx={{
                                width: {
                                    md: '344px',
                                    xs: '200px'
                                }, height: {
                                    md: "86px",
                                    xs: '60px'
                                }, borderRadius: '50px', fontSize: {
                                    md: '26px',
                                    xs: '16px'
                                }, color: 'white', fontFamily: 'AvenirNextUltraLight', fontWeight: 600, textTransform: 'capitalize', boxShadow: 'none', transition: 'all 0.3s ease', background: 'linear-gradient(#535353,#B5B5B5 )', "&:hover": {
                                    background: 'linear-gradient(#535353,#B5B5B5 )', boxShadow: 'none'
                                }, mt: 4
                            }} >
                                Become a Member
                            </Button>
                        </Zoom>
                    </Container>
                </Box>
            </Box>
        </>
    )
}

export default Team;