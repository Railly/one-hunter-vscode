import { styled, css } from 'styled-components'

export const StyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  color: #333;
  font-size: 24px;
  font-weight: 600;

  body {
    margin: 0;
  }

  .icon {
    font-size: 48px;
    margin-bottom: 16px;
  }

  ${(props) =>
    props.isPrimary &&
    css`
      color: #fff;
      background-color: #333;
    `}
`
