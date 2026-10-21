'use client';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    // Le thème clair est la valeur par défaut ; une préférence sauvegardée reste prioritaire.
    const initial = saved === 'dark';
    setDark(initial);
    document.documentElement.dataset.theme = initial ? 'dark' : 'light';
  }, []);
  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }
  return <button className="theme-toggle" onClick={toggle} aria-label={dark ? 'Activer le thème clair' : 'Activer le thème sombre'} title={dark ? 'Thème clair' : 'Thème sombre'}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>;
}
