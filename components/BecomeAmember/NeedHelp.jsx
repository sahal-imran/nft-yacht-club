import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AccessButton from '../Access/AccessButton';
import Zoom from 'react-reveal/Zoom';

function NeedHelp() {
    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#212121",mt:-1 }} >
                <Container maxWidth="lg" sx={{ minHeight: '492px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                    <Zoom cascade >
                        <Typography variant="h2" sx={{
                            fontSize: {
                                md: '54px',
                                xs: '40px'
                            }, fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', textAlign: 'center'
                        }} component="div">
                            Need help getting started?
                        </Typography>
                        <Typography variant="h2" sx={{
                            fontSize: {
                                md: '24px',
                                xs: '16px'
                            }, lineHeight: {
                                md: '30px',
                                xs: '24px'
                            }, fontFamily: 'Bitter', fontWeight: 'light', color: 'white', mt: 2
                        }} component="div">
                            The date of launch will be announced soon!
                        </Typography>
                    </Zoom>
                    <Zoom cascade >
                        <Box sx={{
                            display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
                                md: 'row',
                                xs: 'column'
                            }, mt: 6
                        }} >
                            <AccessButton to={'/howitworks'} text={'How it Works'} />
                            <Box sx={{
                                ml: {
                                    md: 4
                                }, mt: {
                                    md: 0,
                                    xs: 3
                                }
                            }} >
                                <AccessButton to={'/faq'} text={'FAQ'} />
                            </Box>
                        </Box>
                    </Zoom>
                </Container>
            </Box>
        </>
    )
}

export default NeedHelp