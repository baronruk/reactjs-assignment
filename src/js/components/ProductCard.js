import React from 'react';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    Rating,
    createTheme,
    ThemeProvider,
    IconButton,
} from '@mui/material';

import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import StarIcon from '@mui/icons-material/Star';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { blue } from '@mui/material/colors';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'body2',
                    },
                    style: {
                        fontSize: 11,
                    },
                },
            ],
        },
    },
});

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function ProductCard() {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    return (
        <ThemeProvider theme={theme}>
            <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component='img'
                        className='product-image'
                        alt='Product Image'
                        image='./media/images/placeholder.png'
                    />
                    <CardContent paddingX={1}>
                        <Box>
                            <Typography variant='subtitle1' component='h2'>
                                Product Title
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <LocalOfferIcon sx={{ width: 12.5 }} />
                                <Typography variant='body2' component='p' marginLeft={0.5}>
                                    Product Brand
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    marginX: 'auto',
                                    paddingTop: 3,
                                }}>
                                <Typography variant='body1' component='p'>
                                    Product details
                                </Typography>
                                <Button size='small'>Learn More</Button>
                            </Box>
                        </Box>
                        <Box
                            marginTop={3}
                            padding={1.5}
                            sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Rating
                                name='hover-feedback'
                                size='small'
                                value={value}
                                precision={0.5}
                                getLabelText={getLabelText}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                onChangeActive={(event, newHover) => {
                                    setHover(newHover);
                                }}
                                emptyIcon={
                                    <StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />
                                }
                            />
                            {value !== null && (
                                <Box sx={{ ml: 2, typography: 'body2' }}>
                                    {labels[hover !== -1 ? hover : value]}
                                </Box>
                            )}
                        </Box>
                    </CardContent>
                    <CardActions
                        sx={{
                            display: 'flex',
                            direction: 'row',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                        }}
                        spacing={3}>
                        <Typography variant='h6' component='h3' marginTop={1} paddingX={1}>
                            Price€
                        </Typography>
                        <IconButton aria-label='delete' size='small'>
                            <AddShoppingCartIcon sx={{ fontSize: 40, color: blue[200] }} />
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        </ThemeProvider>
    );
}
