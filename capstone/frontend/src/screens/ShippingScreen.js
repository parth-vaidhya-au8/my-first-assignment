import React, { useState } from 'react'
import { Button, Form  } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingScreen = ({ history }) => {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart


    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [state, setState] = useState(shippingAddress.state)
    const [pinCode, setPinCode] = useState(shippingAddress.pinCode)
    const [country, setCountry] = useState(shippingAddress.country)
    const [contact, setContact] = useState(shippingAddress.contact)

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, state, pinCode, country, contact }))
        history.push('/payment')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>
            <Form.Group controlId='address'>
                <Form.Label>Address</Form.Label>
                <Form.Control
                 type='text'  
                 placeholder='Enter address' 
                 value={address}
                 required 
                 onChange={(e) => setAddress(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Form.Group controlId='city'>
                <Form.Label>City</Form.Label>
                <Form.Control
                 type='text'  
                 placeholder='Enter city' 
                 value={city}
                 required 
                 onChange={(e) => setCity(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Form.Group controlId='state'> 
                <Form.Label>State</Form.Label>
                <Form.Control
                 type='text'  
                 placeholder='Enter state' 
                 value={state}
                 required 
                 onChange={(e) => setState(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Form.Group controlId='pinCode'>
                <Form.Label>PinCode</Form.Label>
                <Form.Control
                 type='text'  
                 placeholder='Enter pinCode' 
                 value={pinCode}
                 required 
                 onChange={(e) => setPinCode(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Form.Group controlId='country'>
                <Form.Label>Country</Form.Label>
                <Form.Control
                 type='text'  
                 placeholder='Enter country' 
                 value={country}
                 required 
                 onChange={(e) => setCountry(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Form.Group controlId='contact'>
                <Form.Label>Contact</Form.Label>
                <Form.Control
                 type='telephone'  
                 placeholder='Enter contact' 
                 value={contact}
                 required 
                 onChange={(e) => setContact(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
                Proceed
            </Button>
            </Form>
        </FormContainer>
    )
}

export default ShippingScreen
