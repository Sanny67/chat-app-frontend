import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    body: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        // overflow: 'hidden',
        backgroundImage: `linear-gradient(to right, #57d4dc, #19daac), url('/images/background.png')`,
        backgroundBlendMode: 'overlay',
    },
    container: {
        padding: '20px',
        borderRadius: '8px',
        height: '85vh',
        width: '85vw',
    }
});

export default useStyles;
