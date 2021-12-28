import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionContext, TransactionsProvider } from "./useTransactions";
import DatePicker from 'react-datepicker';


Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }
  return (
    <TransactionsProvider>
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
     <Dashboard />
     <NewTransactionModal
     isOpen={isNewTransactionModalOpen} 
     onRequestClose={handleCloseNewTransactionModal}
     />
     <GlobalStyle />
    </TransactionsProvider>
    
    
  );
}