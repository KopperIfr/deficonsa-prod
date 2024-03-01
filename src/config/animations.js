export const animateBTM_TOP = {
    initial: {
        y: 100,
        opacity: 0
    },
    animate: (count) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: .3,
            delay: .2 * count
        }
    })
}


export const animateOpacity = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    }
}