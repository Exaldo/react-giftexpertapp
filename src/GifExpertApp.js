import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([ 'One Punch']);

    // const handleAdd = () => {

    //     // setCategories([...categories, 'HunterXHunter']); //soluciòn usada por el prof. Fernando H.
    //     // setCategories(['HunterXHunter', ...categories ]); //solución 2
    //     // setCategories(cats => [...cats, 'HunterXHunter' ]); //solución 3


    //     setCategories(categories.concat('HunterXHunter'));
    //     //utilice el método .concat debido a que crea un nuevo arreglo y lo
    //     //regresa, en cambio .push trata de mutar el arreglo original y crashea la app.
    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>  


            <ol>
                {
                    categories.map ( category => (
                        <GifGrid 
                            key= { category }
                            category = { category } />
                    ))
                }
            </ol>

        </>
    )
}



export default GifExpertApp
