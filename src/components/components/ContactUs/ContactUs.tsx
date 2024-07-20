import React, { useState } from 'react'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Container } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import MailIcon from '@mui/icons-material/Mail';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import './ContactUs.css'

interface IState {
    name: string,
    email: string,
    number: string,
    message: string,
    isEmpty: boolean,
}

function ContactUs() {
    const [name, setName] = useState<IState['name']>('')
    const [email, setEmail] = useState<IState['email']>('')
    const [number, setNumber] = useState<IState['number']>('')
    const [message, setMessage] = useState<IState['message']>('')
    const [isEmpty, setIsEmpty] = useState<IState['isEmpty']>(false)

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
        setIsEmpty(false)
    }
    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        setIsEmpty(false)
    }
    const onChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(e.target.value)
        setIsEmpty(false)
    }
    const onChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value)
        setIsEmpty(false)
    }

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (name === '' || email === '' || number === '' || message === '') {
            setIsEmpty(true)
        } else {
            setIsEmpty(false)
        }
    }



    return (
        <>
            <div className='contact-bg-container' id='Contact'>
                <div className='contact-container'>
                    <h1 className='contact-heading'>Contact Us</h1>
                    <div className='form-container'>
                        <div className='info-container'>
                            <Container>
                                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar sx={{ bgcolor: '#FFD030' }}>
                                                <TelegramIcon sx={{ color: '#521407' }} />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText sx={{ color: '#521407' }} primary="Address" secondary="Fleming 196 Woodside Circle, FL 36602" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar sx={{ bgcolor: '#FFD030' }}>
                                                <MailIcon sx={{ color: '#521407' }} />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText sx={{ color: '#521407' }} primary="Email" secondary="demoinfo@gmail.com" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar sx={{ bgcolor: '#FFD030' }}>
                                                <WifiCalling3Icon sx={{ color: '#521407' }} />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText sx={{ color: '#521407' }} primary="Phone Number" secondary="+91 12345 67890" />
                                    </ListItem>
                                </List>
                            </Container>
                        </div>

                        <form onSubmit={onSubmitForm} className={isEmpty ? 'inputs-container shake' : 'inputs-container'}>
                            <div className='first-inputs'>
                                <div>
                                    <input type='text' className='user-input name-input' placeholder='Your Name' value={name} onChange={onChangeName} />
                                    {isEmpty ? <p className='error-msg'>Please enter your name</p> : null}
                                </div>
                                <div>
                                    <input type='text' className='user-input mail-input' placeholder='Your Email' onChange={onChangeEmail} />
                                    {isEmpty ? <p className='error-msg'>Please enter your email</p> : null}
                                </div>
                            </div>
                            <input type='text' className='user-input' placeholder='Your Number' onChange={onChangeNumber} />
                            {isEmpty ? <p className='error-msg'>Please enter your number</p> : null}
                            <textarea className='user-input message-input' placeholder='Your Message' onChange={onChangeMessage}></textarea>
                            {isEmpty ? <p className='error-msg'>Write your message</p> : null}
                            <button type="submit" className='send-button'>SEND MESSAGE</button>
                            {isEmpty ? <h2 className='error-msg question'>Did you fill the form properly?</h2> : null}
                        </form>
                    </div>
                </div>
            </div>

            <div className='footer-container'>
                <p className='footer-text'>Copyright © 2021 All Rights Reserved. Design by Free Html Templates</p>
            </div>
        </>
    )
}

export default ContactUs