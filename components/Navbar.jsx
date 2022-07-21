import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Navbar() {
  const router = useRouter();
  const PackageName = router.query.packagename;

  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return <>
    <Box component={'div'} sx={{
      zIndex: 999, width: '100%', height: {
        md: '161px',
        xs: '80px'
      }, backgroundImage: 'linear-gradient(#A5A3A3, #EFEFEF)'
    }} >
      <Container maxWidth="lgBig" sx={{ height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
        <Link href="/" >
          <a style={{textDecoration:'none'}} >
            <Box component={'div'} sx={{
              display: {
                md: 'flex',
                xs: 'none'
              }, justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 2
            }} >
              <Image
                src="/logo.png"
                alt="Logo"
                width={344}
                height={109}
                objectFit={'contain'}
              />
            </Box>
            <Box component={'div'} sx={{
              display: {
                md: 'none',
                xs: 'flex'
              }, justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 2
            }} >
              <Image
                src="/logo.png"
                alt="Logo"
                width={150}
                height={80}
                objectFit={'contain'}
              />
            </Box>
          </a>
        </Link>
        <Box component={'div'} sx={{
          display: {
            md: "flex",
            xs: "none"
          }, justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 2
        }} >

          <Link href="/about">
            <a className={router.pathname == '/about' ? 'navLink active' : 'navLink'} >About</a>
          </Link>
          <Link href="/howitworks">
            <a className={router.pathname == '/howitworks' ? 'navLink active' : 'navLink'} >How it Works</a>
          </Link>
          {
            router.pathname == '/membership' || PackageName == 'gold' || PackageName == 'platinum' ? <Link href="/membership">
              <a style={{ textDecoration: 'none' }} >
                <Button variant='outlined' sx={{
                  width: '307px', height: "86px", borderRadius: '50px', fontSize: '26px', color: '#000000', fontFamily: 'AvenirNextUltraLight', fontWeight: 600, borderColor: '#EFEFEF', textTransform: 'capitalize', "&:hover": {
                    borderColor: '#EFEFEF', backgroundColor: '#EFEFEF'
                  }, p: 0, backgroundColor: '#EFEFEF'
                }} >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '40px', height: '40px', mr: 1 }} >
                    <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="/metamask.png" alt="icon" />
                  </Box>
                  Connect Wallet
                </Button>
              </a>
            </Link> : <Link href="/membership">
              <a style={{ textDecoration: 'none' }} >
                <Button variant='outlined' sx={{
                  width: '307px', height: "86px", borderRadius: '50px', fontSize: '26px', color: '#000000', fontFamily: 'AvenirNextUltraLight', fontWeight: 600, borderColor: '#000000', textTransform: 'capitalize', "&:hover": {
                    borderColor: '#000000'
                  }
                }} >
                  Become a Member
                </Button>
              </a>
            </Link>
          }
        </Box>
        {isOpen ? < MenuIcon onClick={toggleDrawer} sx={{
          display: {
            md: 'none'
          }, color: 'black', fontSize: '36px', cursor: 'pointer', position: 'relative', zIndex: 2
        }} /> : < MenuIcon onClick={toggleDrawer} sx={{
          display: {
            md: 'none'
          }, color: 'black', fontSize: '36px', cursor: 'pointer', position: 'relative', zIndex: 2
        }} />}
        {/* < CloseIcon onClick={toggleDrawer} sx={{
          color: '#FFFFFF', fontSize: '36px', cursor: 'pointer', position: 'relative', zIndex: 2, display: {
            md: 'none'
          }
        }} /> */}
      </Container>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        className='drawer'
        style={{ width: '80%' }}
      >
        <Box component={'div'} sx={{
          width: '100%', height: '100vh',
          display: "flex", justifyContent: 'start', alignItems: 'center', flexDirection: 'column', backgroundImage: 'linear-gradient(#A5A3A3, #EFEFEF)'
        }} >
          <Box sx={{ width: '100%', display: "flex", justifyContent: 'start', alignItems: 'center', height: '60px', px: 2 }} >
            <ArrowBackIcon onClick={() => toggleDrawer()} sx={{ color: '#000000', fontSize: '40px', cursor: 'pointer' }} />
          </Box>
          <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <Image
              src="/logo.png"
              alt="Logo"
              width={250}
              height={150}
              objectFit={'contain'}
            />
          </Box>
          <Link href="/about">
            <a onClick={() => toggleDrawer()} className={router.pathname == '/about' ? 'navLink1 active' : 'navLink1'} >About</a>
          </Link>
          <Link href="/howitworks">
            <a onClick={() => toggleDrawer()} className={router.pathname == '/howitworks' ? 'navLink1 active' : 'navLink1'} >How it Works</a>
          </Link>
          {
            router.pathname == '/membership' || PackageName == 'gold' || PackageName == 'platinum' ? <Link href="/membership">
              <a style={{ textDecoration: 'none' }} >
                <Button onClick={() => toggleDrawer()} variant='outlined' sx={{
                  width: '200px', height: '60px', borderRadius: '50px', fontSize: '16px', color: '#000000', fontFamily: 'AvenirNextUltraLight', fontWeight: 600, borderColor: '#EFEFEF', textTransform: 'capitalize', "&:hover": {
                    borderColor: '#EFEFEF', backgroundColor: '#EFEFEF'
                  }, p: 0, backgroundColor: '#EFEFEF'
                }} >
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '20px', height: '20px', mr: .5 }} >
                    <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="/metamask.png" alt="icon" />
                  </Box>
                  Become a Member
                </Button>
              </a>
            </Link> : <Link href="/membership">
              <a style={{ textDecoration: 'none' }} >
                <Button onClick={() => toggleDrawer()} variant='outlined' sx={{
                  width: '200px', height: '60px', borderRadius: '50px', fontSize: '16px', color: '#000000', fontFamily: 'AvenirNextUltraLight', fontWeight: 600, borderColor: '#000000', textTransform: 'capitalize', "&:hover": {
                    borderColor: '#000000'
                  }
                }} >
                  Become a Member
                </Button>
              </a>
            </Link>
          }
        </Box>
      </Drawer>
    </Box >
  </>
}

export default Navbar;
