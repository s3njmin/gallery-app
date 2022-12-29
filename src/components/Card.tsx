import React from 'react';

function Card(props: any) {
    if (typeof props.size === "string") {
        console.log("pass")
        return (
            <div style={{
                ...styles.card,
                ...styles['standard']
            }}>
            </div>
        )
    } else {
        console.log("failed")
        return (
            <div></div>
        )
    }
}

const styles = {
    card: {
        margin: '5px',
        padding: 0,
        backgroundColor: 'lightgrey'
    },
    standard: {
        gridRowEnd: 'span 26'
    },
    wide: {
        gridRowEnd: 'span 33'
    },
    tall: {
        gridRowEnd: 'span 45'
    }
}

export default Card;