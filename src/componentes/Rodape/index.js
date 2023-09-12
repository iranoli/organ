import './Rodape.css'

const Rodape = () => {

    return (
        <footer className='footer'>
           <section>
                <ul>
                    <li>
                        <a href='https://www.facebook.com/iram.oliveira.9' target='_blank'>
                            <img src='/imagens/fb.png' alt='facebook' />
                        </a>
                    </li>
                    <li>
                        <a href='' target='_blank'>
                            <img src='/imagens/tw.png' alt='twiter'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/_iranol/' target='_blank'>
                            <img src='/imagens/ig.png' alt='instagram' />
                        </a>
                    </li>
                </ul>
            </section> 
            <section>
                <img src='/imagens/logo.png' />
            </section>
            <section>
            <p>Desenvolvido por Iran de Oliveira - Alura</p>
            </section>


        </footer>
    )
}

export default Rodape