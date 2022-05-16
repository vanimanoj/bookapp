import React from 'react'
import { Link } from 'react-router-dom'

const Navbar1 = () => {
  return (
    <div> <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/">BOOK</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link active" to="/">Addbook</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/search">Searchbook</Link>
          </li>
         
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar1