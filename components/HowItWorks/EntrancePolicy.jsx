import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Zoom from 'react-reveal/Zoom';

function EntrancePolicy() {
    return (
        <>
            <Box id={'Reservations'} sx={{
                width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
                    md: 'row',
                    xs: 'column'
                }, p: 4, backgroundColor: '#12232C',mt:-1,pb:{
                    md:0,
                    xs:6
                }
            }} >
                <Box sx={{
                    width: {
                        md: '40%',
                        xs: '90%'
                    }, height: {
                        md: '850px'
                    }, borderTopRightRadius: {
                        md: '42px'
                    }, borderBottomRightRadius: {
                        md: '42px'
                    }, overflow: 'hidden', ml: {
                        md: -42
                    }, display: 'flex', justifyContent: 'center', alignItems: 'center'
                }} >
                    <Zoom cascade >
                        <img src="/cocktail.png" alt="img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Zoom>
                </Box>
                <Box sx={{
                    width: {
                        md: '60%',
                        xs: '100%'
                    }, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', px: {
                        md: 10,
                        xs: 2
                    }, mt: {
                        md: 0,
                        xs: 4
                    }
                }} >
                    <Box sx={{
                        width: '100%', display: 'flex', justifyContent: 'center', alignItems: {
                            md: 'start',
                            xs: 'center'
                        }, flexDirection: 'column'
                    }} >
                        <Zoom cascade >
                            <Typography variant="h2" sx={{
                                fontSize: {
                                    md: '55px',
                                    xs: '30px'
                                }, fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', textAlign: 'center'
                            }} component="div">
                                Reservations & Entrance Policy
                            </Typography>
                            <Typography variant="h2" sx={{
                                fontSize: {
                                    md: '30px',
                                    xs: '24px'
                                }, fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', textAlign: {
                                    md: 'start',
                                    xs: 'center'
                                }, mt: 1
                            }} component="div">
                                Only holders of the NFTYC membership can make reservations.
                            </Typography>
                            <Typography variant="h2" sx={{
                                fontSize: {
                                    md: '25px',
                                    xs: '16px'
                                }, lineHeight: {
                                    md: '30px',
                                    xs: '24px'
                                }, fontFamily: 'Bitter', fontWeight: 'light', color: 'white', textAlign: {
                                    md: 'start',
                                    xs: 'center'
                                }, mt: 1
                            }} component="div">
                                The reservation is made online through our private members portal. Members will need to connect their hot wallet to verify ownership prior to every reservation.<br />
                                The member must also be present for the reservation, therefore guests of the member may not be seated until the token holder arrives.
                            </Typography>
                            <Typography variant="h2" sx={{
                                fontSize: {
                                    md: '35px',
                                    xs: '24px'
                                }, fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', mt: 4
                            }} component="div">
                                How do I make reservations?
                            </Typography>
                            <Typography variant="h2" sx={{
                                fontSize: {
                                    md: '25px',
                                    xs: '16px'
                                }, lineHeight: {
                                    md: '30px',
                                    xs: '24px'
                                }, fontFamily: 'Bitter', fontWeight: 'light', color: 'white', textAlign: {
                                    md: 'start',
                                    xs: 'center'
                                }, mt: 1
                            }} component="div">
                                Only active members are allowed to make reservations. These reservations are not done “on-chain” therefore there will not be any transaction fees to make a reservation. Members will need to create an account and sign in to NFTYC’s website in order to make reservations.<br />
                                We will have more information once we are closer to opening the grand opening!
                            </Typography>
                        </Zoom>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default EntrancePolicy;