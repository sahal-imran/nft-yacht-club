import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Zoom from 'react-reveal/Zoom';

function FAQ() {
  const router = useRouter();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);

  };
  return (
    <>
      <Box id={'FAQ'} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: '#00141A', py: 8, mt: -1 }} >
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
          <Zoom cascade >
            <Typography variant="h2" sx={{
              fontSize: {
                md: '74px',
                xs: '46px'
              }, fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', textAlign: 'center',
            }} component="div">
              FAQ
            </Typography>
          </Zoom>
          <Box sx={{ width: '100%', mt: 8 }} >
            {
              faqHowitwork.map((item, index) => {
                return <Accordion key={index} sx={{ mt: 2 }} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#22A3D8', fontSize: '41px' }} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    sx={{ backgroundColor: '#0F242B', py: 1 }}
                  >
                    <Typography variant="h2" sx={{
                      fontSize: {
                        md: '30px',
                        xs: '18px'
                      }, lineHeight: {
                        md: '36px',
                        xs: '24px'
                      }, fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textAlign: 'start',
                    }} component="div">
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: '#0F242B' }} >
                    <Typography variant="h2" sx={{
                      fontSize: {
                        md: '30px',
                        xs: '16px'
                      }, lineHeight: {
                        md: '36px',
                        xs: '24px'
                      }, fontFamily: 'AvenirNextRegular', color: '#22A3D8', textAlign: 'start',
                    }} component="div">
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              })
            }
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default FAQ;

const faq = [
  {
    id: 1,
    question: 'What is a Non-Fungible Token? (NFT)',
    answer: 'A non-fungible token is a unique and non-interchangeable unit of data stored on a digital ledger. NFTs can be used to represent easily-reproducible items such as photos, videos, audio, and other types of digital files as unique items, and use blockchain technology to establish a verified and public proof of ownership.'
  },
  {
    id: 2,
    question: 'How many different types of tokens are there?',
    answer: 'There are two types of tokens: The Gold Edition and the Platinum Edition.'
  },
  {
    id: 3,
    question: 'Do all tokens come with the same utility?',
    answer: 'There are two types of tokens: The Gold Edition and the Platinum Edition..'
  },
  {
    id: 4,
    question: 'What is the Mint Price?',
    answer: 'Platinum will be 5 ETH and Gold will be 1.5 ETH'
  },
  {
    id: 5,
    question: 'What is ETH and how do I get it?',
    answer: 'Eth is the cryptocurrency of Ethereum and it can be purchased on coinbase.'
  },
  {
    id: 6,
    question: 'When is the Mint?',
    answer: 'This collection will be available for purchase July 28th, 2022. Whitelist will be able to mint an hour before.'
  },
  {
    id: 7,
    question: 'What is the Supply and Available Supply?',
    answer: 'The total supply is 10,000 ( 8000 Gold & 2000 Platinum ) with 500 kept in our reserves.'
  },
  {
    id: 8,
    question: 'What is the max per wallet and transaction?',
    answer: 'Two per wallet with no limit on the number of transactions.'
  },
  {
    id: 9,
    question: 'Where will The NFT Yacht Club be located?',
    answer: 'The Yacht will be primarily docked in New York, New York and travel down to Miami, Florida in the winter.'
  },
  {
    id: 10,
    question: 'Should I buy an NFT even though I am not in the USA?',
    answer: 'As web3 continues to evolve we will see many platforms like Opensea implement leasing mechanisms where a token holder can lease “ rent out” their token to a non-token holder on a monthly basis, this could potentially create a new stream of income for many of our holders. We also expect a potential appreciation of the token value due to the amount of utility that comes with ownership of the token. After we successfully establish our presence in New York and Miami we will strategically begin to expand internationally'
  },
  {
    id: 11,
    question: 'Can I lease my token to someone else if I can’t use it for the month?',
    answer: 'Yes, you can lease your token on the secondary market.'
  },

  {
    id: 12,
    question: 'If I sell my token, are there fees associated with the transaction?',
    answer: 'Yes, all secondary sales on Opensea include 2.5% to Opensea and 7.5% to The NFT Yacht Club, both of which are paid by the seller.'
  },
  {
    id: 13,
    question: 'What does ownership of this NFT grant me?',
    answer: 'Your token gives you membership and access to The NFT Yacht Club, a USCG CertifiedYacht with 4 levels which include the Main Dining Room, The Cigar Lounge, The Night Club and The SkyDeck Rooftop Lounge. All Food and Beverage costs are additional.'
  },
  {
    id: 15,
    question: 'Will there be any special amenities onboard?',
    answer: 'We will have crypto ATMs onboard, NFT vending machines, and more!'
  },
  {
    id: 16,
    question: 'If I don’t want to be a member any longer, can I sell my token? If so, how?',
    answer: 'You can sell your token on the secondary market (i.e: Opensea.io).'
  },
  {
    id: 18,
    question: 'How long is my membership valid for?',
    answer: 'Your membership will remain valid as long as you are a token holder.'
  },
  {
    id: 19,
    question: 'When will the NFT Yacht Club events start?',
    answer: 'Q4 2022'
  },
  {
    id: 20,
    question: 'Will non-members have access to the restaurant?',
    answer: 'Non-members will only have access to the yacht if they are a guest of a token holder.'
  },
  {
    id: 21,
    question: 'How many reservations can an NFTYC holder make each month?',
    answer: 'Reservations are made on a first come, first serve basis to all token holders. You do not need a reservation to enjoy the restaurant, however, you’re also not guaranteed a table without a reservation. If there are available tables while you’re enjoying the cocktail room, token holders will be offered any available tables that exist.'
  },
  {
    id: 22,
    question: 'How far in advance can I make a reservation?',
    answer: 'You can make your reservation up to 15 days in advance of the day you’d like to visit.'
  },
  {
    id: 23,
    question: 'Is there a limit on the number of reservations a token holder can make?',
    answer: 'NFT Yacht Club members can make as many reservations as they’d like.'
  },
  {
    id: 24,
    question: 'How many guests can you bring with the Gold Membership?',
    answer: 'Gold Token Holders can bring up to 1 guest.'
  },
  {
    id: 25,
    question: 'How many guests can you bring with the Platinum Membership?',
    answer: 'Platinum Token Holders can bring up to 9 guests.'
  }
]

