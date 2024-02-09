

export const animationPROJECTS = {
    initial: {
        y: 100,
        opacity: 0,
    },
    animate: (index) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: .3,
            delay: index * .2
        }
    })
}



export const animationLEADING_B = {
    initial: {
        y: -100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .5,
            delay: .3
        }
    }
}

export const animationLEADING_H2 = {
    initial: {
        x: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: .5,
        }
    }
}


export const animationBG_IMG = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        
    }
}

export const animationRTL = {
    initial:{
        x: 50,
        opacity: 0
    },
    animate: (delay) => ({
        x: 0,
        opacity: 1,
        transition: {
            duration: .4,
            delay: .3 * delay
        }
    })
}

export const animationLTR = {
    initial:{
        x: -50,
        opacity: 0
    },
    animate: (delay) => ({
        x: 0,
        opacity: 1,
        transition: {
            duration: .4,
            delay: .3 * delay
        }
    })
}