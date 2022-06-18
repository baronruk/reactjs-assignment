import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { AccessTime } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import { createTheme, ThemeProvider } from '@mui/material';

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
            <Grid item xs={3}>
                <Paper elevation={3}>
                    <img
                        className='product-image'
                        src='./media/images/placeholder.png'
                        alt='Product Image'
                    />
                    <Box paddingX={1}>
                        <Typography variant='subtitle1' component='h2'>
                            Product Title
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <AccessTime sx={{ width: 12.5 }} />
                            <Typography variant='body2' component='p' marginLeft={0.5}>
                                Product Brand
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }} marginTop={3} padding={1.5}>
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
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
                        />
                        {value !== null && (
                            <Box sx={{ ml: 2, typography: 'body2' }}>
                                {labels[hover !== -1 ? hover : value]}
                            </Box>
                        )}
                    </Box>
                    <Box>
                        <Typography variant='h6' component='h3' marginTop={1} paddingX={1}>
                            Price€
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
        </ThemeProvider>
    );
}
