import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Zoom from 'react-reveal/Zoom';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Opensea() {

    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    const [checked4, setChecked4] = React.useState(false);
    const [checked5, setChecked5] = React.useState(false);


    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: '#00141A', pb: 12,mt:-1 }} >
                <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                    <Box sx={{
                        width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
                            md: 'row',
                            xs: 'column'
                        }
                    }} >
                        <Box sx={{
                            wodth: {
                                md: '40%',
                                xs: '100%'
                            }, display: 'flex', justifyContent: 'center', alignItems: 'center'
                        }} >
                            <Box sx={{ width: '360px', height: '360px' }} >
                                <Zoom cascade >
                                    <img src="/opensea.png" alt="img" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </Zoom>
                            </Box>
                        </Box>
                        <Box sx={{
                            wodth: {
                                md: '60%',
                                xs: '100%'
                            }, display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', pl: {
                                md: 8
                            }
                        }} >
                            <Zoom cascade >
                                <Typography variant="h2" sx={{
                                    fontSize: {
                                        md: '40px',
                                        xs: '30px'
                                    }, lineHeight: {
                                        md: '55px'
                                    }, fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize',
                                }} component="div">
                                    As a NFT, the memberships are tradable on the secondary market.
                                </Typography>
                                <Typography variant="h2" sx={{
                                    fontSize: {
                                        md: '24px',
                                        xs: '20px'
                                    }, lineHeight: {
                                        md: '30px',
                                        xs: '28px'
                                    }, fontFamily: 'Bitter', fontWeight: 'bold', color: 'white', mt: 4
                                }} component="div">
                                    What does it mean by the secondary market?
                                </Typography>
                                <Typography variant="h2" sx={{
                                    fontSize: {
                                        md: '24px',
                                        xs: '20px'
                                    }, lineHeight: {
                                        md: '30px',
                                        xs: '28px'
                                    }, fontFamily: 'Bitter', fontWeight: 'light', color: 'white'
                                }} component="div">
                                    Once a person purchases the original token from Flyfish Club, all future transactions happen on a secondary market, such as Opensea.io.<br />
                                    OpenSea is the first and largest peer-to-peer marketplace for crypto goods (like an eBay for crypto assets), which include collectibles, gaming items, and other virtual goods backed by a blockchain. On OpenSea, anyone can buy or sell these items through a smart contract.
                                </Typography>
                            </Zoom>
                        </Box>
                    </Box>
                    <Zoom cascade >
                        <Typography variant="h2" sx={{
                            fontSize: {
                                md: '38px',
                                xs: '30px'
                            }, lineHeight: {
                                md: '55px'
                            }, fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', mt: 8
                        }} component="div">
                            After the process is successful, the Membership NFT will be automatically transferred into your hot wallet.
                        </Typography>
                    </Zoom>
                    <Box sx={{
                        width: {
                            md: '70%',
                            xs: '100%'
                        }, minHeight: {
                            md: '550px'
                        }, display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', borderRadius: '48px', boxShadow: '0px 3px 70px rgba(255, 255, 255, 0.4) inset', backgroundColor: 'rgba(93, 93, 93, 0.2)', p: {
                            md: 6,
                            xs: 4
                        }, mt: 8
                    }} >
                        <Zoom cascade >
                            <Typography variant="h2" sx={{
                                fontSize: {
                                    md: '24px',
                                    xs: '16px'
                                }, lineHeight: {
                                    md: '30px',
                                    xs: '24px'
                                }, fontFamily: 'Bitter', fontWeight: 'bold', color: 'white', mt: 4
                            }} component="div">
                                What does it mean by the secondary market?
                            </Typography>
                        </Zoom>
                        <Zoom cascade >
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }} >
                                <Checkbox
                                    {...label}
                                    sx={{
                                        color: '#8ACAE3',
                                        '&.Mui-checked': {
                                            color: '#8ACAE3',
                                        }, '& .MuiSvgIcon-root': {
                                            fontSize: {
                                                md: 56,
                                                xs: 40
                                            }
                                        }, outline: 'none', width: {
                                            md: '56px',
                                            xs: '40px'
                                        }, height: {
                                            md: '56px',
                                            xs: '40px'
                                        }
                                    }}
                                    checked={checked1}
                                    onChange={() => setChecked1(!checked1)}
                                />
                                <Typography variant="h2" sx={{
                                    fontSize: {
                                        md: '24px',
                                        xs: '16px'
                                    }, lineHeight: {
                                        md: '30px',
                                        xs: '24px'
                                    }, fontFamily: 'Bitter', fontWeight: 'light', color: 'white', ml: 1
                                }} component="div">
                                    I already bought some ETH (base price + estimated gas).
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }} >
                                <Checkbox
                                    {...label}
                                    sx={{
                                        color: '#8ACAE3',
                                        '&.Mui-checked': {
                                            color: '#8ACAE3',
                                        }, '& .MuiSvgIcon-root': {
                                            fontSize: {
                                                md: 56,
                                                xs: 40
                                            }
                                        }, outline: 'none', width: {
                                            md: '56px',
                                            xs: '40px'
                                        }, height: {
                                            md: '56px',
                                            xs: '40px'
                                        }
                                    }}
                                    checked={checked2}
                                    onChange={() => setChecked2(!checked2)}
                                />
                                <Typography variant="h2" sx={{
                                    fontSize: {
                                        md: '24px',
                                        xs: '16px'
                                    }, lineHeight: {
                                        md: '30px',
                                        xs: '24px'
                                    }, fontFamily: 'Bitter', fontWeight: 'light', color: 'white', ml: 1
                                }} component="div">
                                    I have a compatible wallet already installed on my device or browser (MetaMask recommended).
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }} >
                                <Checkbox
                                    {...label}
                                    sx={{
                                        color: '#8ACAE3',
                                        '&.Mui-checked': {
                                            color: '#8ACAE3',
                                        }, '& .MuiSvgIcon-root': {
                                            fontSize: {
                                                md: 56,
                                                xs: 40
                                            }
                                        }, outline: 'none', width: {
                                            md: '56px',
                                            xs: '40px'
                                        }, height: {
                                            md: '56px',
                                            xs: '40px'
                                        }
                                    }}
                                    checked={checked3}
                                    onChange={() => setChecked3(!checked3)}
                                />
                                <Typography variant="h2" sx={{
                                    fontSize: {
                                        md: '24px',
                                        xs: '16px'
                                    }, lineHeight: {
                                        md: '30px',
                                        xs: '24px'
                                    }, fontFamily: 'Bitter', fontWeight: 'light', color: 'white', ml: 1
                                }} component="div">
                                    I have kept my password and seed phrase for my wallet secure.
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }} >
                                <Checkbox
                                    {...label}
                                    sx={{
                                        color: '#8ACAE3',
                                        '&.Mui-checked': {
                                            color: '#8ACAE3',
                                        }, '& .MuiSvgIcon-root': {
                                            fontSize: {
                                                md: 56,
                                                xs: 40
                                            }
                                        }, outline: 'none', width: {
                                            md: '56px',
                                            xs: '40px'
                                        }, height: {
                                            md: '56px',
                                            xs: '40px'
                                        }
                                    }}
                                    checked={checked4}
                                    onChange={() => setChecked4(!checked4)}
                                />
                                <Typography variant="h2" sx={{
                                    fontSize: {
                                        md: '24px',
                                        xs: '16px'
                                    }, lineHeight: {
                                        md: '30px',
                                        xs: '24px'
                                    }, fontFamily: 'Bitter', fontWeight: 'light', color: 'white', ml: 1
                                }} component="div">
                                    I understand that NFTYC has no ability to reset my wallet password or recover my seed phrase.
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }} >
                                <Checkbox
                                    {...label}
                                    sx={{
                                        color: '#8ACAF3',
                                        '&.Mui-checked': {
                                            color: '#8ACAE3',
                                        }, '& .MuiSvgIcon-root': {
                                            fontSize: {
                                                md: 56,
                                                xs: 40
                                            }
                                        }, outline: 'none', width: {
                                            md: '56px',
                                            xs: '40px'
                                        }, height: {
                                            md: '56px',
                                            xs: '40px'
                                        }
                                    }}
                                    checked={checked5}
                                    onChange={() => setChecked5(!checked5)}
                                />
                                <Typography variant="h2" sx={{
                                    fontSize: {
                                        md: '24px',
                                        xs: '16px'
                                    }, lineHeight: {
                                        md: '30px',
                                        xs: '24px'
                                    }, fontFamily: 'Bitter', fontWeight: 'light', color: 'white', ml: 1
                                }} component="div">
                                    I have moved the funds into my compatible wallet.
                                </Typography>
                            </Box>
                        </Zoom>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Opensea;