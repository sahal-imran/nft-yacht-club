import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Zoom from 'react-reveal/Zoom';

function Layout() {
    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: '#171717', py: 12,mt:{
                md:0,
                xs:-1
            } }} >
                <Zoom cascade >
                    <Typography variant="h2" sx={{
                        fontSize: {
                            md: '74px',
                            xs: '46px'
                        }, fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', textAlign: 'center'
                    }} component="div">
                        The Layout
                    </Typography>
                </Zoom>
                <Box sx={{
                    width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
                        md: 'row',
                        xs: 'column'
                    }, mt: 12
                }} >
                    <Box sx={{
                        width: {
                            md: '40%',
                            xs: '90%'
                        }, height: {
                            md: '550px'
                        }, borderTopRightRadius: {
                            md: '42px'
                        }, borderBottomRightRadius: {
                            md: '42px'
                        }, overflow: 'hidden'
                    }} >
                        <Zoom cascade >
                            <img src="/layout1.png" alt="img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                                        md: '55px',
                                        xs: '36px'
                                    }, lineHeight: '73px', fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', textAlign: 'center'
                                }} component="div">
                                    Main Dining Room
                                </Typography>
                                <Typography variant="h2" sx={{
                                    fontSize: {
                                        md: '30px',
                                        xs: '16px'
                                    }, lineHeight: '36px', fontFamily: 'Bitter', fontWeight: 'light', color: 'white', textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }, mt: 2
                                }} component="div">
                                    The heart and soul of our yacht, where the excitement happens! Our 150-seat restaurant with an open-kitchen design will anchor our sprawlingyachtspace, with each table being meticulously placed for comfortability and unobstructed views.
                                </Typography>
                            </Box>
                        </Zoom>
                    </Box>
                </Box>
                <Box sx={{
                    width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
                        md: 'row-reverse',
                        xs: 'column'
                    }, mt: 12
                }} >
                    <Box sx={{
                        width: {
                            md: '40%',
                            xs: '90%'
                        }, height: {
                            md: '550px'
                        }, borderTopLeftRadius: {
                            md: '42px'
                        }, borderBottomLeftRadius: {
                            md: '42px'
                        }, overflow: 'hidden'
                    }} >
                        <Zoom cascade >
                            <img src="/layout2.png" alt="img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                                        xs: '36px'
                                    }, fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }
                                }} component="div">
                                    The Havana Room Private<br /> Event Space
                                </Typography>
                                <Typography variant="h2" sx={{
                                    fontSize: {
                                        md: '20px',
                                        xs: '16px'
                                    }, lineHeight: '24px', fontFamily: 'Bitter', fontWeight: 'light', color: '#34EFFE', textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }, mt: 2
                                }} component="div">
                                    The “Cubano Cellar”
                                </Typography>
                                <Typography variant="h2" sx={{
                                    fontSize: {
                                        md: '30px',
                                        xs: '16px'
                                    }, lineHeight: '36px', fontFamily: 'Bitter', fontWeight: 'light', color: 'white', textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }, mt: 2
                                }} component="div">
                                    The Havana room is located on the first deck and will provide guests with the most flexible, private, and cost-effective event space. It offers a private bar, ample room for both a cocktail hour and a seated dinner, a separate entrance, and the ability to utilize multimedia for presentations, or offer live music for a fun time!
                                </Typography>
                            </Zoom>
                        </Box>
                    </Box>
                </Box>
                <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 12 }} >
                    <Grid container rowSpacing={{ xs: 4, md: 0 }} columnSpacing={{ xs: 0, md: 2 }}>
                        <Grid item xs={12} md={4}>
                            <Zoom cascade >
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', boxShadow: '0px 3px 70px rgba(255, 255, 255, 0.4) inset', borderRadius: '48px', backgroundColor: 'rgba(93, 93, 93, 0.6)', minHeight: '280px', p: 2 }} >
                                    <Typography variant="h2" sx={{
                                        fontSize: '40px', lineHeight: '53px', fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', textAlign: 'center'
                                    }} component="div">
                                        Up to 150 Guests
                                    </Typography>
                                    <Typography variant="h2" sx={{
                                        fontSize: '24px', lineHeight: '28px', fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textAlign: 'center', mt: 4
                                    }} component="div">
                                        for a Seated Dinner
                                    </Typography>
                                </Box>
                            </Zoom>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Zoom cascade >
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', boxShadow: '0px 3px 70px rgba(255, 255, 255, 0.4) inset', borderRadius: '48px', backgroundColor: 'rgba(93, 93, 93, 0.6)', minHeight: '280px', p: 2 }} >
                                    <Typography variant="h2" sx={{
                                        fontSize: '40px', lineHeight: '53px', fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', textAlign: 'center'
                                    }} component="div">
                                        Up to 180 Guests
                                    </Typography>
                                    <Typography variant="h2" sx={{
                                        fontSize: '24px', lineHeight: '28px', fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', textAlign: 'center', mt: 4
                                    }} component="div">
                                        for a Cocktail Reception
                                    </Typography>
                                </Box>
                            </Zoom>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Zoom cascade >
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', boxShadow: '0px 3px 70px rgba(255, 255, 255, 0.4) inset', borderRadius: '48px', backgroundColor: 'rgba(93, 93, 93, 0.6)', minHeight: '280px', p: 2 }} >
                                    <Typography variant="h2" sx={{
                                        fontSize: '40px', lineHeight: '53px', fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', textAlign: 'center'
                                    }} component="div">
                                        AV-Integrated Sound
                                    </Typography>
                                    <Typography variant="h2" sx={{
                                        fontSize: '24px', lineHeight: '28px', fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', textAlign: 'center', mt: 4
                                    }} component="div">
                                        Wireless Microphone / Two 80” Samsung Smart TVs
                                    </Typography>
                                </Box>
                            </Zoom>
                        </Grid>
                    </Grid>
                </Container>
                <Box sx={{
                    width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
                        md: 'row',
                        xs: 'column'
                    }, mt: 12
                }} >
                    <Box sx={{
                        width: {
                            md: '40%',
                            xs: '90%'
                        }, height: {
                            md: '550px'
                        }, borderTopRightRadius: {
                            md: '42px'
                        }, borderBottomRightRadius: {
                            md: '42px'
                        }, overflow: 'hidden'
                    }} >
                        <Zoom cascade >
                            <img src="/layout3.png" alt="img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                                        xs: '36px'
                                    }, lineHeight: '73px', fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', textAlign: 'center'
                                }} component="div">
                                    Cigar Lounge
                                </Typography>
                                <Typography variant="h2" sx={{
                                    fontSize: {
                                        md: '30px',
                                        xs: '16px'
                                    }, lineHeight: '36px', fontFamily: 'Bitter', fontWeight: 'light', color: 'white', textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }, mt: 2
                                }} component="div">
                                    The newest trendsetting (NFT member only) Cigar lounge on the water. The NFT Yacht Club’s Cigar Lounge will deliver unparalleled service to our members and guests. Setting sail out of Pier 40 or Miami, relax and enjoy the elegance of a fine cigar and single malt scotch in our lounge or on our outside decks while taking in the stunning views of the New York City skyline or Miami’s Biscayne Bay.
                                </Typography>
                            </Zoom>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ background: '#343434', mt: 12, width: '100%', py: 4 }} >
                    <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Zoom cascade >
                            <Typography variant="h2" sx={{
                                fontSize: {
                                    md: '24px',
                                    xs: '16px'
                                }, fontFamily: 'Bitter', fontWeight: 'light', color: 'white', textAlign: 'start', mt: 4
                            }} component="div">
                                Whether you are on board for a business meeting, an intimate dinner date, or anything in between, our professional and attentive staff will provide an unforgettable experience. Our Cigar Bar is designed as a sleek midcentury styled lounge that transports guests to another place and time. True to the age of the decadent Havana High Life it will be a truly exquisite experience. The NFT Yacht Club’s premier walk-in humidor –will offer a selection of more than 400 premium hand-rolled cigars, ranging from rare pre-embargo Cubans to the finest handmade selections available on the cigar marketplace. <br />
                                <br />
                                Our expert tobacconists are always at the ready to assist with your optimal selection. Classics elevated with a modern approach highlight the cocktail menu created by our team of NYC mixologists. We have curated our cocktail creations to offer balanced flavors to compliment the unique flavors of each cigar, from the spicy Macau de Isle to the vanilla notes in Corleone’s Choice. Complementing the cocktails & cigars will be an extensive menu by Our Executive Chef. A carefully crafted menu of time-honored plates including Steak Tartare prepared tableside, a Yellowfin Tuna Crudo, seared Hudson Valley Foie Gras with brandied cherries, Caviar with all its accouterments, Lobster Tail, Ribeye Steak, Shrimp Cocktail, Spicy Tuna Tarata, Prosciutto Di Parma & Deviled Eggs are just a few of our chef’s favorites.   <br />
                                <br />
                                We take our members’ safety very seriously; we will install state-of-the-art air purification technology by AtmosAir that continuously monitors, disinfects, and purifies the air you breathe. The NFT Yacht Club will take a proactive approach to provide measured, healthy air quality, and ensure that the air you breathe has a positive impact on our health and wellness.
                            </Typography>
                        </Zoom>
                    </Container>
                </Box>
                <Box sx={{
                    width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
                        md: 'row-reverse',
                        xs: 'column'
                    }, mt: 12
                }} >
                    <Box sx={{
                        width: {
                            md: '40%',
                            xs: '90%'
                        }, height: {
                            md: '550px'
                        }, borderTopLeftRadius: {
                            md: '42px'
                        }, borderBottomLeftRadius: {
                            md: '42px'
                        }, overflow: 'hidden'
                    }} >
                        <Zoom cascade >
                            <img src="/layout4.png" alt="img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                                        xs: '36px'
                                    }, fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }
                                }} component="div">
                                    Rooftop Lounge
                                </Typography>
                                <Typography variant="h2" sx={{
                                    fontSize: {
                                        md: '20px',
                                        xs: '16px'
                                    }, lineHeight: '24px', fontFamily: 'Bitter', fontWeight: 'light', color: '#34EFFE', textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }, mt: 2
                                }} component="div">
                                    For all 600 Guests
                                </Typography>
                                <Typography variant="h2" sx={{
                                    fontSize: {
                                        md: '30px',
                                        xs: '16px'
                                    }, lineHeight: '36px', fontFamily: 'Bitter', fontWeight: 'light', color: 'white', textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }, mt: 2
                                }} component="div">
                                    Perched 4stories up with 360-degree views, the lounge will be the premier New York /Miami rooftop destination offering breathtaking views of the Biscayne Bay and Manhattan skyline, and the Hudson River year-round. Seasonal cocktails and local wines complement small plates and house-made accompaniments. Enjoy attentive service as you relax in comfortable elegance. Live music venue for private members concert under the stars.
                                </Typography>
                            </Zoom>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
                        md: 'row',
                        xs: 'column'
                    }, mt: 12
                }} >
                    <Box sx={{
                        width: {
                            md: '40%',
                            xs: '90%'
                        }, height: {
                            md: '750px'
                        }, borderTopRightRadius: {
                            md: '42px'
                        }, borderBottomRightRadius: {
                            md: '42px'
                        }, overflow: 'hidden'
                    }} >
                        <Zoom cascade >
                            <img src="/layout5.png" alt="img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                                        xs: '36px'
                                    }, lineHeight: '73px', fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', textAlign: 'center'
                                }} component="div">
                                    The Vegas Strip Room
                                </Typography>
                                <Typography variant="h2" sx={{
                                    fontSize: {
                                        md: '30px',
                                        xs: '16px'
                                    }, lineHeight: '36px', fontFamily: 'Bitter', fontWeight: 'light', color: 'white', textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }, mt: 2
                                }} component="div">
                                    The Nightclub is the only room without a view; a Vegas-style club features the elevated DJ booth with both beauty and functionality up close and the personal dance floor is surrounded by granite VIP banquettes upholstered in sumptuous leather. The theme of opulence is carried throughout this stellar adult playground. Besides the centrally located, elevated DJ booth, The Strip Room has huge dual-sided LED video screens that sync with the music and offer 360-degree movement. What will make this Las Vegas style night club different from other venues is its lineup of DJs and live performances. Each week has a solid mix between EDM, open format, hip hop, and live on stage concerts. If you can’t get into the groove on this dance floor then you should probably check your pulse.
                                </Typography>
                            </Zoom>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Layout