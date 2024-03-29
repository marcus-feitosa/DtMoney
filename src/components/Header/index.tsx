import { useState } from 'react'
import Modal from 'react-modal'
import logoIMG from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps{
    onOpenNewTransactionModal:()=>void;
}
export function Header({onOpenNewTransactionModal}: HeaderProps){
    
 return (
     <Container>
         <Content>
         <img src={logoIMG} alt="dt money" />
         <button type="button" onClick={onOpenNewTransactionModal}>
             Nova transação
         </button>
         
         </Content>
     </Container>
 )
}