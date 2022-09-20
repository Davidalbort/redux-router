import React from 'react'

const Filter = () => {
  const handleToFilter = (e) => {
    console.log(e.target.value)
  }
  return (
    <form >
      <select id='typeFilter' onChange={handleToFilter}>
        <option value='Letter'>Letter</option>
        <option value='minortoMayor'>minortoMayor</option>
        <option value='MayortoMinor'>MayortoMinor</option>
      </select>
    </form>
  )
}

export { Filter }
