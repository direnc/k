import { Barlow, Karla, Oswald } from 'next/font/google'

const oswald = Oswald({ weight: "400", subsets: ["latin-ext"] });
const karla = Karla({ weight: "400", subsets: ["latin-ext"] });
const karlaHeader = Karla({ weight: "700", subsets: ["latin-ext"] });
export const barlow = Barlow({ weight: "400", subsets: ["latin-ext"] });


export const fonts = {
    oswald, karla, karlaHeader, barlow
    }
