import React from 'react';

const Paginacion = ({pagina, setPagina, maximo}) => {

    const nextPage = () =>{
        setPagina(pagina + 1)
        limitPage()
    }
    const previousPage = () =>{
        setPagina(pagina - 1)
        limitPage()
    }  
    
    const limitPage = () =>{
        if(pagina <= 0 || pagina === Math.ceil(maximo)){
            setPagina(1)
        }
    }
    return (
        <div className='paginacion'>
            <button disabled={pagina === 1} onClick={previousPage} >Previous</button>
            <p> {pagina} / {Math.ceil(maximo)} </p>
            <button  onClick={nextPage}>Next</button>
        </div>
    );
};

export default Paginacion;