import React, { useState } from 'react';
import styled from 'styled-components'
import { obfuscateString } from '../services/px';

const Encoder: React.FC = () => {
  const [obfPayload, setPayload] = useState('')
  const [factor, setFactor] = useState('50')
  const [encodedPayload, setEncodedPayload] = useState('')

  return (
    <Container>
      <Title>PX Payload Encoder</Title>
      <FactorContainer>
        <FactorInputLabel>
          Factor:
        </FactorInputLabel>
        <FactorInput
          type="text"
          placeholder="Factor"
          onChange={(e) => {
            setFactor(e.target.value)
            try {
              let payload = obfuscateString(JSON.stringify(JSON.parse(obfPayload)), parseInt(e.target.value))
              setEncodedPayload(btoa(payload))
            } catch (error) {
              setEncodedPayload("Invalid JSON")
            }
          }}
          value={factor}
        />
      </FactorContainer>
      <PayloadContainers>
        <PayloadInput
          placeholder={JSON.stringify(JSON.parse(`[{"t":"PX2","d":{"PX63":"iPhone","PX96":"https://www.goat.com","PX191":0,"PX371":false,"PX850":0,"PX851":1569,"PX1038":"c9aab7ac-f4a0-11ea-a44f-acde48001122","PX1008":3600,"PX1055":1599878200357,"PX1056":1599878200515}}]`), undefined, 4)}
          value={obfPayload}
          onChange={(e) => {
            setPayload(e.target.value)
            try {
              let payload = obfuscateString(JSON.stringify(JSON.parse(e.target.value)), parseInt(factor))
              setEncodedPayload(btoa(payload))
            } catch (error) {
              setEncodedPayload("Invalid JSON")
            }
          }}
        />
        <PayloadOutput>{encodedPayload}</PayloadOutput>
      </PayloadContainers>
    </Container>
  );
}

const FactorContainer = styled.div`
  display: flex;
  align-items: baseline;
`

const FactorInputLabel = styled.div`
  color: white;
  font-family: 'Roboto', sans-serif;
`

const Title = styled.h1`
  color: white;
  font-family: 'Roboto', sans-serif;
`

const FactorInput = styled.input`
  padding: 5px;
  margin-left: 5px;
  background-color: rgb(29, 31, 33);
  border: none;
  color: white;
  margin-bottom: 20px;
`

const PayloadContainers = styled.div`
  display: flex;
`

const PayloadOutput = styled.div`
  font-size: 12px;
  height: 60vh;
  width: 40vw;
  overflow: hidden;
  overflow-wrap: anywhere;
  color: white;
  margin: 0px !important;
  padding: 16px;
  background-color: rgb(29, 31, 33);
`

const PayloadInput = styled.textarea`
  font-size: 12px;
  padding: 16px;
  background-color: rgb(29, 31, 33);
  border: none;
  outline: none;
  resize: none;
  color: white;
  margin-right: 30px;
  height: 60vh;
  width: 40vw;
`

const Container = styled.div`
  background-color: rgb(16 17 21);
  height: calc(100vh - 50px);
  flex-direction: column;
  display: flex;
  align-items: center;
`

export default Encoder;
