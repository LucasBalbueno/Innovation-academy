import { Recents } from './style'

export function RecentsCard () {
    return (
        <Recents>
            <div>
            <div className='imageContent'>
                <p>IMAGEM THUMBNAIL</p>
            </div>
            <div className='infosContent'>
                <div>
                <p>Disciplina</p>
                <p>Data</p>
                </div>
                <div>
                <p>Nome</p>
                <p>80%</p>
                </div>
            </div>
            </div>  
        </Recents>
    )
}