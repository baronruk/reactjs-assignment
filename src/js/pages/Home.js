import { Container, Grid, Typography } from '@mui/material';

import ProductCard from '../components/ProductCard';
import categories from '../../data.json';

export default function Home() {
    return (
        <div className='App'>
            <Container sx={{ marginY: 5 }}>
                {categories.map(category => {
                    return (
                        <>
                            <Typography variant='h4' component='h2' marginBottom={3} marginTop={5}>
                                Most Popular {category.category}
                            </Typography>
                            <Grid container spacing={4}>
                                {category.products.map(product => {
                                    return <ProductCard product={product} />;
                                })}
                            </Grid>
                        </>
                    );
                })}
            </Container>
        </div>
    );
}
