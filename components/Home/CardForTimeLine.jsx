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
import { VerticalTimeline, VerticalTimelineElement } from 'rc-vertical-timeline';
import 'rc-vertical-timeline/build/rc-vertical-timeline.min.css';

function CardForTimeLine(props) {
    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
            <Typography variant="h2" sx={{
                fontSize: {
                    md: '40px',
                    xs:'24px'
                }, fontFamily: 'AvenirNextUltraLight', fontWeight: 600, color: '#FFFFFF', textTransform: 'capitalize'
            }} component="div">
                {props.title}
            </Typography>
            <Typography variant="h2" sx={{
                fontSize: {
                    md:'20px',
                    xs:'16px'
                }, lineHeight: '30px', fontFamily: 'Bitter', fontWeight: 'medium', color: '#34EFFE', mt: 1
            }} component="div">
                {props.subtitle}
            </Typography>
            <Typography variant="h2" sx={{
                fontSize: {
                    md:'25px',
                    xs:'20px'
                }, lineHeight: '30px', fontFamily: 'Bitter', fontWeight: 'regular', color: 'white', mt: 1
            }} component="div">
                {props.des}
            </Typography>
        </Box>
    )
}

export default CardForTimeLine