
import '$css/index.css'

console.log('welcome to entry~')

import('./util').then(({add})=>{
    console.log(add(2,3))
})

