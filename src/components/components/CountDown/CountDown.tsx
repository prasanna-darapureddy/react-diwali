import { Box, Stack, Typography, Button } from '@mui/material';
import CounterBg from '../../assets/bg_counter.png';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react'

const BannerItem = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  height: 530,
  background: `url(${CounterBg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  marginBottom: '0px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 40,
}));

const CounterButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#ffd030',
  color: '#521407',
  marginTop: 30,
  fontWeight: 600,
  marginRight: 10,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 30,
  borderBottomRightRadius: 0,
  borderBottomLeftRadius: 30,
  fontSize: 20,
}))

interface IState {
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
}

function CountDown() {
  const [daysCount, setDaysCount] = useState<IState['days']>(0)
  const [hoursCount, setHoursCount] = useState<IState['hours']>(0)
  const [minutesCount, setMinutesCount] = useState<IState['minutes']>(0)
  const [secondsCount, setSecondsCount] = useState<IState['seconds']>(0)

  const targetDate: Date = new Date('2023-11-12T00:00:00');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now: Date = new Date();
      const timeDifference = targetDate as any - (now as any);

      if (timeDifference <= 0) {
        clearInterval(intervalId);
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setDaysCount(days);
      setHoursCount(hours);
      setMinutesCount(minutes);
      setSecondsCount(seconds);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);


  return (

    <Box>
      <BannerItem>
        <Typography variant='h3' color='#fff' >Diwali is Coming!</Typography>
        <Typography variant='h5' color='#fff'>Let's count down to Diwali</Typography>
        <Typography component='div'>
          <CounterButton>{daysCount} <br /> Days</CounterButton>
          <CounterButton>{hoursCount} <br /> Hours</CounterButton>
          <CounterButton>{minutesCount}<br /> Minutes</CounterButton>
          <CounterButton>{secondsCount} <br /> Seconds</CounterButton>
        </Typography>
      </BannerItem>
    </Box>

  )
}

export default CountDown