'use client'
import React, { useState } from 'react';
import { FaStar, FaHeart, FaCheck } from 'react-icons/fa';

// Mock de dados para os produtos
// const productsData = [
//   {
//     id: 1,
//     title: 'Produto 1',
//     description: 'Descrição do Produto 1. Esta é a descrição principal do produto.',
//     details: 'Detalhes adicionais do Produto 1. Mais informações podem ser fornecidas aqui.',
//     benefits: [
//       { icon: <FaStar />, text: 'Benefício 1' },
//       { icon: <FaHeart />, text: 'Benefício 2' },
//       { icon: <FaCheck />, text: 'Benefício 3' }
//     ]
//   },
//   {
//     id: 2,
//     title: 'Produto 2',
//     description: 'Descrição do Produto 2. Esta é a descrição principal do produto.',
//     details: 'Detalhes adicionais do Produto 2. Mais informações podem ser fornecidas aqui.',
//     benefits: [
//       { icon: <FaStar />, text: 'Benefício 1' },
//       { icon: <FaHeart />, text: 'Benefício 2' }
//     ]
//   },
//   // Adicione mais produtos conforme necessário
// ];

const Skills = () => {
  // const [isFlipped, setIsFlipped] = useState(false);
  // const [activeProduct, setActiveProduct] = useState(null);

  // // Função para lidar com o mouse entrar no card
  // const handleMouseEnter = (productId) => {
  //   setIsFlipped(true);
  //   setActiveProduct(productId);
  // };

  // // Função para lidar com o mouse sair do card
  // const handleMouseLeave = () => {
  //   setIsFlipped(false);
  //   setActiveProduct(null);
  // };

  return (
    <div className='flex min-h-screen flex-col justify-center bg-slate-100 '>
      <div className='group h-96 w-96 [perspective:1000px]'>
        <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden]'>
          <div>
            <h1>Jane</h1>
            <p>programapher</p>
            <button>ntrar</button>
          </div>
          <div className='absolute inset-0'>
            <img className='h-full w-full rounded-xl object-cover shadow-black/40 '></img>
            <div className='absolute.inset-0 h-full rounded-xl bg-black px-12 text-center text-slate-200'></div>
          </div>
        </div>
      </div>
      </div>
  );
}
export default Skills;
   