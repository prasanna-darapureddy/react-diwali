import React from 'react'
import { Box, Stack, Typography, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import bgImage from '../../assets/bg_diwali.png'
import DiwaliTitle from '../../assets/happty_diwal.png'
import fireBg from '../../assets/fire_work.png'
import lamp from '../../assets/w1.png';
import WishesImg from '../../assets/w2.png';
import './Banner.css'

const BannerItem = styled(Stack)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    height: 930,
    background: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    marginBottom: '0px',
    sm: { height: 500 }
}));

const FireBgItem = styled(Stack)(({ theme }) => ({
    background: `url(${fireBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top-center',
    textAlign: 'center',
    minHeight: '100vh',
}))


const GridItem = styled(Stack)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
}));


function Banner() {
    return (
        <Box sx={{ width: '100%', marginTop: '30px', sm: { width: '200px', height: '200px' } }}>

            <BannerItem sx={{ sm: { width: '200px', height: '200px' } }} id='Home'>
                <Typography sx={{ marginTop: '120px', marginBottom: 0, textAlign: 'center', display: { sm: 'none', md: 'inline' } }}>
                    <img src={DiwaliTitle} alt="Happy Diwali" className='happy-diwali-img' />
                </Typography>
            </BannerItem>

            <Typography sx={{ marginBottom: 0, textAlign: 'center', display: { md: 'none' } }}>
                <img src={DiwaliTitle} alt="Happy Diwali" className='small-happy-diwali-img' />
            </Typography>
            <Stack spacing={2} id='Wishes'>
                <FireBgItem sx={{ width: '100%', marginTop: '0px' }}>
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <GridItem>
                                    <img src={lamp} alt="Lamp" />
                                </GridItem>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <GridItem>
                                    <div className='content-container'>
                                        <h1 className='wishes-heading'>Your Wishes</h1>
                                        <p className='wishes-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown..
                                            <br />
                                            <br />
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
                                        <button className='read-button'>Read more</button>
                                    </div>
                                </GridItem>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <GridItem sx={{ marginTop: '30px' }}>
                                    <div className='content-container'>
                                        <h1 className='wishes-heading'>Your Wishes</h1>
                                        <p className='wishes-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown..
                                            <br />
                                            <br />
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
                                        <button className='read-button'>Read more</button>
                                    </div>
                                </GridItem>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <GridItem>
                                    <img src={WishesImg} alt="Lamp" />
                                </GridItem>
                            </Grid>

                        </Grid>
                    </Container>
                </FireBgItem>
            </Stack>
        </Box>
    )
}

export default Banner

