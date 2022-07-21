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
import Zoom from 'react-reveal/Zoom';

function MintSchedule() {
    return (
        <>
            <Box id='MintSchedule' sx={{ width: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', py: 14 }} >
                <Container maxWidth="lg" sx={{
                    minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#12232C', borderRadius: "35px", py: 8, px: 0, mx: {
                        md: 0,
                        xs: 2
                    }
                }} >
                    <Zoom cascade >
                        <Typography variant="h2" sx={{
                            fontSize: {
                                md: '64px',
                                xs: '40px'
                            }, fontFamily: 'AvenirNextUltraLight', fontWeight: 600, color: '#FFFFFF', textTransform: 'uppercase', textAlign: 'center', textShadow: '0px 0px 6px white', lineHeight: {
                                md: '85px'
                            }
                        }} component="div">
                            mint schedule
                        </Typography>
                    </Zoom>
                    <Box sx={{ width: '90%', height: '1px', backgroundColor: '#95BCCE', opacity: .2, mt: 4 }} ></Box>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 8 }} >
                        <Box sx={{
                            width: '50%', display: 'flex', justifyContent: 'start', alignItems: 'center', px: {
                                md: 0,
                                xs: 2
                            }
                        }} >
                            <Zoom cascade >
                                <Typography variant="h2" sx={{
                                    fontSize: {
                                        md: '20px',
                                        xs: '12px'
                                    }, lineHeight: '24px', fontFamily: 'Bitter', fontWeight: 'medium', color: '#34EFFE', textAlign: 'center', ml: {
                                        md: 20
                                    }
                                }} component="div">
                                    TIme (us eastern time)
                                </Typography>
                            </Zoom>
                        </Box>
                        <Box sx={{ width: '50%', display: 'flex', justifyContent: 'start', alignItems: 'center' }} >
                            <Zoom cascade >
                                <Typography variant="h2" sx={{
                                    fontSize: {
                                        md: '20px',
                                        xs: '12px'
                                    }, lineHeight: '24px', fontFamily: 'Bitter', fontWeight: 'medium', color: '#34EFFE', textAlign: 'center',
                                }} component="div">
                                    MINT OPENS FOR
                                </Typography>
                            </Zoom>
                        </Box>
                    </Box>
                    <Box sx={{
                        width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(84,113,124,0.2)', height: {
                            md: '90px',
                            xs: '60px'
                        }, mt: {
                            md: 2,
                            xs: 1
                        }, px: 2
                    }} >
                        <Box sx={{ width: '50%', display: 'flex', justifyContent: 'start', alignItems: 'center' }} >
                            <Zoom cascade >
                                <Typography variant="h2" sx={{
                                    fontSize: {
                                        md: '54px',
                                        xs: '24px'
                                    }, fontFamily: 'AvenirNextUltraLight', fontWeight: 600, color: '#FFFFFF', textTransform: 'uppercase', textShadow: '0px 0px 6px white', ml: {
                                        md: 18
                                    }
                                }} component="div">
                                    {/* 12:00 PM */}
                                    TBA
                                </Typography>
                            </Zoom>
                        </Box>
                        <Box sx={{ width: '50%', display: 'flex', justifyContent: 'start', alignItems: 'center' }} >
                            <Zoom cascade >
                                <Typography variant="h2" sx={{
                                    fontSize: {
                                        md: '54px',
                                        xs: '24px'
                                    }, fontFamily: 'AvenirNextUltraLight', fontWeight: 600, color: '#FFFFFF', textShadow: '0px 0px 6px white'
                                }} component="div">
                                    Whitelist
                                </Typography>
                            </Zoom>
                        </Box>
                    </Box>
                    <Box sx={{
                        width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', py: 2, px: {
                            md: 4,
                            xs: 2
                        }
                    }} >
                        <Box sx={{
                            width: '50%', display: {
                                md: 'flex',
                                xs: 'none'
                            }, justifyContent: 'start', alignItems: 'center'
                        }} >
                        </Box>
                        <Box sx={{
                            width: {
                                md: '50%',
                                xs: '100%'
                            }, display: 'flex', justifyContent: 'start', alignItems: 'center'
                        }} >
                            <Zoom cascade >
                                <Typography variant="h2" sx={{
                                    fontSize: {
                                        md: '30px',
                                        xs: '20px'
                                    }, fontFamily: 'Bitter', fontWeight: 'medium', color: '#FFFFFF',
                                }} component="div">
                                    5,000 Tokens<br />
                                    4,000 Gold<br />
                                    1000 Platinum<br />
                                    <br />
                                    → Wallets that won a guaranteed spot. Show up anytime in this window and easily mint your pass. If you don’t mint during this time, your pass may be claimed by someone on the waitlist.
                                </Typography>
                            </Zoom>
                        </Box>
                    </Box>
                    {/* ++++++++++++++++ */}
                    <Box sx={{
                        width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(84,113,124,0.2)', height: {
                            md: '90px',
                            xs: '60px'
                        }, mt: {
                            md: 2,
                            xs: 1
                        }, px: 2
                    }} >
                        <Box sx={{ width: '50%', display: 'flex', justifyContent: 'start', alignItems: 'center' }} >
                            <Zoom cascade >
                                <Typography variant="h2" sx={{
                                    fontSize: {
                                        md: '54px',
                                        xs: '24px'
                                    }, fontFamily: 'AvenirNextUltraLight', fontWeight: 600, color: '#FFFFFF', textTransform: 'uppercase', textShadow: '0px 0px 6px white', ml: {
                                        md: 18
                                    }
                                }} component="div">
                                    {/* 1:00 PM */}
                                    TBA
                                </Typography>
                            </Zoom>
                        </Box>
                        <Box sx={{ width: '50%', display: 'flex', justifyContent: 'start', alignItems: 'center' }} >
                            <Zoom cascade >
                                <Typography variant="h2" sx={{
                                    fontSize: {
                                        md: '54px',
                                        xs: '24px'
                                    }, fontFamily: 'AvenirNextUltraLight', fontWeight: 600, color: '#FFFFFF', textShadow: '0px 0px 6px white'
                                }} component="div">
                                    Public Lunch
                                </Typography>
                            </Zoom>
                        </Box>
                    </Box>
                    <Box sx={{
                        width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', py: 2, px: {
                            md: 4,
                            xs: 2
                        }
                    }} >
                        <Box sx={{
                            width: '50%', display: {
                                md: 'flex',
                                xs: 'none'
                            }, justifyContent: 'start', alignItems: 'center'
                        }} >
                        </Box>
                        <Box sx={{
                            width: {
                                md: '50%',
                                xs: '100%'
                            }, display: 'flex', justifyContent: 'start', alignItems: 'center'
                        }} >
                            <Zoom cascade >
                                <Typography variant="h2" sx={{
                                    fontSize: {
                                        md: '30px',
                                        xs: '20px'
                                    }, fontFamily: 'Bitter', fontWeight: 'medium', color: '#FFFFFF',
                                }} component="div">
                                    Remaining tokens will
                                    be available for mint
                                    during this period to the
                                    public.
                                </Typography>
                            </Zoom>
                        </Box>
                    </Box>
                    {/* ++++++++++++++++ */}
                    <Box sx={{
                        width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(84,113,124,0.2)', height: {
                            md: '90px',
                            xs: '60px'
                        }, mt: {
                            md: 2,
                            xs: 1
                        }, px: 2
                    }} >
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            <Zoom cascade >
                                <Typography variant="h2" sx={{
                                    fontSize: {
                                        md: '54px',
                                        xs: '24px'
                                    }, fontFamily: 'AvenirNextUltraLight', fontWeight: 600, color: '#FFFFFF', textShadow: '0px 0px 6px white'
                                }} component="div">
                                    Reserves
                                </Typography>
                            </Zoom>
                        </Box>
                    </Box>
                    <Box sx={{
                        width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', py: 2, px: {
                            md: 4,
                            xs: 2
                        }
                    }} >
                        <Box sx={{
                            width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'
                        }} >
                            <Zoom cascade >
                                <Typography variant="h2" sx={{
                                    fontSize: {
                                        md: '30px',
                                        xs: '20px'
                                    }, fontFamily: 'Bitter', fontWeight: 'medium', color: '#FFFFFF',
                                }} component="div">
                                    500 tokens<br />
                                    400 Gold<br />
                                    100 Platinum<br />
                                </Typography>
                            </Zoom>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default MintSchedule;