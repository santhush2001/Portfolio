import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Code } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Experience", path: "/experience" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="fixed w-full z-50 bg-[var(--bg-body)]/80 backdrop-blur-md border-b border-[var(--border-card)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <NavLink to="/" className="flex items-center gap-2 text-xl font-bold text-[var(--primary-accent)]">
                        <Code className="size-8" />
                        <span className="text-[var(--text-primary)]">Santhusha.dev</span>
                    </NavLink>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                                            ? "text-[var(--primary-accent)] bg-[var(--bg-card-hover)]"
                                            : "text-[var(--text-secondary)] hover:text-[var(--primary-accent)] hover:bg-[var(--bg-card-hover)]/50"
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-slate-400 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[var(--bg-body)] border-b border-[var(--border-card)]">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md text-base font-medium ${isActive
                                        ? "text-[var(--primary-accent)] bg-[var(--bg-card-hover)]"
                                        : "text-[var(--text-secondary)] hover:text-[var(--primary-accent)] hover:bg-[var(--bg-card-hover)]/50"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
