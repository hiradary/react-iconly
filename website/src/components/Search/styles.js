import styled from 'styled-components'

export const StyledForm = styled.form`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;
  width: 636px;
  height: 68px;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
    height: 54px;
  }
`

export const StyledIconContainer = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  background: transparent;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 14%;
  height: 100%;
  overflow: hidden;
}
`

export const StyledInput = styled.input`
  border: 0;
  width: 100%;
  height: 100%;
  padding: 10px 0px;
  padding-left: 70px;
  padding-right: 220px;
  background: white;
  font-size: ${(props) => props.theme.fontSize.lg};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.shadows.medium};
  transition: all 0.4s ease;
  ::placeholder {
    color: ${(props) => props.theme.colors.accent3};
    opacity: 0.6;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding-left: 50px;
    padding-right: 140px;
    font-size: ${(props) => props.theme.fontSize.md};
  }
`

export const StyledSelectContainer = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  background: transparent;
  justify-content: center;
  position: absolute;
  top: 0px;
  right: 0px;
  width: 200px;
  height: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100px;
  }
`

export const StyledAlgoliaImg = styled.img`
  position: absolute;
  top: 40%;
  right: 1.5rem;
  width: 120px;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    top: 38%;
  }
`
