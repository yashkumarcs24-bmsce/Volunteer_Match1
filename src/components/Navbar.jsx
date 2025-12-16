import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
return (
<header className="bg-white shadow">
<div className="container mx-auto px-4 py-4 flex items-center justify-between">
<Link to="/" className="text-xl font-bold text-blue-600">Volunteer Match</Link>
<nav className="space-x-4">
<Link to="/" className="hover:text-blue-600">Home</Link>
<Link to="/opportunities" className="hover:text-blue-600">Opportunities</Link>
<Link to="/register" className="hover:text-blue-600">Register</Link>
<Link to="/login" className="hover:text-blue-600">Login</Link>
</nav>
</div>
</header>
)
}