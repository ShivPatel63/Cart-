import React from 'react';

const Navbar = (props) => {
    // console.log('count prop' , props.count)
        return(
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon}  src="https://image.flaticon.com/icons/png/128/1170/1170627.png" alt="" />
                    <span style={styles.cartCount}> {props.count} </span>
                </div>
            </div>
        );
}

const styles = {
    cartIcon : {
        height:42,
        // marginRight:20
    },
    nav: {
        height:70,
        background:'#4267b2',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    cartIconContainer:{
        postition:'relative'
    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding: '4px 8px',
        postition:'absolute',
        right:0,
        top:-9 
    }
};

export default Navbar;