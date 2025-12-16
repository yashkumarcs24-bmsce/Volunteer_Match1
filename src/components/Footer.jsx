import React from 'react'


export default function Footer() {
return (
<footer className="bg-gray-800 text-white py-6 mt-8">
<div className="container mx-auto px-4 text-center">
© {new Date().getFullYear()} Volunteer Match — Built with ❤️
</div>
</footer>
)
}