import React from "react";
// import "./Sidebar.css";
import DarkModeToggle from './DarkModeToggle';
import { FaEnvelope, FaLinkedin, FaGithub, FaDribbble, FaBehance, FaInstagram } from 'react-icons/fa';

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "portfolio", label: "Portfolio" },
  { id: "clients", label: "Clients" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact Me" },
];

const socialLinks = [
  { href: "mailto:syarifamhar@gmail.com", icon: <FaEnvelope />, label: "Email" },
  { href: "https://linkedin.com/in/muhamad-syarif", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "https://github.com/syarifamhar", icon: <FaGithub />, label: "GitHub" },
  { href: "https://dribbble.com/syarif_amhar", icon: <FaDribbble />, label: "Dribbble" },
  { href: "https://www.behance.net/syarifamhar", icon: <FaBehance />, label: "Behance" },
  { href: "https://instagram.com/devpathbysyarif", icon: <FaInstagram />, label: "Instagram" },
];

function Sidebar({ scrollTo, onClose }) {
  return (
    <aside className="flex flex-col items-center w-72 h-screen bg-neutral-50 border-r border-neutral-200 text-neutral-900 py-10 px-4 shadow-xl fixed md:static z-40 select-none md:overflow-hidden">
      {/* Avatar and Name */}
      <div className="flex flex-col items-center mb-8">
        <img
          src={require("../assets/myphoto.png")}
          alt="Muhamad Syarif"
          className="w-24 h-24 rounded-full border-4 border-neutral-200 shadow-lg mb-4"
        />
        <h1 className="text-2xl font-bold tracking-wide font-serif">Muhamad Syarif</h1>
        <p className="text-neutral-500 text-sm mt-1 text-center max-w-[180px]">Product & Frontend Specialist. I help teams build beautiful, usable, and impactful digital products.</p>
      </div>
      {/* Navigation */}
      <nav className="flex-1 w-full mb-8">
        <ul className="space-y-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => {
                  scrollTo(link.id);
                  if (onClose) onClose();
                }}
                className="w-full text-left px-6 py-2 rounded-lg hover:bg-neutral-200 transition-colors font-mono text-base"
              >
                {link.label}
              </button>
            </li>
          ))}
      </ul>
      </nav>
      {/* Social Links */}
      <div className="flex space-x-3 mb-6">
        {socialLinks.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-neutral-500 hover:text-neutral-900 transition-colors"
            aria-label={s.label}
          >
            {s.icon}
          </a>
        ))}
    </div>
      <DarkModeToggle />
    </aside>
  );
}

export default Sidebar;
