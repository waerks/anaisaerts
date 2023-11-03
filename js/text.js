gsap.timeline()
    .fromTo(
        '.large-text',
        {
            opacity: 0,
            transform: 'translateY(20px)',
        },
        {
            opacity: 1,
            transform: 'translateY(0)',
            duration: 1,
            stagger: 0.5,
            ease: 'power3.out',
        }
    )
    .fromTo(
        '.small-text',
        {
            opacity: 0,
            transform: 'translateY(20px)',
        },
        {
            opacity: 1,
            transform: 'translateY(0)',
            duration: 1,
            ease: 'power3.out',
        },
        '-=0.5'
    );
