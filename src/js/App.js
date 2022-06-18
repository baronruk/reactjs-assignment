import '../css/App.css';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import ProductCard from './components/ProductCard';
import SearchAppBar from './components/AppBar';

function App() {
    return (
        <div className='App'>
            <SearchAppBar />
            <Container sx={{ marginY: 5 }}>
                <Grid container spacing={5}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </Grid>
            </Container>
        </div>
    );
}

export default App;
