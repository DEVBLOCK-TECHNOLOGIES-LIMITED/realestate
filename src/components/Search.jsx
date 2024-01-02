import React from 'react'
import { BiSearch } from 'react-icons/bi'

function Search() {
  return (
    <div className="banner">
    <h1>Agents. Tours. Short-Stay. Homes.</h1>
    <div className="search">
        <input type="text" placeholder="Search with home features & locations" />
        <BiSearch size={30} />
    </div>
</div>
  )
}

export default Search