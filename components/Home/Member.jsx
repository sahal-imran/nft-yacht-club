import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Zoom from 'react-reveal/Zoom';

function Member() {
    return (
        <>
            <Box id='Member' sx={{ width: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#03171D', py: 8,mt:-1 }} >
                <Container maxWidth="lg" sx={{
                    minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', py: 8, px: 0
                }} >
                    <Zoom cascade >
                        <Typography variant="h2" sx={{
                            fontSize: {
                                md: '64px',
                                xs: '40px'
                            }, fontFamily: 'AvenirNextUltraLight', fontWeight: 600, color: '#FFFFFF', textTransform: 'capitalize', textAlign: 'center'
                        }} component="div">
                            Membership Info
                        </Typography>
                    </Zoom>
                    <Box sx={{
                        width: {
                            md: '100%',
                            xs: '90%'
                        }, display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 8
                    }} >
                        <Box sx={{
                            width: '20%', display: {
                                md: 'flex',
                                xs: 'none'
                            }, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', py: 4
                        }} >
                            <Box sx={{ width: '100%', height: '100px' }} ></Box>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start', alignItems: 'center', height: '90px', mt: 2 }} >
                                <Zoom cascade >
                                    <Typography variant="h2" sx={{
                                        fontSize: {
                                            md: '24px',
                                            xs: '12px'
                                        }, lineHeight: '51px', fontFamily: 'Bitter', fontWeight: 'medium', color: '#FFFFFF', textAlign: 'center',
                                    }} component="div">
                                        Membership cost
                                    </Typography>
                                </Zoom>
                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start', alignItems: 'center', height: '70px' }} >
                                <Zoom cascade >
                                    <Typography variant="h2" sx={{
                                        fontSize: {
                                            md: '24px',
                                            xs: '12px'
                                        }, lineHeight: '51px', fontFamily: 'Bitter', fontWeight: 'medium', color: '#FFFFFF', textAlign: 'center',
                                    }} component="div">
                                        Token Supply
                                    </Typography>
                                </Zoom>
                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start', alignItems: 'center', height: '70px' }} >
                                <Zoom cascade >
                                    <Typography variant="h2" sx={{
                                        fontSize: {
                                            md: '24px',
                                            xs: '12px'
                                        }, lineHeight: '51px', fontFamily: 'Bitter', fontWeight: 'medium', color: '#FFFFFF', textAlign: 'center',
                                    }} component="div">
                                        Artwork
                                    </Typography>
                                </Zoom>
                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start', alignItems: 'center', height: '70px' }} >
                                <Zoom cascade >
                                    <Typography variant="h2" sx={{
                                        fontSize: {
                                            md: '24px',
                                            xs: '12px'
                                        }, lineHeight: '51px', fontFamily: 'Bitter', fontWeight: 'medium', color: '#FFFFFF', textAlign: 'center',
                                    }} component="div">
                                        Guest Amount
                                    </Typography>
                                </Zoom>
                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: 'column', py: 2 }} >
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70px' }} ></Box>
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70px' }} ></Box>
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70px' }} ></Box>
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70px' }} ></Box>
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70px' }} ></Box>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: {
                                md: '60%',
                                xs: '100%'
                            }, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#12232C', borderRadius: "35px", py: 4, overflow: 'hidden'
                        }} >
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(138,202,227,0.2)', height: '100px', }} >
                                <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Zoom cascade >
                                        <Typography variant="h2" sx={{
                                            fontSize: {
                                                md: '42px',
                                                xs: '28px'
                                            }, lineHeight: '51px', fontFamily: 'Bitter', fontWeight: 'medium', color: '#FFFFFF', textAlign: 'center'
                                        }} component="div">
                                            Gold
                                        </Typography>
                                    </Zoom>
                                </Box>
                                <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                                    <Zoom cascade >
                                        <Typography variant="h2" sx={{
                                            fontSize: {
                                                md: '42px',
                                                xs: '28px'
                                            }, lineHeight: '51px', fontFamily: 'Bitter', fontWeight: 'medium', color: '#FFFFFF', textAlign: 'center'
                                        }} component="div">
                                            Platinum
                                        </Typography>
                                    </Zoom>
                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90px', mt: 2 }} >
                                <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Zoom cascade >
                                        <Typography variant="h2" sx={{
                                            fontSize: {
                                                md: '42px',
                                                xs: '28px'
                                            }, fontFamily: 'Bitter', fontWeight: 'medium', color: '#FFFFFF', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'
                                        }} component="div">
                                            <Box sx={{
                                                width: {
                                                    md: '46px',
                                                    xs: '30px'
                                                }, height: {
                                                    md: '46px',
                                                    xs: '30px'
                                                }, mr: 1
                                            }} >
                                                <img src="/eth.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="img" />
                                            </Box>
                                            1.5
                                        </Typography>
                                    </Zoom>
                                </Box>
                                <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                                    <Zoom cascade >
                                        <Typography variant="h2" sx={{
                                            fontSize: {
                                                md: '42px',
                                                xs: '28px'
                                            }, fontFamily: 'Bitter', fontWeight: 'medium', color: '#FFFFFF', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'
                                        }} component="div">
                                            <Box sx={{
                                                width: {
                                                    md: '46px',
                                                    xs: '30px'
                                                }, height: {
                                                    md: '46px',
                                                    xs: '30px'
                                                }, mr: 1
                                            }} >
                                                <img src="/eth.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="img" />
                                            </Box>
                                            5
                                        </Typography>
                                    </Zoom>
                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70px' }} >
                                <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Zoom cascade >
                                        <Typography variant="h2" sx={{
                                            fontSize: {
                                                md: '28px',
                                                xs: '16px'
                                            }, lineHeight: '51px', fontFamily: 'Bitter', fontWeight: 'medium', color: '#FFFFFF', textAlign: 'center',
                                        }} component="div">
                                            8,000 NFTs
                                        </Typography>
                                    </Zoom>
                                </Box>
                                <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                                    <Zoom cascade >
                                        <Typography variant="h2" sx={{
                                            fontSize: {
                                                md: '28px',
                                                xs: '16px'
                                            }, lineHeight: '51px', fontFamily: 'Bitter', fontWeight: 'medium', color: '#FFFFFF', textAlign: 'center',
                                        }} component="div">
                                            2,000 NFTs
                                        </Typography>
                                    </Zoom>
                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70px' }} >
                                <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Zoom cascade >
                                        <Typography variant="h2" sx={{
                                            fontSize: {
                                                md: '28px',
                                                xs: '16px'
                                            }, lineHeight: '51px', fontFamily: 'Bitter', fontWeight: 'medium', color: '#FFFFFF', textAlign: 'center',
                                        }} component="div">
                                            1 design
                                        </Typography>
                                    </Zoom>
                                </Box>
                                <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                                    <Zoom cascade >
                                        <Typography variant="h2" sx={{
                                            fontSize: {
                                                md: '28px',
                                                xs: '16px'
                                            }, lineHeight: '51px', fontFamily: 'Bitter', fontWeight: 'medium', color: '#FFFFFF', textAlign: 'center',
                                        }} component="div">
                                            1 design
                                        </Typography>
                                    </Zoom>
                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70px' }} >
                                <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Zoom cascade >
                                        <Typography variant="h2" sx={{
                                            fontSize: {
                                                md: '28px',
                                                xs: '16px'
                                            }, lineHeight: '51px', fontFamily: 'Bitter', fontWeight: 'medium', color: '#FFFFFF', textAlign: 'center',
                                        }} component="div">
                                            1 Guest
                                        </Typography>
                                    </Zoom>
                                </Box>
                                <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                                    <Zoom cascade >
                                        <Typography variant="h2" sx={{
                                            fontSize: {
                                                md: '28px',
                                                xs: '16px'
                                            }, lineHeight: '51px', fontFamily: 'Bitter', fontWeight: 'medium', color: '#FFFFFF', textAlign: 'center',
                                        }} component="div">
                                            9 Guests
                                        </Typography>
                                    </Zoom>
                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: 'rgba(84,113,124,0.2)', py: 2 }} >
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70px' }} >
                                    <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                        <Box sx={{ width: '46px', height: '46px', mr: 1 }} >
                                            <Zoom cascade >
                                                <img src="/goldTick.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="img" />
                                            </Zoom>
                                        </Box>
                                    </Box>
                                    <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                        <Box sx={{ width: '46px', height: '46px', mr: 1 }} >
                                            <Zoom cascade >
                                                <img src="/blueTick.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="img" />
                                            </Zoom>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70px' }} >
                                    <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                        <Box sx={{ width: '46px', height: '46px', mr: 1 }} >
                                            <Zoom cascade >
                                                <img src="/goldTick.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="img" />
                                            </Zoom>
                                        </Box>
                                    </Box>
                                    <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                        <Box sx={{ width: '46px', height: '46px', mr: 1 }} >
                                            <Zoom cascade >
                                                <img src="/blueTick.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="img" />
                                            </Zoom>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70px' }} >
                                    <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                        <Box sx={{ width: '46px', height: '46px', mr: 1 }} >
                                            <Zoom cascade >
                                                <img src="/goldTick.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="img" />
                                            </Zoom>
                                        </Box>
                                    </Box>
                                    <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                        <Box sx={{ width: '46px', height: '46px', mr: 1 }} >
                                            <Zoom cascade >
                                                <img src="/blueTick.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="img" />
                                            </Zoom>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70px' }} >
                                    <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                        <Box sx={{ width: '46px', height: '46px', mr: 1 }} >
                                            <Zoom cascade >
                                                <img src="/goldTick.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="img" />
                                            </Zoom>
                                        </Box>
                                    </Box>
                                    <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                        <Box sx={{ width: '46px', height: '46px', mr: 1 }} >
                                            <Zoom cascade >
                                                <img src="/blueTick.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="img" />
                                            </Zoom>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70px' }} >
                                    <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                        <Box sx={{ width: '46px', height: '46px', mr: 1 }} >
                                            <Zoom cascade >
                                                <img src="/goldTick.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="img" />
                                            </Zoom>
                                        </Box>
                                    </Box>
                                    <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                        <Box sx={{ width: '46px', height: '46px', mr: 1 }} >
                                            <Zoom cascade >
                                                <img src="/blueTick.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="img" />
                                            </Zoom>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: '20%', display: {
                                md: 'flex',
                                xs: 'none'
                            }, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', py: 4
                        }} >
                            <Box sx={{ width: '100%', height: '100px' }} ></Box>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90px', mt: 2 }} >

                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70px' }} >

                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70px' }} >

                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70px' }} >
                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', py: 2 }} >
                                <Box sx={{
                                    width: '100%', display: 'flex', justifyContent: 'start', ml: {
                                        md: 8
                                    }, alignItems: 'center', height: '70px',position:'relative'
                                }} >
                                    <Zoom cascade >
                                        <Typography variant="h2" sx={{
                                            fontSize: {
                                                md: '24px',
                                                xs: '12px'
                                            }, fontFamily: 'Bitter', fontWeight: 'medium', color: '#FFFFFF'
                                        }} component="div">
                                            Main Dining Rom
                                        </Typography>
                                    </Zoom>
                                    <Zoom cascade >
                                        <Typography variant="h2" sx={{
                                            fontSize: {
                                                md: '20px',
                                                xs: '12px'
                                            }, fontFamily: 'Bitter', fontWeight: 'medium', color: '#34EFFE',position:'absolute',left:'0px',top:'-26px'
                                        }} component="div">
                                            ACCESS
                                        </Typography>
                                    </Zoom>
                                </Box>
                                <Box sx={{
                                    width: '100%', display: 'flex', justifyContent: 'start', ml: {
                                        md: 8
                                    }, alignItems: 'center', height: '70px'
                                }} >
                                    <Zoom cascade >
                                        <Typography variant="h2" sx={{
                                            fontSize: {
                                                md: '24px',
                                                xs: '12px'
                                            }, fontFamily: 'Bitter', fontWeight: 'medium', color: '#FFFFFF'
                                        }} component="div">
                                            The Havana Room
                                            (Private Event Space)
                                        </Typography>
                                    </Zoom>
                                </Box>
                                <Box sx={{
                                    width: '100%', display: 'flex', justifyContent: 'start', ml: {
                                        md: 8
                                    }, alignItems: 'center', height: '70px'
                                }} >
                                    <Zoom cascade >
                                        <Typography variant="h2" sx={{
                                            fontSize: {
                                                md: '24px',
                                                xs: '12px'
                                            }, fontFamily: 'Bitter', fontWeight: 'medium', color: '#FFFFFF',
                                        }} component="div">
                                            Cigar Lounge / Cocktail Lounge
                                        </Typography>
                                    </Zoom>
                                </Box>
                                <Box sx={{
                                    width: '100%', display: 'flex', justifyContent: 'start', ml: {
                                        md: 8
                                    }, alignItems: 'center', height: '70px'
                                }} >
                                    <Zoom cascade >
                                        <Typography variant="h2" sx={{
                                            fontSize: {
                                                md: '24px',
                                                xs: '12px'
                                            }, fontFamily: 'Bitter', fontWeight: 'medium', color: '#FFFFFF'
                                        }} component="div">
                                            Rooftop Lounge (Sky Deck)
                                        </Typography>
                                    </Zoom>
                                </Box>
                                <Box sx={{
                                    width: '100%', display: 'flex', justifyContent: 'start', ml: {
                                        md: 8
                                    }, alignItems: 'center', height: '70px'
                                }} >
                                    <Zoom cascade >
                                        <Typography variant="h2" sx={{
                                            fontSize: {
                                                md: '24px',
                                                xs: '12px'
                                            }, fontFamily: 'Bitter', fontWeight: 'medium', color: '#FFFFFF'
                                        }} component="div">
                                            The Vegas Strip Room
                                            (Night Club)
                                        </Typography>
                                    </Zoom>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Zoom cascade >
                        <Button variant='contained' sx={{
                            width: {
                                md: '307px',
                                xs: '200px'
                            }, height: {
                                md: "86px",
                                xs: '60px'
                            }, borderRadius: '50px', fontSize: {
                                md: '26px',
                                xs: '16px'
                            }, color: 'white', fontFamily: 'AvenirNextRegular', fontWeight: 600, textTransform: 'capitalize', boxShadow: 'none', transition: 'all 0.3s ease', background: 'linear-gradient(#535353,#B5B5B5 )', "&:hover": {
                                background: 'linear-gradient(#535353,#B5B5B5 )', boxShadow: 'none'
                            }, mt: 10
                        }} >
                            Buy Now
                        </Button>
                    </Zoom>
                </Container>
            </Box>
        </>
    )
}

export default Member;

// backgroundColor: '#12232C', borderRadius: "35px",