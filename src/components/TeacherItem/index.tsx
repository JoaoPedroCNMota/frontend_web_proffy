import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">

            <header>
                <img src="" alt="João Pedro Mota" />
                <div>
                    <strong>João Pedro</strong>
                    <span>Computação</span>
                </div>
            </header>

            <p>asdasdkasçdaskdlasdasdnlas</p>

            <footer>
                <p>
                    Preço/hora
            <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={wppIcon} alt="Entrat em contato" />
            Entrat em contato
          </button>
            </footer>
        </article>
    );
}

export default TeacherItem;