const faqHowitwork = [
  {
    id: 1,
    question: 'What is a Non-Fungible Token? (NFT)',
    answer: 'A non-fungible token is a unique and non-interchangeable unit of data stored on a digital ledger. NFTs can be used to represent easily-reproducible items such as photos, videos, audio, and other types of digital files as unique items, and use blockchain technology to establish a verified and public proof of ownership.'
  },
  {
    id: 2,
    question: 'How many different types of tokens are there?',
    answer: 'There are two types of tokens: The Gold Edition and the Platinum Edition.'
  },
  {
    id: 3,
    question: 'Do all tokens come with the same utility?',
    answer: 'There are two types of tokens: The Gold Edition and the Platinum Edition..'
  },
  {
    id: 4,
    question: 'What is the Mint Price?',
    answer: 'Platinum will be 5 ETH and Gold will be 1.5 ETH'
  },
  {
    id: 5,
    question: 'How does a token holder pay for their food and beverage on the yacht?',
    answer: 'Eth is the cryptocurrency of Ethereum and it can be purchased on coinbase.'
  },
  {
    id: 6,
    question: 'When is the Mint?',
    answer: 'This collection will go live in August 2022. You can check out our discord for additional information!'
  },
  {
    id: 7,
    question: 'What is the Supply and Available Supply?',
    answer: 'The total supply is 10,000 ( 8000 Gold & 2000 Platinum ) with 500 kept in our reserves.'
  },
  {
    id: 28,
    question: 'Is there an age requirement to be a token holder?',
    answer: 'There is no age to be a token holder. However, all laws in states and cities will apply.'
  },
  {
    id: 8,
    question: 'What is the max per wallet and transaction?',
    answer: 'Two per wallet with no limit on the number of transactions.'
  },
  {
    id: 9,
    question: 'Where will The NFT Yacht Club be located?',
    answer: 'The Yacht will be primarily docked in New York, New York and travel down to Miami, Florida in the winter.'
  },
  {
    id: 10,
    question: 'Should I buy an NFT even though I am not in the USA?',
    answer: 'As web3 continues to evolve we will see many platforms like Opensea implement leasing mechanisms where a token holder can lease “ rent out” their token to a non-token holder on a monthly basis, this could potentially create a new stream of income for many of our holders. We also expect a potential appreciation of the token value due to the amount of utility that comes with ownership of the token. After we successfully establish our presence in New York and Miami we will strategically begin to expand internationally'
  },
  {
    id: 11,
    question: 'Can I lease my token to someone else if I can’t use it for the month?',
    answer: 'Yes, you can lease your token on the secondary market.'
  },

  {
    id: 12,
    question: 'If I sell my token, are there fees associated with the transaction?',
    answer: 'Yes, all secondary sales on Opensea include 2.5% to Opensea and 7.5% to The NFT Yacht Club, both of which are paid by the seller.'
  },
  {
    id: 13,
    question: 'What does ownership of this NFT grant me?',
    answer: 'Your token gives you membership and access to The NFT Yacht Club, a USCG CertifiedYacht with 4 levels which include the Main Dining Room, The Cigar Lounge, The Night Club and The SkyDeck Rooftop Lounge. All Food and Beverage costs are additional.'
  },
  {
    id: 15,
    question: 'Will there be any special amenities onboard?',
    answer: 'We will have crypto ATMs onboard, NFT vending machines, and more!'
  },
  {
    id: 16,
    question: 'If I don’t want to be a member any longer, can I sell my token? If so, how?',
    answer: 'You can sell your token on the secondary market (i.e: Opensea.io).'
  },
  {
    id: 18,
    question: 'How long is my membership valid for?',
    answer: 'Your membership will remain valid as long as you are a token holder.'
  },
  {
    id: 19,
    question: 'When will the NFT Yacht Club events start?',
    answer: 'Q4 2022'
  },
  {
    id: 20,
    question: 'Will non-members have access to the restaurant?',
    answer: 'Non-members will only have access to the yacht if they are a guest of a token holder.'
  },
  {
    id: 21,
    question: 'How many reservations can an NFTYC holder make each month?',
    answer: 'Reservations are made on a first come, first serve basis to all token holders. You do not need a reservation to enjoy the restaurant, however, you’re also not guaranteed a table without a reservation. If there are available tables while you’re enjoying the cocktail room, token holders will be offered any available tables that exist.'
  },
  {
    id: 22,
    question: 'How far in advance can I make a reservation?',
    answer: 'You can make your reservation up to 15 days in advance of the day you’d like to visit.'
  },
  {
    id: 23,
    question: 'Is there a limit on the number of reservations a token holder can make?',
    answer: 'NFT Yacht Club members can make as many reservations as they’d like.'
  },
  {
    id: 24,
    question: 'How many guests can you bring with the Gold Membership?',
    answer: 'Gold Token Holders can bring up to 1 guest.'
  },
  {
    id: 25,
    question: 'How many guests can you bring with the Platinum Membership?',
    answer: 'Platinum Token Holders can bring up to 9 guests.'
  }
]