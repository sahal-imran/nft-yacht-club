import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Zoom from 'react-reveal/Zoom';

function Location() {
    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: '#101719', py: 12,mt:-1 }} >
                <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                    <Zoom cascade >
                        <Typography variant="h2" sx={{
                            fontSize: {
                                md: '74px',
                                xs: '46px'
                            }, fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', textAlign: 'center'
                        }} component="div">
                            Location
                        </Typography>
                    </Zoom>
                    <Zoom cascade >
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            <LocationOnIcon sx={{ color: '#656565', fontSize: '18px', mr: 1 }} />
                            <Typography variant="h2" sx={{
                                fontSize: '20px', lineHeight: '24px', fontFamily: 'Bitter', fontWeight: 'medium', color: '#9A9A9A', textAlign: 'center', textTransform: 'uppercase'
                            }} component="div">
                                NEW YORK, NEW YORK
                            </Typography>
                        </Box>
                    </Zoom>
                    <Zoom cascade >
                        <Typography variant="h2" sx={{
                            fontSize: {
                                md: '25px',
                                xs: '16px'
                            },lineHeight: {
                                md:'36px',
                                xs:'24px'
                            }, fontFamily: 'Bitter', fontWeight: 'light', color: 'white', textAlign: 'center', mt: 4
                        }} component="div">
                            The NFT Yacht Club docked at our New York City & Miami locations will provide members unlimited access to a private dining room that will span 5,000+ square feet. The space will consist of a bustling cigar cocktail lounge, upscale restaurant, the Havana Room private event space for up to 150 guests, and an outdoor rooftop lounge and music venue for 600-members. The first deck music venue with a NFT art-inspired design will feature state-of-the-art sound and lighting. In all just over 25,000 square feet of space.
                        </Typography>
                    </Zoom>
                </Container>
            </Box>
            <Box sx={{
                width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#12232C', flexDirection: {
                    md: 'row',
                    xs: 'column'
                }, pb: {
                    md: 0,
                    xs: 8
                }
            }} >
                <Box sx={{
                    width: {
                        md: '40%',
                        xs: '100%'
                    }, height: {
                        md:'550px'
                    }
                }} >
                    <Zoom cascade >
                        <img src="/About/sample1.jpg" alt="img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                    <Zoom cascade >
                        <Box sx={{
                            width: '100%', display: 'flex', justifyContent: 'center', alignItems: {
                                md: 'start',
                                xs: 'center'
                            }, flexDirection: 'column'
                        }} >
                            <Typography variant="h2" sx={{
                                fontSize: {
                                    md: '64px',
                                    xs: '36px'
                                }, lineHeight: '80px', fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', textAlign: 'center'
                            }} component="div">
                                Our Culinary Approach
                            </Typography>
                            <Typography variant="h2" sx={{
                                fontSize: {
                                    md: '35px',
                                    xs: '24px'
                                },lineHeight: {
                                    md:'36px',
                                    xs:'24px'
                                }, fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', textAlign: 'center'
                            }} component="div">
                                The Food
                            </Typography>
                            <Typography variant="h2" sx={{
                                fontSize: {
                                    md: '25px',
                                    xs: '16px'
                                },lineHeight: {
                                    md:'30x',
                                    xs:'24px'
                                }, fontFamily: 'Bitter', fontWeight: 'light', color: 'white', textAlign: {
                                    md: 'start',
                                    xs: 'center'
                                }, mt: 2
                            }} component="div">
                                Locally sourced New Hudson Valley, New York and Miami multicultural feast of flavors. The NFT Yacht Club will be a Mediterranean with a Latin twist and flarefocused restaurant.With a robust raw bar, drawing from international influences, created by award-winning chefs and hospitality experts.
                            </Typography>
                        </Box>
                    </Zoom>
                </Box>
            </Box>
            <Box sx={{
                width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'black', flexDirection: {
                    md: 'row-reverse',
                    xs: 'column'
                }, pb: {
                    md: 0,
                    xs: 8
                }
            }} >
                <Box sx={{
                    width: {
                        md: '40%',
                        xs: '100%'
                    }, height: {
                        md:'550px'
                    },overflow:'hidden'
                }} >
                    <Zoom cascade >
                        <img src="/About/sample2.jpg" alt="img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                    <Zoom cascade >
                        <Box sx={{
                            width: '100%', display: 'flex', justifyContent: 'center', alignItems: {
                                md: 'start',
                                xs: 'center'
                            }, flexDirection: 'column'
                        }} >
                            <Typography variant="h2" sx={{
                                fontSize: {
                                    md: '48px',
                                    xs: '24px'
                                }, lineHeight: {
                                    md: '50px',
                                    xs: '32px'
                                }, fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', textAlign: {
                                    md: 'start',
                                    xs: 'center'
                                }
                            }} component="div">
                                “At The NFT Yacht Club, food and the exquisite execution of its service are our passion. Our approach is decidedly different.”
                            </Typography>
                            <Typography variant="h2" sx={{
                                fontSize: {
                                    md: '25px',
                                    xs: '16px'
                                }, lineHeight: {
                                    md:'30px',
                                    xs:'24px'
                                }, fontFamily: 'Bitter', fontWeight: 'light', color: 'white', textAlign: {
                                    md: 'start',
                                    xs: 'center'
                                }, mt: 2
                            }} component="div">
                                Our Executive Chef and her handpicked team will be solely focused on crafting original menus and culinary experiences tailored to exceed the personal dining expectations of our members and their guests.
                            </Typography>
                        </Box>
                    </Zoom>
                </Box>
            </Box>
        </>
    )
}

export default Location;