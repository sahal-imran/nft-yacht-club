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
import ReactPlayer from 'react-player';


function TheArt() {
    const router = useRouter();
    const PackageName = router.query.packagename;
    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: '#545454', py: 12 }} >
                <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                    <Zoom cascade >
                        {
                            router.pathname == '/membership' || PackageName == 'gold' || PackageName == 'platinum' ? <Typography variant="h2" sx={{
                                fontSize: {
                                    md: '74px',
                                    xs: '46px'
                                }, fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', textAlign: 'center',
                            }} component="div">
                                Become a Member
                            </Typography> : <Typography variant="h2" sx={{
                                fontSize: {
                                    md: '74px',
                                    xs: '46px'
                                }, fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', textAlign: 'center', textShadow: '0px 0px 6px white',
                            }} component="div">
                                The Art
                            </Typography>
                        }
                        {
                            router.pathname == '/membership' || PackageName == 'gold' || PackageName == 'platinum' ? <Typography variant="h2" sx={{
                                fontSize: {
                                    md: '34px',
                                    xs: '24px'
                                }, fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', textAlign: 'center',
                            }} component="div">
                                Please start by selecting one of the following
                            </Typography> : <Typography variant="h2" sx={{
                                fontSize: {
                                    md: '74px',
                                    xs: '46px'
                                }, fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', textAlign: 'center', textShadow: '0px 0px 6px white', display: 'none'
                            }} component="div">
                                The Art
                            </Typography>
                        }
                    </Zoom>
                    <Box sx={{
                        flexGrow: 1, width: {
                            md: '80%',
                            xs: '100%'
                        }, mt: 6
                    }}>
                        <Grid container rowSpacing={{ xs: 8, md: 0 }} columnSpacing={{ xs: 0, md: 2 }}>
                            <Grid item xs={12} md={6}>
                                <Box sx={{
                                    width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '48px', flexDirection: 'column', transition: 'all 0.3s ease'
                                }} >
                                    <Link href="/membership/gold">
                                        <a style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }} >
                                            <Box sx={{
                                                width: {
                                                    md: '432px',
                                                    xs: '100%'
                                                }
                                            }} className='player-wrapper'>
                                                <ReactPlayer
                                                    className='react-player'
                                                    url={router.pathname == '/about' ? '/video/video.mp4' : '/video/GOLD.mp4'}
                                                    width='100%'
                                                    height='100%'
                                                    volume={0.9}
                                                    controls={false}
                                                    muted={false}
                                                    playing={true}
                                                    loop={true}
                                                />
                                            </Box>
                                        </a>
                                    </Link>
                                    {
                                        router.pathname == '/membership' || PackageName == 'gold' || PackageName == 'platinum' ? <Zoom cascade >
                                            <Typography variant="h2" sx={{
                                                fontSize: '35px', lineHeight: '42px', fontFamily: 'Bitter', fontWeight: 'regular', color: 'white', textAlign: 'center', mt: 4, display: 'none'
                                            }} component="div">
                                                NFT Yacht Club Gold
                                            </Typography>
                                            <Typography variant="h2" sx={{
                                                fontSize: '30px', lineHeight: '40px', fontFamily: 'Bitter', fontWeight: 'regular', color: '#9A9A9A', textAlign: 'center', display: 'none'
                                            }} component="div">
                                                1 design
                                            </Typography>
                                        </Zoom> : <Zoom cascade >
                                            <Typography variant="h2" sx={{
                                                fontSize: '35px', lineHeight: '42px', fontFamily: 'Bitter', fontWeight: 'regular', color: 'white', textAlign: 'center', mt: 4
                                            }} component="div">
                                                NFT Yacht Club Gold
                                            </Typography>
                                            <Typography variant="h2" sx={{
                                                fontSize: '30px', lineHeight: '40px', fontFamily: 'Bitter', fontWeight: 'regular', color: '#9A9A9A', textAlign: 'center'
                                            }} component="div">
                                                1 design
                                            </Typography>
                                        </Zoom>
                                    }
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box sx={{
                                    width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '48px', flexDirection: 'column', transition: 'all 0.3s ease'
                                }} >
                                    <Link href="/membership/platinum">
                                        <a style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }} >
                                        <Box sx={{
                                                width: {
                                                    md: '432px',
                                                    xs: '100%'
                                                }
                                            }} className='player-wrapper'>
                                                <ReactPlayer
                                                    className='react-player'
                                                    url={router.pathname == '/about' ? '/video/video 2.mp4' : '/video/SILVER.mp4'}
                                                    width='100%'
                                                    height='100%'
                                                    volume={0.9}
                                                    controls={false}
                                                    muted={false}
                                                    playing={true}
                                                    loop={true}
                                                />
                                            </Box>
                                        </a>
                                    </Link>
                                    {
                                        router.pathname == '/membership' || PackageName == 'gold' || PackageName == 'platinum' ? <Zoom cascade >
                                            <Typography variant="h2" sx={{
                                                fontSize: '35px', lineHeight: '42px', fontFamily: 'Bitter', fontWeight: 'regular', color: 'white', textAlign: 'center', mt: 4, display: 'none'
                                            }} component="div">
                                                NFT Yacht Club Platinum
                                            </Typography>
                                            <Typography variant="h2" sx={{
                                                fontSize: '30px', lineHeight: '40px', fontFamily: 'Bitter', fontWeight: 'regular', color: '#9A9A9A', textAlign: 'center', display: 'none'
                                            }} component="div">
                                                1 design
                                            </Typography>
                                        </Zoom> : <Zoom cascade >
                                            <Typography variant="h2" sx={{
                                                fontSize: '35px', lineHeight: '42px', fontFamily: 'Bitter', fontWeight: 'regular', color: 'white', textAlign: 'center', mt: 4
                                            }} component="div">
                                                NFT Yacht Club Platinum
                                            </Typography>
                                            <Typography variant="h2" sx={{
                                                fontSize: '30px', lineHeight: '40px', fontFamily: 'Bitter', fontWeight: 'regular', color: '#9A9A9A', textAlign: 'center'
                                            }} component="div">
                                                1 design
                                            </Typography>
                                        </Zoom>
                                    }
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default TheArt;