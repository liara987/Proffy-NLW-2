import React from  'react'
import whatsappIcom from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem (){
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/12224963?s=400&u=1f7b46e3696f45068f2b8128eb88eb40f5bbfb54&v=4" alt="Liara"/>
            <div>
                <strong>Liara</strong>
                <span>Algoritimo</span>
            </div>
        </header>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            <br/>
            Repellat delectus quidem dolores possimus modi debitis blanditiis deserunt nihil molestias, ipsum beatae fuga quia maxime sunt repellendus hic officiis aliquam rerum.</p>
        <footer>
            <p>
             Preço/hora
             <strong>R$ 70,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcom} alt="Whatssap"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem