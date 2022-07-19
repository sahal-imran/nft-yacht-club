import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Zoom from 'react-reveal/Zoom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function Experience() {
    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: '#1E1F1C', py: 12,mt:-1 }} >
                <Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', filter: "blur(0px) opacity(100%) brightness(100%)" }} >
                    <Typography variant="h2" sx={{
                        fontSize: {
                            md: '74px',
                            xs: '46px'
                        }, fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textAlign: 'center', textShadow: '0px 0px 6px white',
                    }} component="div">
                        25 Years of Experience
                    </Typography>
                    <Box sx={{ width: '100%', mt: 8 }} >
                        <Grid container columns={{ md: 13 }} rowSpacing={{ xs: 4, md: 2 }} columnSpacing={{ xs: 0, md: 2 }}>
                            <Grid item xs={12} md={5}>
                                <Zoom cascade >
                                    <Box sx={{
                                        width: '100%', height: {
                                            md: '320px',
                                            xs: '100%'
                                        }, borderRadius: '48px', overflow: 'hidden'
                                    }} >
                                        <img src="/Gallery/gallery1.png" alt="img" style={{ width: '100%', height: '100%', object: 'cover' }} />
                                    </Box>
                                </Zoom>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Zoom cascade >
                                    <Box sx={{
                                        width: '100%', height: {
                                            md: '320px',
                                            xs: '100%'
                                        }, borderRadius: '48px', overflow: 'hidden'
                                    }} >
                                        <img src="/Gallery/gallery2.png" alt="img" style={{ width: '100%', height: '100%', object: 'cover' }} />
                                    </Box>
                                </Zoom>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Zoom cascade >
                                    <Box sx={{
                                        width: '100%', height: {
                                            md: '320px',
                                            xs: '100%'
                                        }, borderRadius: '48px', overflow: 'hidden'
                                    }} >
                                        <img src="/Gallery/gallery3.png" alt="img" style={{ width: '100%', height: '100%', object: 'cover' }} />
                                    </Box>
                                </Zoom>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Zoom cascade >
                                    <Box sx={{
                                        width: '100%', height: {
                                            md: '320px',
                                            xs: '100%'
                                        }, borderRadius: '48px', overflow: 'hidden'
                                    }} >
                                        <img src="/Gallery/gallery4.png" alt="img" style={{ width: '100%', height: '100%', object: 'cover' }} />
                                    </Box>
                                </Zoom>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Zoom cascade >
                                    <Box sx={{
                                        width: '100%', height: {
                                            md: '320px',
                                            xs: '100%'
                                        }, borderRadius: '48px', overflow: 'hidden'
                                    }} >
                                        <img src="/Gallery/gallery5.png" alt="img" style={{ width: '100%', height: '100%', object: 'cover' }} />
                                    </Box>
                                </Zoom>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Zoom cascade >
                                    <Box sx={{
                                        width: '100%', height: {
                                            md: '320px',
                                            xs: '100%'
                                        }, borderRadius: '48px', overflow: 'hidden'
                                    }} >
                                        <img src="/Gallery/gallery6.png" alt="img" style={{ width: '100%', height: '100%', object: 'cover' }} />
                                    </Box>
                                </Zoom>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Zoom cascade >
                                    <Box sx={{
                                        width: '100%', height: {
                                            md: '320px',
                                            xs: '100%'
                                        }, borderRadius: '48px', overflow: 'hidden'
                                    }} >
                                        <img src="/Gallery/gallery7.png" alt="img" style={{ width: '100%', height: '100%', object: 'cover' }} />
                                    </Box>
                                </Zoom>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Zoom cascade >
                                    <Box sx={{
                                        width: '100%', height: {
                                            md: '320px',
                                            xs: '100%'
                                        }, borderRadius: '48px', overflow: 'hidden'
                                    }} >
                                        <img src="/Gallery/gallery8.png" alt="img" style={{ width: '100%', height: '100%', object: 'cover' }} />
                                    </Box>
                                </Zoom>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Zoom cascade >
                                    <Box sx={{
                                        width: '100%', height: {
                                            md: '320px',
                                            xs: '100%'
                                        }, borderRadius: '48px', overflow: 'hidden'
                                    }} >
                                        <img src="/Gallery/gallery9.png" alt="img" style={{ width: '100%', height: '100%', object: 'cover' }} />
                                    </Box>
                                </Zoom>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Experience