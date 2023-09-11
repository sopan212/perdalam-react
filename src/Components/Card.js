import React from 'react'
import './Card'
export default function Card(props) {
    const classes = 'card ' + props.className
    return (
        <div className={classes}>{props.children}</div>
    )
}
