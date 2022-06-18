import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function ProductCard() {
    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                <img
                    className='product-image'
                    src='https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg'
                    alt=''
                />
            </Paper>
        </Grid>
    );
}
