import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Zoom from 'react-reveal/Zoom';

function Hero() {
    return (
        <>
            <Box id='HeroAbout' sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <Box sx={{ width: '100%', height: '100%', background: "black", minHeight: '100vh', }} >
                    <Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', filter: "blur(0px) opacity(100%) brightness(100%)" }} >
                        <Zoom cascade >
                            <Typography variant="h2" sx={{
                                fontSize: {
                                    md: '99px',
                                    xs: '46px'
                                }, fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'uppercase', textAlign: 'center', textShadow: '0px 0px 6px white',
                            }} component="div">
                                The NFT Yacht Club
                            </Typography>
                        </Zoom>
                        <Zoom cascade >
                            <Typography variant="h2" sx={{
                                fontSize: {
                                    md: '30px',
                                    xs: '16px'
                                },lineHeight: {
                                    md:'36px',
                                    xs:'24px'
                                }, fontFamily: 'Bitter', fontWeight: 'medium', color: 'white', textAlign: 'center', mt: 4
                            }} component="div">
                                The NFT Yacht Club is the world’s first members-only cocktail lounge on the water where membership is purchased as in NFT and owned by the token holder.
                            </Typography>
                        </Zoom>
                        <Zoom cascade >
                            <Typography variant="h2" sx={{
                                fontSize: {
                                    md: '30px',
                                    xs: '14px'
                                },lineHeight: {
                                    md:'36px',
                                    xs:'24px'
                                }, fontFamily: 'Bitter', fontWeight: 'medium', color: 'white', textAlign: 'center', mt: 2
                            }} component="div">
                                Created by Yacht Events LLC, a team with over 25 years in the luxury yacht events industry. But don’t just take our word for it! Look to the organizations that rely on us to meet their yacht needs. Our clients are principally fortune 500 companies who need creatively designed and flawlessly executed yacht events. They work with us because we do it all and we do it well.
                            </Typography>
                        </Zoom>
                        <Zoom cascade >
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
                                }, mt: 8
                            }} >
                                Become a Member
                            </Button>
                        </Zoom>
                    </Container>
                </Box>
            </Box>
            <Box id='HeroAboutBottom' sx={{ minHeight: '40vh' }} ></Box>
        </>
    )
}

export default Hero;