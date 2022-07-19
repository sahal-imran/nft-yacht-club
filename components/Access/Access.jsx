import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccessButton from './AccessButton';
import Zoom from 'react-reveal/Zoom';

function Access() {
    return (
        <>
            <Box id='Access' sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',mt:{
                md:0,
                xs:-'2px'
            } }} >
                <Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                <Zoom cascade >
                    <Typography variant="h2" sx={{
                        fontSize: {
                            md: '74px',
                            xs: '40px'
                        }, fontFamily: 'AvenirNextUltraLight', fontWeight: 600, color: '#FFFFFF', textTransform: 'capitalize', textAlign: 'center'
                    }} component="div">
                        The Access
                    </Typography>
                    <Typography variant="h2" sx={{
                        fontSize: {
                            md: '24px',
                            xs: '16px'
                        },lineHeight: {
                            md:'36px',
                            xs:'24px'
                        }, fontFamily: 'Bitter', fontWeight: 'light', color: '#FFFFFF', textAlign: 'center', mt: 4
                    }} component="div">
                        Ownership of this NFT will represent exclusive access to a network of yachts around the world. The NFT Yacht Club will primarily begin by allowing token holders access to a luxurious 4-story yacht which will include a fine dining, cigar lounge, cocktail lounge, and social experiences in New York City and Miami with the long-term goal of expanding internationally. Onboard the USCG-certified yacht we will offer a variety of drinks ranging from pre-prohibition cocktails to modern mojitos. We have collaborated with the most seasoned mixologist in New York to guarantee a fresh new experience.
                    </Typography>
                    <Box sx={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
                            md: 'row',
                            xs: 'column'
                        }, mt: 6
                    }} >
                        <AccessButton to={'/about'} text={'About'} />
                        <Box sx={{
                            mx: {
                                md: 4
                            }, my: {
                                md: 0,
                                xs: 3
                            }
                        }} >
                            <AccessButton to={'/howitworks'} text={'How it Works'} />
                        </Box>
                        <AccessButton to={'/faq'} text={'FAQ'} />
                    </Box>
                    </Zoom>
                </Container>
            </Box>
        </>
    )
}

export default Access