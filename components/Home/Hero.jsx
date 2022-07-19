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
import ReactPlayer from 'react-player';
import Zoom from 'react-reveal/Zoom';

function Hero() {
    return (
        <>
            <Box id='Hero' sx={{ width: '100%',display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                    <Zoom cascade >

                    <Typography variant="h2" sx={{
                        fontSize: {
                            md:'99px',
                            xs:'40px'
                        }, fontFamily: 'AvenirNextUltraLight', fontWeight: 600, color: '#FFFFFF', textTransform: 'uppercase',textAlign:'center',textShadow: '0px 0px 6px white',
                    }} component="div">
                        The NFT Yacht Club
                    </Typography>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:{
                                md:'row',
                                xs:'column'
                            }, mt: 4 }} >
                        <Box sx={{
                            width: {
                                md: '100%',
                                xs: '100%'
                            },display: 'flex', justifyContent: 'center', alignItems: {
                                md:'start',
                                xs:'center'
                            },flexDirection:'column'
                        }} >
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width:{
                                md:'100%',
                                xs:'100%'
                            }, height: {
                                md:'450px',
                                xs:'auto'
                            }, borderRadius: '48px', border: '1px solid white', boxShadow: '0px 3px 70px rgba(255, 255, 255, 0.4) inset', p: {
                                md:6,
                                xs:4
                            } }} >
                                <Typography variant="h2" sx={{
                                    fontSize: {
                                        md:'22px',
                                        xs:'16px'
                                    },lineHeight: {
                                        md:'30px',
                                        xs:'24px'
                                    }, fontFamily: 'Bitter', fontWeight: 'medium', color: '#FFFFFF',textAlign:'center'
                                }} component="div">
                                    <Box component={'span'} sx={{ fontSize: {
                                        md:'32px',
                                        xs:'20px'
                                    }, color: 'white', mr: 1 }} >THE NFT YACHT CLUB</Box>
                                    is the first decentralized members-only yacht club where membership is purchased on the blockchain as a non-fungible token (NFT) and owned by the token holder to gain access to our cocktail lounge, cigar lounge, fine dining, and outdoor sky deck.
                                </Typography>
                                <Button variant='contained' sx={{
                                    width: {
                                        md:'307px',
                                        xs:'200px'
                                    }, height: {
                                        md:"86px",
                                        xs:'60px'
                                    }, borderRadius: '50px', fontSize: {
                                        md:'26px',
                                        xs:'16px'
                                    }, color: 'white', fontFamily: 'AvenirNextRegular', fontWeight: 600, textTransform: 'capitalize', boxShadow: 'none', transition: 'all 0.3s ease', background: 'linear-gradient(#535353,#B5B5B5 )', "&:hover": {
                                        background: 'linear-gradient(#535353,#B5B5B5 )', boxShadow: 'none'
                                    }, mt: 8
                                }} >
                                    Become a Member
                                </Button>
                            </Box>
                        </Box>
                        {/* <Box sx={{
                            width: {
                                md: '50%',
                                xs: '100%'
                            }, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden',mt:{
                                md:0,
                                xs:4
                            }
                        }} >
                            <Box sx={{ width: '100%', height: {
                                md:'440px',
                                xs:'300px'
                            } }} className='player-wrapper'>
                                <ReactPlayer
                                    className='react-player'
                                    url='https://youtu.be/oen0AmDy38k'
                                    width='100%'
                                    height='100%'
                                    volume={0.9}
                                    controls={true}
                                    muted={false}
                                    playing={false}
                                    loop={true}
                                />
                            </Box>
                        </Box> */}
                    </Box>
                    </Zoom>
                </Container>
            </Box>
        </>
    )
}

export default Hero;
