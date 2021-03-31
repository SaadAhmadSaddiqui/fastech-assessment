import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Field, Form } from 'react-final-form'
import createDecorator from 'final-form-focus'
import Input from 'components/common/Input'
import DatePicker from 'components/common/DatePicker'
import Button from 'styles/Button'
import Error from 'styles/Error'
import Radio from 'components/common/Radio'
import Country from 'components/common/Country'
import RegisterMobile from 'components/common/Mobile'
import axios from 'axios'
import { validator, userSchema } from 'validators'

const RightSide = () => {
  const [country, setCountry] = useState({
    name: 'United Arab Emirates',
    code: 'ae'
  })

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios('https://ipapi.co/json/')
        setCountry({
          name: response.data.country_name,
          code: response.data.country_code.toLowerCase()
        })
      } catch (e) {
        console.log(e)
      }
    }
    fetchCountry()
  }, [])

  const onSubmit = async values => {
    try {
      const user = JSON.stringify(values)
      localStorage.setItem('user', user)
      alert(
        'User info saved in localStorage. Please check through browser tools.'
      )
    } catch (error) {
      return error
    }
  }

  return (
    <Container>
      <Logo>digg</Logo>
      <Title>Apply now to work in Dubai </Title>
      <Form
        onSubmit={onSubmit}
        decorators={[createDecorator()]}
        validate={values => validator(values, userSchema)}
        mutators={{
          setNationality: (args, state, utils) => {
            utils.changeValue(state, 'nationality', () => args[0])
          },
          setResidence: (args, state, utils) => {
            utils.changeValue(state, 'residence', () => args[0])
          }
        }}
      >
        {({ handleSubmit, form }) => (
          <StyledForm onSubmit={handleSubmit}>
            <Input
              label="First Name"
              type="text"
              name="firstName"
              autoComplete="on"
              required
            />
            <Input
              label="Last Name"
              type="text"
              name="lastName"
              autoComplete="on"
              required
            />
            <DatePicker
              label="Date of Birth"
              type="text"
              name="dob"
              autoComplete="on"
              required
            />
            <CheckWrapper radio>
              <Desc>Gender</Desc>
              <RadioWrapper>
                <Field
                  type="radio"
                  name="gender"
                  value="male"
                  id="male"
                  component={Radio}
                />
                <Label htmlFor="male">Male</Label>
                <Field
                  type="radio"
                  name="gender"
                  value="female"
                  id="female"
                  component={Radio}
                />
                <Label htmlFor="female">Female</Label>
              </RadioWrapper>
              <Error name="gender" />
            </CheckWrapper>
            <Country
              form={form}
              name="nationality"
              label="Nationality"
              mutatorName="setNationality"
              moveLabel
            />
            <Country
              form={form}
              name="residence"
              label="Country of Residence"
              mutatorName="setResidence"
            />
            <ContactText>How we can contact you?</ContactText>
            <RegisterMobile country={country} />
            <Input
              label="Email Address"
              type="email"
              name="email"
              autoComplete="on"
              required
              moveLabel
            />
            <Empty />
            <StyledButton type="submit">Apply Now</StyledButton>
          </StyledForm>
        )}
      </Form>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  flex: 1 1 50%;
  display: flex;
  flex-flow: column;
  align-items: stretch;
  padding: 20px;

  @media only screen and (max-width: 1024px) and (orientation: portrait) {
    height: 100%;
    flex: 1 1 100%;
  }
`

const Logo = styled.h1`
  display: none;
  margin: 0 0 60px;
  font-size: 50px;
  font-family: IBMPlexSans;
  font-weight: 700;
  color: #000;
  @media only screen and (max-width: 1024px) and (orientation: portrait) {
    display: block;
  }
`

const Title = styled.h1`
  font-weight: 600;
  font-size: calc((100vw * 2) / 100);
  text-align: center;
  margin-bottom: calc((100vw * 2) / 100);
  @media only screen and (max-width: 1024px) and (orientation: portrait) {
    font-size: 30px;
    margin-bottom: 40px;
  }

  @media only screen and (max-width: 538px) {
    font-size: 22px;
    margin-bottom: 30px;
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 1024px) and (orientation: portrait) {
    gap: 10px;
  }
  /* background-color: pink; */
`

const StyledButton = styled(Button)`
  flex: 1 1 20%;
  max-width: 20%;
  display: flex;
  background-image: linear-gradient(to right, #9733ee 51%, #da22ff 100%);
  border-radius: calc((100vw * 2) / 100);
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  padding: 0;
  height: calc((100vw * 3.2) / 100);
  font-size: calc((100vw * 1) / 100);

  @media only screen and (max-width: 1024px) and (orientation: portrait) {
    border-radius: 40px;
    height: 43px;
    font-size: 13px;
    flex: 1 1 100%;
    max-width: 50%;
    margin: 10px 0 0;
  }

  @media only screen and (max-width: 720px) {
  }

  @media only screen and (max-width: 538px) {
  }
`

const CheckWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: calc((100vw * 0.5) / 100);
  margin-bottom: calc((100vw * -1) / 100);
  flex-basis: 49%;
  max-width: 49%;

  @media only screen and (max-width: 1024px) and (orientation: portrait) {
    flex: 1 1 100%;
  }
  /* background-color: pink; */
`
const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Label = styled.label`
  flex: 1 1 100%;
  font-size: calc((100vw * 0.9) / 100);
  font-weight: 300;

  @media only screen and (max-width: 1024px) and (orientation: portrait) {
    flex: 1 1 100%;
    font-size: 13px;
  }
`

const Desc = styled.label`
  flex: 1 1 100%;
  font-weight: 300;
  font-size: calc((100vw * 0.9) / 100);
  color: #141212;

  @media only screen and (max-width: 1024px) and (orientation: portrait) {
    flex: 1 1 100%;
    font-size: 16px;
  }
`

const ContactText = styled.h2`
  flex: 1 1 100%;
  margin: calc((100vw * 0.8) / 100) 0;
  font-size: calc((100vw * 1.5) / 100);

  @media only screen and (max-width: 1024px) and (orientation: portrait) {
    margin: 10px 0;
    font-size: 20px;
    flex: 1 1 100%;
  }
`

const Empty = styled.div`
  flex: 1 1 49%;
  max-width: 49%;
  @media only screen and (max-width: 538px) {
    display: none;
  }
`

export default RightSide
