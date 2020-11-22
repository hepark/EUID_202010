import { css } from 'styled-components/macro'

/* -------------------------------------------------------------------------- */

export const resetA = css`
  user-select: none;
  text-decoration: none;
  color: inherit;
`
export const resetButton = css`
  user-select: none;
  cursor: pointer;
  background: transparent;
  border: 0;
  padding: 0;
`

export const resetImg = css`
  vertical-align: middle;
`

export const responsive = css`
  max-width: 100%;
  height: auto;
`

export const resetDl = css`
  margin: 0;
  dt,
  dd {
    margin: inherit;
  }
`

export const resetList = css`
  list-style: none;
  margin: 0;
  padding-left: 0;
`

export const resetAddress = css`
  font-style: normal;
`
