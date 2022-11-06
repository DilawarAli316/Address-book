import React, { useState } from 'react'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from 'mdb-react-ui-kit'
import DatePicker from 'react-datepicker'
import '../App.css'

export default function Image() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dob, setDob] = useState(new Date())
  const [phoneNumber, setPhoneNumber] = useState('')

  const saveData = () => {
    console.log(firstName, lastName, dob, phoneNumber, 'data')
  }

  return (
    <MDBContainer className='py-5' style={{ maxWidth: '1100px' }}>
      <MDBRow className='justify-content-center align-items-center'>
        <MDBCol>
          <MDBCard className='my-4 shadow-3'>
            <MDBRow className='g-0'>
              <MDBCol md='6' className='d-xl-block bg-image'>
                <MDBCardImage
                  src='https://www.leuchtturm1917.us/media/productdetail/700x700/800097/address-books_1.jpg'
                  alt='Sample photo'
                  fluid
                />
                <div
                  className='mask'
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                ></div>
              </MDBCol>
              <MDBCol md='6'>
                <MDBCardBody className='p-md-5 text-black'>
                  <MDBTypography tag='h3' className='mb-4 text-uppercase'>
                    Address Book
                  </MDBTypography>

                  <MDBRow>
                    <MDBCol md='6' className='mb-4'>
                      <MDBInput
                        label='First name'
                        type='text'
                        size='lg'
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                      />
                    </MDBCol>
                    <MDBCol md='6' className='mb-4'>
                      <MDBInput
                        label='Last name'
                        type='text'
                        size='lg'
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md='6' className='mb-4'>
                      <DatePicker
                        selected={dob}
                        onChange={(date) => setDob(date)}
                        placeholderText={'dd/mm/yyyy'}
                        filterDate={(date) =>
                          date.getDay() !== 6 && date.getDay() !== 0
                        } // weekends cancel
                        showYearDropdown // year show and scrolldown alos
                        scrollableYearDropdown
                      />
                    </MDBCol>
                    <MDBCol md='6' className='mb-4'>
                      <MDBInput
                        label='Phone Number'
                        type='tel'
                        size='lg'
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                      />
                    </MDBCol>
                  </MDBRow>

                  <div className='d-flex justify-content-end pt-3'>
                    <MDBBtn
                      size='lg'
                      className='ms-2'
                      style={{ backgroundColor: 'hsl(210, 100%, 50%)' }}
                      onClick={saveData}
                    >
                      Save
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}
