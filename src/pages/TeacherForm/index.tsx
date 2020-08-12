import React, { FormEvent } from 'react'
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';
import {useHistory} from 'react-router-dom';

import warningIcon from '../../assets/images/icons/warning.svg';
import './styles.css';

function TeacherForm() {

  const [name, setName] = React.useState('');
  const [avatar, setAvatar] = React.useState('');
  const [wpp, setWpp] = React.useState('');
  const [bio, setBio] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [cost, setCost] = React.useState('');

  const [scheduleItems, setScheduleItems] = React.useState([
    { 'week_day': 0, from: '', to: '' }
  ])

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems, { week_day: 0, from: '', to: '' }
    ])
  }

  function setScheduleItemValue(position: Number, field: string, value: string ){
    const newArray = scheduleItems.map( (item, index) => {
      if(index === position){
        return{...item, [field]: value}
      }
      return item;
    })

    setScheduleItems(newArray);
  }

  function handleCreateClass(e: FormEvent){
    e.preventDefault();
    console.log(e);
    useHistory().push('/');
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher este formulário de inscrição"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input name="name" label="Nome completo" value={name} onChange={(e) => setName(e.target.value)} />
            <Input name="avatar" label="Avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
            <Input name="wpp" label="Whatsapp" value={wpp} onChange={(e) => setWpp(e.target.value)} />
            <Textarea name="bio" label="Biografia" value={bio} onChange={(e) => setBio(e.target.value)} />

          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Computação', label: 'Computação' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Física', label: 'Física' },
                { value: 'Química', label: 'Química' }
              ]}
            />

            <Input name="cost" label="Custo da sua hora por aula" value={cost} onChange={(e) => setCost(e.target.value)} />
          </fieldset>

          <fieldset>
            <legend>
              Horários Disponíveis
            <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
            </button>
            </legend>

            {scheduleItems.map( (item, index) => {
              return (
                <div key={item.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da semana"
                    onChange={(e) => setScheduleItemValue(index, 'week_day', e.target.value)}
                    options={[
                      { value: '0', label: 'Domingo-feira' },
                      { value: '1', label: 'Segunda-feira' },
                      { value: '2', label: 'Terça-feira' },
                      { value: '3', label: 'Quarta-feira' },
                      { value: '4', label: 'Quinta-feira' },
                      { value: '5', label: 'Sexta-feira' },
                      { value: '6', label: 'Sábado-feira' }
                    ]}
                  />
                  <Input name="from" label="Das" type="time" />
                  <Input name="to" label="Até" type="time" />

                </div>
              );
            })}

          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso Importante" />
            Importate! <br />
            Preencha todos os dados
          </p>
            <button type="submit">Salvar Cadastro</button>
          </footer>
        </form>
      </main>
    </div >
  )
}

export default TeacherForm;