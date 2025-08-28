"use client"; // needed for navigation
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" href="/">My App</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto gap-3">
          <li className="nav-item">
            <Link className="nav-link" href="/">Home</Link>
          </li>
          <li className="nav-item">
             <Link className="nav-link" href="/screen/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/screen/service">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/contact">Contact</Link>
          </li>
               <li className="nav-item">
             <Link className="nav-link" href="/screen/user">User</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
