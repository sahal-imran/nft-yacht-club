import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Zoom from 'react-reveal/Zoom';
import { VerticalTimeline, VerticalTimelineElement } from 'rc-vertical-timeline';
import 'rc-vertical-timeline/build/rc-vertical-timeline.min.css';
import CardForTimeLine from './CardForTimeLine';


function Roadmap() {


    const UI = (item, index) => {
        if (index <= 3) {
            return <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff', boxShadow: 'unset' }}
                contentArrowStyle={{ borderRight: '7px solid  #34EFFE', }}
                // date="February 2022"
                iconStyle={{ background: '#2BFF5C', color: '#fff' }}
                key={item.id}
            >
                <CardForTimeLine title={item.Title} subtitle={item.subtitle} des={item.des} />
            </VerticalTimelineElement>
        }
        else {
            return <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff', boxShadow: 'unset' }}
                contentArrowStyle={{ borderRight: '7px solid  #34EFFE', }}
                // date="February 2022"
                iconStyle={{ background: 'black', color: '#fff' }}
                key={item.id}
            >
                <CardForTimeLine title={item.Title} subtitle={item.subtitle} des={item.des} />
            </VerticalTimelineElement>
        }
    }

    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: 'black', py: 8, mt: -1 }} >
                <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                    <Typography variant="h2" sx={{
                        fontSize: {
                            md: '64px',
                            xs: '40px'
                        }, fontFamily: 'AvenirNextUltraLight', fontWeight: 600, color: '#FFFFFF', textTransform: 'capitalize', textAlign: 'center', mb: 8
                    }} component="div">
                        Roadmap
                    </Typography>
                    <VerticalTimeline>
                        {
                            Data.map((item, index) => {
                                return UI(item, index)
                            })
                        }
                    </VerticalTimeline>
                    <Box sx={{ mt: 12, minHeight: '300px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 3px 70px #FFFFFF inset', background: '#004157', borderRadius: '48px', p: 6 }} >
                        <Zoom cascade >
                            <Typography variant="h2" sx={{
                                fontSize: {
                                    md: '24px',
                                    xs: '16px'
                                },lineHeight: {
                                    md:'36px',
                                    xs:'24px'
                                }, fontFamily: 'Bitter', fontWeight: 'light', color: 'white', textAlign: 'center'
                            }} component="div">
                                Our goal at The NFT Yacht Club is to provide a
                                lifetime of utility to our holders: Primarily
                                providing an exclusive cocktail and dining
                                experience on a yacht only accessed by NFT.
                                Our mid to long term goal is to expand our fleet of
                                yachts from New York and Miami to ore
                                international locations and grant our holders
                                access.<br />
                                <br />
                                We will be offering special events for New Years,
                                St Patrick’s Day, Cinco De Mayo, Christmas and
                                More!
                            </Typography>
                        </Zoom>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Roadmap;


const Data = [
    {
        id: 1,
        Title: "Acquire The Yacht",
        subtitle: "January 2022",
        des: " Identify and acquire a USCG certified yacht and begin remodel for grand opening."
    },
    {
        id: 2,
        Title: "Securing the Docking",
        subtitle: "February 2022",
        des: "Identify and secure location for docking in New York City & Miami"
    }
    ,
    {
        id: 3,
        Title: "The Platforms",
        subtitle: "July 2022",
        des: "Completion of Discord, Instagram, Twitter, Opensea and the Website."
    }
    ,
    {
        id: 4,
        Title: "Announcement of The NFT Yacht Club",
        subtitle: "July 2022",
        des: "Announcement of The NFT Yacht Club Mint Date."
    }
    ,
    {
        id: 5,
        Title: "The Mint Date",
        subtitle: "August 2022",
        des: "The date the NFT will be available for purchase"
    }
    ,
    {
        id: 6,
        Title: "Summer/ Fall of 2022",
        subtitle: "",
        des: "Hoboken Private Cocktail party exclusively for and complimentary to 75 NFTYC members. Details to follow soon."
    }
    ,
    {
        id: 7,
        Title: "Winter 2022",
        subtitle: "",
        des: "The NFT Yacht Club will travel down to Miami, Florida for select days then return back to New York, New York at the perfect times."
    }
    ,
    {
        id: 8,
        Title: "2023 Q1",
        subtitle: "",
        des: "Continue operating the most exclusive cocktail lounge yacht club in New York & Florida. Begin to host themed events including New Years, St Patrick's Day, July Fourth, Art Pop Ups, Special Guests and More! Select partnerships allowing a fixed amount of Blue Chip NFT’s access to the Yacht Club."
    }
    ,
    {
        id: 9,
        Title: "2023-2024",
        subtitle: "",
        des: "Continue operating the most exclusive yacht club in New York & Florida and finding creative ways to grow and expand The Yacht Club to more exclusive locations on earth. Stay Tuned."
    }
]

