import { Container, Typography, Box } from '@mui/material';
import { Helmet } from 'react-helmet';
import './InDeveloping.css';

const InDeveloping: React.FC = () => {
    return (
        <Container maxWidth="sm" className="in-developing-section">
            <Helmet>
                <title>En Construcción - CMT</title>
            </Helmet>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h2" component="h1" gutterBottom>
                    En Construcción
                </Typography>
                <Typography variant="h6" component="p">
                    Estamos trabajando en esta página. ¡Vuelve pronto!
                </Typography>
            </Box>
        </Container>
    );
};

export default InDeveloping;