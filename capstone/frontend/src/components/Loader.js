import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
    return (
        <Spinner 
        animation='border'
        size="sm"
        variant="primary" 
        role='state' 
        style={{
            width: '100px',
            height: '100px',
            margin: 'auto',
            display: 'block'
            }}
        >
            <span className='sr-only'>Loading...</span>
        </Spinner>
    )
}

export default Loader
