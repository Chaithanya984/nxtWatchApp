import styled from 'styled-components'

export const Background = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.outline ? 'black' : 'white')};
`

export const SubBox = styled.form`
  min-height: 50vh;
  background-color: red;
  min-width: 400px;
  width: 35%;
  max-width: 700px;
  padding: 28px;
`
export const ImgBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const DarkLightImg = styled.img`
  height: 50px;
`
export const Labeled = styled.label`
  font-family: 'Roboto';

  margin-top: 10px;
`

export const InputCont = styled.div`
  width: 100%;
  margin-top: 35px;
  margin-bottom: 17px;
`
export const InputBox = styled.input`
  width: 100%;
  height: 38px;
  margin-top: 2px;
  padding-left: 13px;
`
export const InputConts = styled(InputCont)`
  margin-top: 0px;
`
export const PasswordShowCont = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ButtonLog = styled.button`
  width: 100%;
  background-color: #3b82f6;
  height: 38px;
  border-width: 0px;
  font-family: 'Roboto';
  color: white;
`
export const InputChecks = styled.input`
  height: 20px;
  width: 20px;
  margin-right: 12px;
`
export const Labels = styled(Labeled)`
  margin-top: 0px;
`
