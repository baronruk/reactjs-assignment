import '../css/App.css';

import { Container, Grid, Typography } from '@mui/material';

import ProductCard from './components/ProductCard';
import SearchAppBar from './components/AppBar';

function App() {
    return (
        <div className='App'>
            <SearchAppBar />
            <Container sx={{ marginY: 5 }}>
                <Typography variant='h4' component='h2' marginBottom={3} marginTop={5}>
                    Keyboards
                </Typography>
                <Grid container spacing={4}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </Grid>
            </Container>
        </div>
    );
}

export default App;
