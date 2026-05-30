export function createNavbarMobile() {
    return `
        <footer class="mobile-footer" aria-label="Navegação principal mobile">
            <nav class="nav-mobile">
                <a href="#about" class="nav-link-mobile" aria-label="Sobre">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 17h2v-6h-2v6Zm1-8.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z"/>
                    </svg>
                </a>
                <a href="#skills" class="nav-link-mobile" aria-label="Habilidades">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 20V10h4v10H4Zm6 0V4h4v16h-4Zm6 0V8h4v12h-4Z"/>
                    </svg>
                </a>
                <a href="#projects" class="nav-link-mobile" aria-label="Projetos">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h4.1l2 2H18.5A2.5 2.5 0 0 1 21 8.5v7A2.5 2.5 0 0 1 18.5 18h-13A2.5 2.5 0 0 1 3 15.5v-9Z"/>
                    </svg>
                </a>
                <a href="#contact" class="nav-link-mobile" aria-label="Contato">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm8 8 8-5H4l8 5Zm0 2.3L4 10.4V17h16v-6.6l-8 4.9Z"/>
                    </svg>
                </a>
            </nav>
        </footer>
    `;
}
