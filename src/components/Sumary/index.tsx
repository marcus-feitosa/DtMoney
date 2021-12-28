import React,{useContext} from "react";
import { Container } from "./styles";
import incomeIMG from '../../assets/entradas.svg'
import outcomeIMG from '../../assets/saidas.svg'
import totalIMG from '../../assets/total.svg'
import { TransactionContext } from "../../useTransactions";
export function Sumary(){
    const {transactions}= useContext(TransactionContext);

   const sumary = transactions.reduce((acc, transaction) =>{
    if (transaction.type==='deposit'){
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
    }else{
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
    }
        return acc;
   }, {
       deposits:0,
       withdraws:0,
       total:0,
   })

    return (
        
        <Container>
            
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeIMG} alt="Entradas" />
                </header>
                <strong>R${sumary.deposits}</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeIMG} alt="Entradas" />
                </header>
                <strong>R${sumary.withdraws}</strong>
            </div>

            <div>
                <header>
                    <p>Total</p>
                    <img src={totalIMG} alt="Entradas" />
                </header>
                <strong>R${sumary.total}</strong>
            </div>
        </Container>
    )
    
}