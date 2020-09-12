import React, { useState } from 'react';
import styled from 'styled-components'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function deObfuscateString(text: any, factor: number = 50) {
  var e = ""
  for (let r in text) {
    e += String.fromCharCode(factor ^ text.charCodeAt(r));
  }
  return e
}

const App: React.FC = () => {
  const [payload, setPayload] = useState('')
  const [factor, setFactor] = useState('50')
  const [decodedPayload, setDecodedPayload] = useState('')

  return (
    <Container>
      <Title>PX Payload Decoder</Title>
      <FactorContainer>
        <FactorInputLabel>
          Factor:
        </FactorInputLabel>
        <FactorInput
          type="text"
          placeholder="Factor"
          onChange={(e) => {
            setFactor(e.target.value)
            let deobfText
            try {
              deobfText = deObfuscateString(atob(payload), parseInt(e.target.value))
              setDecodedPayload(JSON.stringify(JSON.parse(deobfText), undefined, 4))
            } catch (error) {
              setDecodedPayload(deobfText || "")
            }
          }}
          value={factor}
        />
      </FactorContainer>
      <PayloadContainers>
        <PayloadInput
          placeholder="PX Payload"
          value={payload}
          onChange={(e) => {
            setPayload(e.target.value)
            let deobfText
            try {
              deobfText = deObfuscateString(atob(e.target.value), parseInt(factor))
              setDecodedPayload(JSON.stringify(JSON.parse(deobfText), undefined, 4))
            } catch (error) {
              setDecodedPayload(deobfText || "")
            }
          }}
        />
        <PayloadOutput language="json" style={atomDark}>{decodedPayload}</PayloadOutput>
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

const PayloadOutput = styled(SyntaxHighlighter)`
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  height: 60vh;
  width: 40vw;
  overflow: hidden;
  overflow-wrap: anywhere;
  color: white;
  margin: 0px !important;
`

const PayloadInput = styled.textarea`
  font-family: 'Roboto', sans-serif;
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
  height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default App;
