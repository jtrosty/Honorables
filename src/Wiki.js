import React from 'react'

const containerStyle = {
  width: '800px',
  height: '500px',
  position: 'absolute',
  left: '65%',
  top: '80%',
  transform: 'translate(-50%, -50%)',
}

function WikiComponent() {
  return (
    <div style={containerStyle}>
      <header>
        <h4>Search Wikipedia:</h4>
        <form>
          <label>
            <input type='text' name='wikiSearch' />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </header>
    </div>
  )
}

export default React.memo(WikiComponent)
