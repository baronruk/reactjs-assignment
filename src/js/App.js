import '../css/App.css';
import Container from '@mui/material/Container';
import ProductCard from './components/ProductCard';
import Grid from '@mui/material/Grid';

function App() {
    return (
        <div className='App'>
            <Container>
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
