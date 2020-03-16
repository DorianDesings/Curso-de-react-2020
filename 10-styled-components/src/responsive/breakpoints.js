const sizes = {
    mobile: '360px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1400px'
}

const device = {
    mobile: (styles) => {
        return `@media screen and (min-width:${sizes.mobile}){
            ${styles}
        }`
    },

    tablet: (styles) => {
        return `@media screen and (min-width:${sizes.tablet}){
            ${styles}
        }`
    },

    laptop: (styles) => {
        return `@media screen and (min-width:${sizes.laptop}){
            ${styles}
        }`
    },

    desktop: (styles) => {
        return `@media screen and (min-width:${sizes.desktop}){
            ${styles}
        }`
    },
}

export default device