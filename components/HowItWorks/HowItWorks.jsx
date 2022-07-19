import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Zoom from 'react-reveal/Zoom';
import { Link } from "react-scroll";

function HowItWorks() {
  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: '#00141A', py: 12 }} >
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
          <Zoom cascade >
            <Typography variant="h2" sx={{
              fontSize: {
                md: '74px',
                xs: '46px'
              }, fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', textAlign: 'center', textShadow: '0px 0px 6px white',
            }} component="div">
              How it Works
            </Typography>
          </Zoom>
          <Box sx={{
            width: '100%', display: {
              md: 'flex',
              xs: 'none'
            }, justifyContent: 'center', alignItems: 'center', mt: 4
          }} >
            <Zoom cascade >
              <Link
                duration={500}
                className={"ScrollLink"}
                to={'Intro'}
                spy={true}
                activeClass={"Scrollactive"}
                smooth={true}
              >
                Intro
              </Link>
            </Zoom>
            <Zoom cascade >
              <Link
                duration={500}
                className={"ScrollLink"}
                to={'Breakdown'}
                spy={true}
                activeClass={"Scrollactive"}
                smooth={true}
              >
                Breakdown
              </Link>
            </Zoom>
            <Zoom cascade >
              <Link
                duration={500}
                className={"ScrollLink"}
                to={'Reservations'}
                spy={true}
                activeClass={"Scrollactive"}
                smooth={true}
              >
                Reservations & Entrance Policy
              </Link>
            </Zoom>
            <Zoom cascade >
              <Link
                duration={500}
                className={"ScrollLink"}
                to={'FAQ'}
                spy={true}
                activeClass={"Scrollactive"}
                smooth={true}
              >
                FAQ
              </Link>
            </Zoom>
          </Box>
          <Box sx={{ width: '100%', height: '1px', background: 'white', mt: 6 }} ></Box>
        </Container>
        <Box id={'Intro'} sx={{
          width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
            md: 'row-reverse',
            xs: 'column'
          }, mt: 12
        }} >
          <Box sx={{
            width: {
              md: '54%',
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
              <img src="/h1.png" alt="img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Zoom>
          </Box>
          <Box sx={{
            width: {
              md: '46%',
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
                    md: '69px',
                    xs: '36px'
                  }, lineHeight: {
                    md: "91px"
                  }, fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', textAlign: {
                    md: 'start',
                    xs: 'center'
                  }
                }} component="div">
                  Intro
                </Typography>
                <Typography variant="h2" sx={{
                  fontSize: {
                    md: '25px',
                    xs: '16px'
                  },lineHeight: {
                    md:'36px',
                    xs:'24px'
                }, fontFamily: 'Bitter', fontWeight: 'light', color: 'white', textAlign: {
                    md: 'start',
                    xs: 'center'
                  }, mt: 2,
                }} component="div">
                  Ownership of this NFT represents exclusive
                  access to “The NFT Yacht Club” community and
                  access to a members-only yacht lounge. As an
                  NFT member you will have access to our fine
                  dining restaurant located on the first level, a
                  bustling cocktail cigar lounge on the second level,
                  a premium nightlife experience on the third level
                  and enjoy the outdoor sky deck on the fourth level.<br />
                  <br />
                  Food and Beverage will be sold separately and are
                  not included in the token price. Payment for F&B
                  will be accepted in cash or any major Credit Cards
                  and Debit Cards. As regulation becomes more
                  clear we will aim to add crypto-currencies for
                  payments.
                </Typography>
              </Zoom>
            </Box>
          </Box>
        </Box>
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 12 }} >
          <Box sx={{
            width: '100%', minHeight: '515px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', borderRadius: '48px', boxShadow: '0px 3px 70px rgba(255, 255, 255, 0.4) inset', backgroundColor: 'rgba(93, 93, 93, 0.2)', p: {
              md: 6,
              xs: 2
            }
          }} >
            <Zoom cascade >
              <Typography variant="h2" sx={{
                fontSize: {
                  md: '70px',
                  xs: '46px'
                }, fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize', textAlign: 'center'
              }} component="div">
                Why NFTs?
              </Typography>
              <Typography variant="h2" sx={{
                fontSize: {
                  md: '30px',
                  xs: '16px'
                },lineHeight: {
                  md:'36px',
                  xs:'24px'
              }, fontFamily: 'Bitter', fontWeight: 'light', color: 'white', textAlign: 'center', mt: 4
              }} component="div">
                As an NFT, the membership
                becomes an asset to the token
                holder as opposed to traditional
                memberships. Allow the token
                holder to use, sell, transfer or
                lease the NFT on the secondary
                market. By utilizing NFTs we are not only
                expanding the use of NFTs in real
                world businesses but also allowing
                us to interact and communicate
                with our community in a much
                more efficient and secure way!
              </Typography>
            </Zoom>
          </Box>
        </Container>
        <Box id='HowitWoksShortBG' sx={{ width: '100%', height: '550px', mt: 8 }} ></Box>
        <Box id={'Breakdown'} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', py: 8, backgroundColor: '#02141A' }} >
          <Container maxWidth="lg" sx={{
            display: 'flex', justifyContent: 'center', alignItems: {
              md: 'start',
              xs: 'center'
            }, flexDirection: 'column'
          }} >
            <Zoom cascade >
              <Typography variant="h2" sx={{
                fontSize: {
                  md: '74px',
                  xs: '46px'
                }, lineHeight: {
                  md: '99px'
                }, fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize',
              }} component="div">
                Breakdown
              </Typography>
              <Typography variant="h2" sx={{
                fontSize: {
                  md: '25px',
                  xs: '20px'
                }, lineHeight: {
                  md: '30px',
                  xs: '28px'
                }, fontFamily: 'Bitter', fontWeight: 'light', color: 'white', textAlign: {
                  md: 'start',
                  xs: 'center'
                }
              }} component="div">
                NFTYC memberships are purchased with a cryptocurrency called Ether (ETH).
              </Typography>
            </Zoom>
          </Container>
          <Box sx={{
            width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
              md: 'row',
              xs: 'column'
            }, mt: 6
          }} >
            <Box sx={{
              display: {
                md: 'flex', xs: 'none'
              }, justifyContent: 'center', alignItems: 'center', width: {
                md: '40%',
                xs: '100%'
              }, height: {
                md: '250px',
                xs: 'auto'
              }, borderTopRightRadius: '48px', borderBottomRightRadius: '48px', border: '1px solid white', boxShadow: '0px 3px 70px rgba(255, 255, 255, 0.4) inset', position: "relative", ml: -2
            }} >
              <Box sx={{ width: '490px', height: '490px', position: 'absolute', right: '0px', mb: 4 }} >
                <Zoom cascade >
                  <img src="/icon1.png" alt="img" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </Zoom>
              </Box>
            </Box>
            <Box sx={{
              width: '100%', height: '300px', display: {
                md: 'none',
                xs: 'flex'
              }
            }} >
              <img src="/icon1.png" alt="img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Box sx={{
              width: {
                md: '60%',
                xs: '100%'
              }, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', px: {
                md: 4,
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
                      md: '24px',
                      xs: '20px'
                    }, lineHeight: {
                      md: '30px',
                      xs: '28px'
                    }, fontFamily: 'Bitter', fontWeight: 'bold', color: 'white', textAlign: {
                      md: 'start',
                      xs: 'center'
                    }
                  }} component="div">
                    What is ETH and how do I get it?
                  </Typography>
                  <Typography variant="h2" sx={{
                    fontSize: {
                      md: '24px',
                      xs: '16px'
                    }, lineHeight: '24px', fontFamily: 'Bitter', fontWeight: 'light', color: 'white', textAlign: {
                      md: 'start',
                      xs: 'center'
                    }, mt: 1,
                  }} component="div">
                    ETH is the cryptocurrency of Ethereum.
                  </Typography>
                  <Typography variant="h2" sx={{
                    fontSize: {
                      md: '24px',
                      xs: '20px'
                    }, lineHeight: {
                      md: '30px',
                      xs: '28px'
                    }, fontFamily: 'Bitter', fontWeight: 'bold', color: 'white', textAlign: {
                      md: 'start',
                      xs: 'center'
                    }, mt: 2
                  }} component="div">
                    What is ETH and how do I get it?
                  </Typography>
                  <Typography variant="h2" sx={{
                    fontSize: {
                      md: '20px',
                      xs: '16px'
                    }, lineHeight: '24px', fontFamily: 'Bitter', fontWeight: 'light', color: 'white', textAlign: {
                      md: 'start',
                      xs: 'center'
                    }, mt: 1
                  }} component="div">
                    You will need a private hot wallet to receive your membership token. We’ll explain more below.
                  </Typography>
                </Zoom>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: '100%', height: '34px', backgroundColor: 'rgba(0,0,0,0.47)' }} ></Box>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', py: 8, backgroundColor: '#02141A' }} >
          <Container maxWidth="lg" sx={{
            display: 'flex', justifyContent: 'center', alignItems: {
              md: 'start',
              xs: 'center'
            }, flexDirection: 'column'
          }} >
            <Zoom cascade >
              <Typography variant="h2" sx={{
                fontSize: {
                  md: '40px',
                  xs: '30px'
                }, lineHeight: {
                  md: '55px'
                }, fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize',textAlign:{
                  md:'start',
                  xs:'center'
                }
              }} component="div">
                The memberships for NFTYC are in the form of a Non-Fungible Token (NFT). They will be available on our website in January 2022.
              </Typography>
            </Zoom>
          </Container>
          <Box sx={{
            width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
              md: 'row',
              xs: 'column'
            }, mt: 6
          }} >
            <Box sx={{
              display: {
                md: 'flex', xs: 'none'
              }, justifyContent: 'center', alignItems: 'center', width: {
                md: '40%',
                xs: '100%'
              }, height: {
                md: '250px',
                xs: 'auto'
              }, borderTopRightRadius: '48px', borderBottomRightRadius: '48px', border: '1px solid white', boxShadow: '0px 3px 70px rgba(255, 255, 255, 0.4) inset', position: "relative", ml: -2
            }} >
              <Box sx={{ width: '350px', height: '350px', position: 'absolute', right: '80px', mt: 4 }} >
                <Zoom cascade >
                  <img src="/icon2.png" alt="img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Zoom>
              </Box>
            </Box>
            <Box sx={{
              width: '100%', height: '350px', display: {
                md: 'none',
                xs: 'flex'
              }
            }} >
              <Zoom cascade >
                <img src="/icon2.png" alt="img" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </Zoom>
            </Box>
            <Box sx={{
              width: {
                md: '60%',
                xs: '100%'
              }, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', px: {
                md: 4,
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
                      md: '24px',
                      xs: '20px'
                    }, lineHeight: {
                      md: '30px',
                      xs: '28px'
                    }, fontFamily: 'Bitter', fontWeight: 'bold', color: 'white', textAlign: {
                      md: 'start',
                      xs: 'center'
                    }
                  }} component="div">
                    What is an NFT?
                  </Typography>
                  <Typography variant="h2" sx={{
                    fontSize: {
                      md: '20px',
                      xs: '16px'
                    }, lineHeight: '24px', fontFamily: 'Bitter', fontWeight: 'light', color: 'white', textAlign: {
                      md: 'start',
                      xs: 'center'
                    }, mt: 1
                  }} component="div">
                    A non-fungible token is a unique and non-interchangeable unit of data stored on a digital ledger. NFTs can be used to represent easily-reproducible items such as photos, videos, audio, and other types of digital files as unique items, and use blockchain technology to establish a verified and public proof of ownership.
                  </Typography>
                </Zoom>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: '100%', height: '34px', backgroundColor: 'rgba(0,0,0,0.47)' }} ></Box>
        {/* Walle Box */}
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', py: 8, backgroundColor: '#02141A' }} >
          <Container maxWidth="lg" sx={{
            display: 'flex', justifyContent: 'center', alignItems: {
              md: 'start',
              xs: 'center'
            }, flexDirection: 'column'
          }} >
            <Zoom cascade >
              <Typography variant="h2" sx={{
                fontSize: {
                  md: '40px',
                  xs: '30px'
                }, lineHeight: {
                  md: '55px'
                }, fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize',textAlign:{
                  md:'start',
                  xs:'center'
                }
              }} component="div">
                When the drop happens (aka when the membership is available for purchase), you will need to have enough ETH in your own hot wallet to check out.
              </Typography>
            </Zoom>
          </Container>
          <Box sx={{
            width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
              md: 'row',
              xs: 'column'
            }, mt: 4, height: {
              md: '600px'
            }
          }} >
            <Box sx={{
              width: {
                md: '60%',
                xs: '100%'
              }, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', px: {
                md: 14,
                xs: 2
              }
            }} >
              <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: {
                md:'start',
                xs:'center'
              }, flexDirection: 'column' }} >
                <Zoom cascade >
                  <Typography variant="h2" sx={{
                    fontSize: {
                      md: '24px',
                      xs: '20px'
                    }, lineHeight: {
                      md: '30px',
                      xs: '28px'
                    }, fontFamily: 'Bitter', fontWeight: 'bold', color: 'white',textAlign: {
                      md: 'start',
                      xs: 'center'
                    }
                  }} component="div">
                    What is a hot wallet?
                  </Typography>
                  <Typography variant="h2" sx={{
                    fontSize: {
                      md: '20px',
                      xs: '16px'
                    }, lineHeight: '24px', fontFamily: 'Bitter', fontWeight: 'light', color: 'white', textAlign: {
                      md: 'start',
                      xs: 'center'
                    }, mt: 1
                  }} component="div">
                    A hot wallet refers to a virtual currency wallet that is accessible online, and it facilitates cryptocurrency transactions between the owner and end-users. A collection of private keys stored on a program connected to the internet is used to store and send different currencies such as Ethereum, Bitcoin, etc.<br />
                    <br />
                    There are two wallets you will need. One to purchase the cryptocurrency ETH (we recommend Coinbase) and the other to purchase the NFT (we recommend Metamask).
                  </Typography>
                  <Typography variant="h2" sx={{
                    fontSize: {
                      md: '24px',
                      xs: '20px'
                    }, lineHeight: {
                      md: '30px',
                      xs: '28px'
                    }, fontFamily: 'Bitter', fontWeight: 'bold', color: 'white', mt: 3,textAlign: {
                      md: 'start',
                      xs: 'center'
                    }
                  }} component="div">
                    Why do I need a hot wallet? Can’t I just transfer money from my account from a crypto exchange?
                  </Typography>
                  <Typography variant="h2" sx={{
                    fontSize: {
                      md: '20px',
                      xs: '16px'
                    }, lineHeight: '24px', fontFamily: 'Bitter', fontWeight: 'light', color: 'white', textAlign: {
                      md: 'start',
                      xs: 'center'
                    }, mt: 1
                  }} component="div">
                    Hot wallets is how you would store NFTs. When you buy ETH from an exchange, the ETH is often stored in an account balance for you. These account balances might not be set up to receive NFTs if you use it to send funds.
                  </Typography>
                </Zoom>
              </Box>
            </Box>
            <Box sx={{
              width: {
                md: '40%',
                xs: '90%'
              }, height: '100%', borderRadius: {
                md: "48px 0px 0px 48px",
                xs: '48px'
              }, boxShadow: '0px 3px 70px rgba(255, 255, 255, 0.4) inset', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: {
                md: 0,
                xs: 4
              }
            }} >
              <Box sx={{
                width: {
                  md: '580px',
                  xs: '300px'
                }, height: {
                  md: '580px',
                  xs: '300px'
                }
              }} >
                <Zoom cascade >
                  <img src="/wallet.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="img" />
                </Zoom>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box id='HowitWoksShortBG2' sx={{ width: '100%', height: '550px', mt: 4 }} ></Box>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#000000' }} >
          <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', py: 12 }} >
            <Zoom cascade >
              <Typography variant="h2" sx={{
                fontSize: {
                  md: '40px',
                  xs: '30px'
                }, lineHeight: {
                  md: '55px'
                }, fontFamily: 'AvenirNextRegular', color: '#FFFFFF', textTransform: 'capitalize',textAlign:{
                  md:'start',
                  xs:'center'
                }
              }} component="div">
                Once you own the NFTYC Membership NFT, you will be able to make reservations on our website. Non-token holders will not have the ability to make reservations.
              </Typography>
              <Typography variant="h2" sx={{
                fontSize: {
                  md: '24px',
                  xs: '20px'
                }, lineHeight: {
                  md: '30px',
                  xs: '28px'
                }, fontFamily: 'Bitter', fontWeight: 'bold', color: 'white', mt: 6
              }} component="div">
                When will yacht events start?
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
                We are planning to open in Q1/Q2, 2023.
              </Typography>
              <Typography variant="h2" sx={{
                fontSize: {
                  md: '24px',
                  xs: '20px'
                }, lineHeight: {
                  md: '30px',
                  xs: '28px'
                }, fontFamily: 'Bitter', fontWeight: 'bold', color: 'white', mt: 3
              }} component="div">
                How long does the membership last?
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
                For the lifetime of the yacht club.
              </Typography>
              <Typography variant="h2" sx={{
                fontSize: {
                  md: '30px',
                  xs: '22px'
                }, lineHeight: {
                  md: '36px',
                  xs: '28px'
                }, fontFamily: 'Bitter', fontWeight: 'light', color: 'white', mt: 6
              }} component="div">
                There will be no transaction fees involved to make a reservation, however members will need to have access to the wallet where their membership NFT is kept in order to verify ownership.
              </Typography>
            </Zoom>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default HowItWorks;