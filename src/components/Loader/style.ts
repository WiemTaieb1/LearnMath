import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    LoadingContainerStyle: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    textStyle: {
        position: 'absolute',
        top: '45%',
        transform: ' translate(-50%, -50%)',
        left: '50%',
        margin: 0,
        padding: 0,
        fontWeight: 700,
        fontSize: 25,
        display: 'flex',
        textShadow: '0px 0px 3px #b2b9cb',
        color: '#3da9fc'
    },
    LoadingComponentStyle: {
        position: 'absolute',
        top: '50%',
        transform: ' translate(-50%, -50%)',
        left: '50%',
        margin: 0,
        padding: 0,
        display: 'flex',
        '&>li': {
            listStyle: 'none',
            width: 20,
            borderRadius: '50%',
            height: 20,
            background: 'white',
            animation: '$grow 1.6s ease-in-out infinite',
        },
        '&>li:nth-child(1)': {
            animationDelay: '-1.4s',
            background: '#ffff00',
            boxShadow: '0 0 50px #ffff00'
        },
        '&>li:nth-child(2)': {
            animationDelay: '-1.2s',
            background: '#76ff03',
            boxShadow: '0 0 50px #76ff03'
        },
        '&>li:nth-child(3)': {
            animationDelay: '-1.0s',
            background: '#f06292',
            boxShadow: '0 0 50px #f06292'
        },
        '&>li:nth-child(4)': {
            animationDelay: '-0.8s',
            background: '#4fc3f7',
            boxShadow: '0 0 50px #4fc3f7'
        },
        '&>li:nth-child(5)': {
            animationDelay: '-0.6s',
            background: '#ba68c8',
            boxShadow: '0 0 50px #ba68c8'
        },
        '&>li:nth-child(6)': {
            animationDelay: '-0.4s',
            background: '#f57c00',
            boxShadow: '0 0 50px #f57c00'
        },
        '&>li:nth-child(7)': {
            animationDelay: '-0.2s',
            background: '#673ab7',
            boxShadow: '0 0 50px #673ab7'
        }
    },
    "@keyframes grow": {
        '0%, 40%, 100%': {
            transform: 'scale(0.2)'
        },
        '20%': {
            transform: 'scale(1)',
        }
    },

})