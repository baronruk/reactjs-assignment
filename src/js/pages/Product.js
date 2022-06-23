import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import FAQAccordions from '../components/FAQaccordion';
import FooterNavigation from '../components/FooterNavigation';

export default function Product() {
    return (
        <Container sx={{ width: 900, marginY: 5 }}>
            <Typography variant='h3' component='h1' marginTop={3}>
                Product Placeholder Page
            </Typography>
            <Box marginTop={3} display='flex' justifyContent='center' alignItems='center'>
                <img src='./media/images/placeholder.png' height={325} />
            </Box>
            <Typography variant='h6' component='h4' marginTop={3}>
                About this Product
            </Typography>
            <Box sx={{ display: 'flex' }}>
                <Typography variant='paragraph' component='p' marginY={3}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit voluptates rem
                    quos delectus debitis earum modi, ipsum veritatis. Perferendis officiis nobis,
                    aut hic praesentium nulla vero, possimus omnis reprehenderit blanditiis quis
                    incidunt minima voluptatibus illum quam corporis libero fugiat doloremque. Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem officiis
                    commodi beatae animi incidunt necessitatibus aut provident ad ex. Saepe!
                </Typography>
            </Box>
            <Typography variant='h6' component='h4' marginBottom={3}>
                Frequently Asked Questions
            </Typography>
            <FAQAccordions />
            <FooterNavigation />
        </Container>
    );
}
