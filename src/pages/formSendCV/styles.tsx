import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        campaigns: {
            margin: '20px',
            [theme.breakpoints.down('sm')]: {
                margin: '10px',
            },
        },
        mainCard: {
            [theme.breakpoints.down('sm')]: {
                padding: theme.spacing(2),
            },
        },
        cardcontent: {
            display: 'flex',
            [theme.breakpoints.down('sm')]: {
                padding: '0px',
            },
        },
        textarea: {
            fontSize: '14px',
        },
        radio: {
            fontSize: '14px',
        },
        colorCard1: {
            backgroundColor: '#BBDEFB',
            padding: theme.spacing(1),
            [theme.breakpoints.down('sm')]: {
                margin: '0px',
            },
        },
        ml30: {
            marginLeft: theme.spacing(3),
        },
        gridPhone: {
            marginTop: '0px',
            [theme.breakpoints.down('sm')]: {
                marginTop: '10px',
            },
        },
        gridButton: {
            marginTop: theme.spacing(3),
        },
        sendNow: {
            display: 'none',
        },
    }),
);
export { useStyles };
