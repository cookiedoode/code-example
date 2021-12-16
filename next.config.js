const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()

const withNextEnv = nextEnv()
module.exports = withNextEnv()


// const {PHASE_PRODUCTION_BUILD, PHASE_DEVELOPMENT_SERVER} = require('next/constants') 
// module.exports = (phase, {defaultConfig}) => {
//     if(phase === PHASE_DEVELOPMENT_SERVER){
//         console.log('DEV MODE')
//         return defaultConfig
//     }
//     return defaultConfig
// }