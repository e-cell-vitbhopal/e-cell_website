// Shared navigation utilities
export const scrollToSection = (sectionId, callback) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerOffset = document.querySelector('.navbar')?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

        if (callback) callback();
    }
};

export const navigationLinks = [
    {
        to: "/",
        label: "Home",
        action: (callback) => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (callback) callback();
        }
    },
    {
        to: "#main-events",
        label: "Events",
        action: (callback) => scrollToSection('main-events', callback)
    },
    {
        to: "#team-main",
        label: "Teams",
        action: (callback) => scrollToSection('team-main', callback)
    },
    {
        to: "#sponsors-main",
        label: "Sponsors",
        action: (callback) => scrollToSection('sponsors-main', callback)
    },
    {
        to: "#speakers-main",
        label: "Speakers",
        action: (callback) => scrollToSection('speakers-main', callback)
    }
];
