import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledMasonryLayout = styled.div`
  display: flex;
  padding: ${props => props.padding || '0'};
`

const MasonryLayout = ({ children, columns, gap, padding }) => {
  const columnsWrapper = {}
  const result = []

  if (columns === 'auto') {
    columns = 4
  }

  // create number of columns from props
  for (let i = 0; i < columns; i++) {
    columnsWrapper[`column${i}`] = []
  }

  // divide children into columns
  for (let i = 0; i < children.length; i++) {
    const columnIndex = i % columns
    columnsWrapper[`column${columnIndex}`].push(
      <div style={{ marginBottom: `${gap}px` }}>{children[i]}</div>
    )
  }

  // wrap children of each column in a div
  for (let i = 0; i < columns; i++) {
    result.push(
      <div
        style={{
          marginLeft: `${i > 0 ? gap : 0}px`,
          flex: 1
        }}>
        {columnsWrapper[`column${i}`]}
      </div>
    )
  }
  return <StyledMasonryLayout padding={padding}>{result}</StyledMasonryLayout>
}

MasonryLayout.propTypes = {
  columns: PropTypes.number.isRequired,
  gap: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
  padding: PropTypes.string
}

MasonryLayout.defaultProps = {
  columns: 2,
  gap: 20
}

export default MasonryLayout
