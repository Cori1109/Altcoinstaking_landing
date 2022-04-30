import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
const useStyles = makeStyles((theme) => ({
  scroll: {
    opacity: 0.5,
    background: "linear-gradient(95.31deg, #006EC3 0%, #0016B2 100%)",
    width: 40,
    height: 40,
    position: "fixed",
    zIndex: 50,
    bottom: 60,
    right: 20,
    borderRadius: 5,
    border: "none",
    "&:hover": {
      opacity: 1,
    },
  },
  arrowUp: {
    color: "white",
    position: "absolute",
  },
}));
const ScrollButton = (props) => {
    const classes = useStyles();
    const [isVisible, setIsVisible] = useState(false);
    
    // Show button when page is scorlled upto given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };
    
    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);
    
    if(isVisible){
        return (
            <Button title='Back to top' className={classes.scroll}
                onClick={scrollToTop}>
                <ArrowUpwardIcon className={classes.arrowUp}/>
            </Button>
        )
    }
    return(
        <></>
    )
}
export default ScrollButton;