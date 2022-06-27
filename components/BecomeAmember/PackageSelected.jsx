import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useRouter } from "next/router";
import Zoom from 'react-reveal/Zoom';

function Gold() {
    const router = useRouter();
    const PackageName = router.query.packagename;

    const [Quantity, setQuantity] = useState(0)

    console.log(PackageName)


    return (
        <>
            <Box id='Member' sx={{
                width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#03171D', py: {
                    md: 12
                },mt:-1
            }} >
                <Container maxWidth="lg" sx={{
                    minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mx: {
                        md: 0,
                        xs: 2
                    }, borderRadius: {
                        md: '35px'
                    }, backgroundColor: '#12232C', px: {
                        md: 6,
                        xs: 2
                    },
                    py: {
                        md: 14,
                        xs: 8
                    }
                }} >
                    <Box sx={{ width: '80%', backgroundColor: '#95BCCE', height: '1px' }} ></Box>
                    <Zoom cascade >
                        <Typography variant="h2" sx={{
                            fontSize: {
                                md: '40px',
                                xs: '24px'
                            }, lineHeight: '53px', fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', textAlign: 'center', mt: -3.5, backgroundColor: '#12232C', px: 4
                        }} component="div">
                            {PackageName === 'gold' ? "NFTYC Gold Membership" : "NFTYC Platinum Membership"}
                        </Typography>
                    </Zoom>
                    <Box sx={{
                        width: {
                            md: '80%',
                            xs: '100%'
                        }, display: 'flex', justifyContent: 'center', alignItems: 'center', mt: {
                            md: 8,
                            xs: 4
                        }, flexDirection: {
                            md: 'row',
                            xs: 'column'
                        }
                    }} >
                        <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            <Box sx={{
                                width: {
                                    md: '230px',
                                    xs: '100%'
                                }
                            }} >
                                <Zoom cascade >
                                    <img src={PackageName === 'gold' ? "/GOLD.gif" : "/SILVER.gif"} alt="img" style={{ width: '100%', height: '100%' }} />
                                </Zoom>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: {
                                md: '50%',
                                xs: '100%'
                            }, display: 'flex', justifyContent: 'center', alignItems: {
                                md: 'start',
                                xs: 'center'
                            }, flexDirection: 'column', mt: {
                                md: 0,
                                xs: 4
                            }
                        }} >
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <Box sx={{
                                    width: {
                                        md: '50%',
                                        xs: '100%'
                                    }, display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column'
                                }} >
                                    <Zoom cascade >
                                        <Typography variant="h2" sx={{
                                            fontSize: '16px', lineHeight: '24px', fontFamily: 'Bitter', fontWeight: 'light', color: 'white',
                                        }} component="div">
                                            Price in Ethereum
                                        </Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }} >
                                            <img src="/eth.png" alt="img" style={{ width: '40px', height: '40px' }} />
                                            <Typography variant="h2" sx={{
                                                fontSize: '44px', lineHeight: '53px', fontFamily: 'Bitter', fontWeight: 'light', color: 'white', ml: 2
                                            }} component="div">
                                                5
                                            </Typography>
                                        </Box>
                                    </Zoom>
                                </Box>
                                <Box sx={{
                                    width: {
                                        md: '50%',
                                        xs: '100%'
                                    }, display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column'
                                }} >
                                    <Zoom cascade >
                                        <Typography variant="h2" sx={{
                                            fontSize: '16px', lineHeight: '24px', fontFamily: 'Bitter', fontWeight: 'light', color: 'white',
                                        }} component="div">
                                            Quantity
                                        </Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }} >
                                            <RemoveIcon sx={{ fontSize: '40px', color: 'rgba(138,202,227,0.4)', cursor: 'pointer' }} onClick={() => setQuantity(Quantity - 1)} />
                                            <Typography variant="h2" sx={{
                                                fontSize: '44px', lineHeight: '53px', fontFamily: 'Bitter', fontWeight: 'light', color: 'white', width: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center'
                                            }} component="div">
                                                {Quantity}
                                            </Typography>
                                            <AddIcon sx={{ fontSize: '40px', color: '#34EFFE', cursor: 'pointer' }} onClick={() => setQuantity(Quantity + 1)} />
                                        </Box>
                                    </Zoom>
                                </Box>
                            </Box>
                            <Zoom cascade >
                                <Button variant='outlined' sx={{
                                    width: {
                                        md: '352px',
                                        xs: '200px'
                                    }, height: {
                                        md: "86px",
                                        xs: '60px'
                                    }, borderRadius: '50px', fontSize: {
                                        md: '26px',
                                        xs: '16px'
                                    }, color: '#34EFFE', fontFamily: 'AvenirNextUltraLight', fontWeight: 600, borderColor: '#34EFFE', textTransform: 'capitalize', "&:hover": {
                                        borderColor: '#34EFFE'
                                    }, mt: 4
                                }} >
                                    Add to cart
                                </Button>
                            </Zoom>
                        </Box>
                    </Box>
                    <Zoom cascade >
                        <Typography variant="h2" sx={{
                            fontSize: {
                                md: '24px',
                                xs: '16px'
                            }, lineHeight: '30px', fontFamily: 'Bitter', fontWeight: 'light', color: '#FFFFFF', textAlign: 'center', mt: 8
                        }} component="div">
                            Ownership of this NFT represents exclusive access to this members-only cocktail lounge. As an NFT Yacht Club member, you will have access to our cocktail lounge, outdoor area, special events, and more based on reservation for tables and first come first serve for the bar.<br />
                            <br />
                            As a member you will be entitled to one or two guests dependent on low peak-high peak days. Food and beverage sold separately and are not included in the token price. Payment for beverages will be accepted in USD, CC, POTC/ETH, and SOL.
                        </Typography>
                    </Zoom>
                </Container>
            </Box>
        </>
    )
}

export default Gold