import { useState } from 'react';
import Input from '../Form/Input';
import emailjs from "@emailjs/browser"

export default function Index() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [mensagem, setMensagem] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    if (nome === "" || email === "" || celular === "" || mensagem === "") {
      alert("Preencha todos os campos!");
      return;
    }

    const templateParams = {
      from_nome: nome,
      email: email,
      celular: celular,
      mensagem: mensagem,
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams, "YOUR_USER_ID")
      .then((response) => {
        console.log("Email Enviado", response.status, response.text);
        alert("Email Enviado");
        window.location.reload();
        setNome("");
        setEmail("");
        setCelular("");
        setMensagem("");
      })
      .catch((error) => {
        console.log("Erro", error);
      });
  }

  return (
    <div id='text_contato' className='sm:flex mt-24 sm:mx-32'>
      <div className='text-center mb-12 text-texto_final'>
        <h1 className='text-titulos text-4xl text-center mb-4'>Contato</h1>
        <p className='mb-9 mx-6  text-base'>Entre em contato com nosso consultor de vendas e descubra como podemos lhe ajudar a desenvolver sua solução de software</p>
        <p className='mb-3 text-lg'>55 991748807</p>
        <p className='text-lg'>contato@zorgen.tech</p>
      </div>

      <div className='flex flex-col mb-28'>
        <form className='block mx-6' onSubmit={sendEmail}>
          <Input
            type='text'
            required
            placeholder='Digite seu nome'
            onChange={(e) => setNome(e.target.value)}
            value={nome}
          />

          <Input
            type="email"
            required
            placeholder='Digite seu e-mail'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <Input
            type="number"
            required
            placeholder='Celular'
            onChange={(e) => setCelular(e.target.value)}
            value={celular}
          />

          <textarea
            className='bg-cinza_input pl-4 text-caixa_text w-full pt-2'
            cols="42"
            rows="5"
            placeholder='Mensagem'
            onChange={(e) => setMensagem(e.target.value)}
            defaultValue={mensagem}
          ></textarea>

          <div style={{ textAlign: 'right' }}>
            <button
              className='text-xl font-semibold underline mt-4 lg:ml-auto lg:pr-8'
              type='submit'
              value="Enviar"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
