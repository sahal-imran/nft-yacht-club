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
import AnchorLink from "@mui/material/Link";
import Grid from '@mui/material/Grid';

function Footer() {
  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: '#000000', py: 8,mt:-1 }} >
        <Container maxWidth="lg" sx={{
          display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
            md: 'row',
            xs: 'column'
          }
        }} >
          <Box sx={{
            width: {
              md: '30%',
              xs: '100%'
            }, display: 'flex', justifyContent: 'center', alignItems: {
              md: 'start',
              xs: 'center'
            }, flexDirection: 'column', borderRight: '1px solid #4C585E', py: 4
          }} >
            <Box component={'div'} sx={{
              display: 'flex', justifyContent: 'center', alignItems: 'center',
            }} >
              <Image
                src="/FooterLogo.png"
                alt="Logo"
                width={344}
                height={109}
                objectFit={'contain'}
              />
            </Box>
            <Typography variant="h2" sx={{
              display: {
                md: 'block',
                xs: 'none'
              },
              fontSize: '15px', lineHeight: '18px', fontFamily: 'Bitter', fontWeight: 'light', color: '#FFFFFF', textAlign: 'center', ml: {
                md: 9
              }, mt: 14
            }} component="div">
              ©2021 The NFT Yacht Club.<br />
              All rights reserved.
            </Typography>
          </Box>
          <Box sx={{
            width: {
              md: '70%',
              xs: '100%'
            }, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
          }} >
            <Box sx={{
              flexGrow: 1, width: '100%', ml: {
                md: 12
              }
            }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start', alignItems: 'start', flexDirection: 'column' }} >
                    <Typography variant="h2" sx={{
                      fontSize: '20px', lineHeight: '24px', fontFamily: 'Bitter', fontWeight: 'medium', color: '#34EFFE',
                    }} component="div">
                      NFTYC
                    </Typography>
                    <Link href={'/'} >
                      <a style={{ fontSize: '24px', lineHeight: '35px', fontFamily: 'Bitter', fontWeight: 'medium', color: 'white', marginTop: '10px' }} href="">Home
                      </a>
                    </Link>
                    <Link href={'/about'} >
                      <a style={{ fontSize: '24px', lineHeight: '35px', fontFamily: 'Bitter', fontWeight: 'medium', color: 'white', marginTop: '10px' }} href="">About
                      </a>
                    </Link>
                    <Link href={'/membership'} >
                      <a style={{ fontSize: '24px', lineHeight: '35px', fontFamily: 'Bitter', fontWeight: 'medium', color: 'white', marginTop: '10px' }} href="">Become a Member
                      </a>
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start', alignItems: 'start', flexDirection: 'column' }} >
                    <Typography variant="h2" sx={{
                      fontSize: '20px', lineHeight: '24px', fontFamily: 'Bitter', fontWeight: 'medium', color: '#34EFFE',
                    }} component="div">
                      HELP
                    </Typography>
                    <Link href={'/howitworks'} >
                      <a style={{ fontSize: '24px', lineHeight: '35px', fontFamily: 'Bitter', fontWeight: 'medium', color: 'white', marginTop: '10px' }} href="">How it Works
                      </a>
                    </Link>
                    <Link href={'about'} >
                      <a style={{ fontSize: '24px', lineHeight: '35px', fontFamily: 'Bitter', fontWeight: 'medium', color: 'white', marginTop: '10px' }} href="">About
                      </a>
                    </Link>
                    <Link href={'faq'} >
                      <a style={{ fontSize: '24px', lineHeight: '35px', fontFamily: 'Bitter', fontWeight: 'medium', color: 'white', marginTop: '10px' }} href="">FAQ
                      </a>
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start', alignItems: 'start', flexDirection: 'column' }} >
                    <Typography variant="h2" sx={{
                      fontSize: '20px', lineHeight: '24px', fontFamily: 'Bitter', fontWeight: 'medium', color: '#34EFFE',
                    }} component="div">
                      PORTAL
                    </Typography>
                    <Link href={''} >
                      <a style={{ fontSize: '24px', lineHeight: '35px', fontFamily: 'Bitter', fontWeight: 'medium', color: 'white', marginTop: '10px' }} href="">Reservations
                      </a>
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start', alignItems: 'start', flexDirection: 'column' }} >
                    <Typography variant="h2" sx={{
                      fontSize: '20px', lineHeight: '24px', fontFamily: 'Bitter', fontWeight: 'medium', color: '#34EFFE',
                    }} component="div">
                      LEGAL
                    </Typography>
                    <Link href={''} >
                      <a style={{ fontSize: '24px', lineHeight: '35px', fontFamily: 'Bitter', fontWeight: 'medium', color: 'white', marginTop: '10px' }} href="">PORTAL
                      </a>
                    </Link>
                    <Link href={''} >
                      <a style={{ fontSize: '24px', lineHeight: '35px', fontFamily: 'Bitter', fontWeight: 'medium', color: 'white', marginTop: '10px' }} href="">Terms of Use
                      </a>
                    </Link>
                    <Link href={''} >
                      <a style={{ fontSize: '24px', lineHeight: '35px', fontFamily: 'Bitter', fontWeight: 'medium', color: 'white', marginTop: '10px' }} href="">Privacy Policy
                      </a>
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{
              display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 8, alignSelf: {
                md: 'start'
              }, ml: {
                md: 6
              }
            }} >
              <AnchorLink href='' sx={{ textDecoration: 'none', width: '46px', height: '46px', mr: 2 }} >
                <img src="/opensea.png" style={{ width: '100%', heigth: '100%', objectFit: 'contain' }} alt="img" />
              </AnchorLink>
              <AnchorLink href='' sx={{ textDecoration: 'none', width: '46px', height: '46px', mr: 2 }} >
                <img src="/twitter.png" style={{ width: '100%', heigth: '100%', objectFit: 'contain' }} alt="img" />
              </AnchorLink>
              <AnchorLink href='' sx={{ textDecoration: 'none', width: '46px', height: '46px', mr: 2 }} >
                <img src="/instagram.png" style={{ width: '100%', heigth: '100%', objectFit: 'contain' }} alt="img" />
              </AnchorLink>
              <AnchorLink href='' sx={{ textDecoration: 'none', width: '46px', height: '46px', mr: 2 }} >
                <img src="/discord.png" style={{ width: '100%', heigth: '100%', objectFit: 'contain' }} alt="img" />
              </AnchorLink>
            </Box>
          </Box>
        </Container>
        <Typography variant="h2" sx={{
          display: {
            md: 'none',
            xs: 'block'
          },
          fontSize: '15px', lineHeight: '18px', fontFamily: 'Bitter', fontWeight: 'light', color: '#FFFFFF', textAlign: 'center', mt: 4
        }} component="div">
          ©2021 The NFT Yacht Club.<br />
          All rights reserved.
        </Typography>
      </Box>
    </>
  )
}

export default Footer;