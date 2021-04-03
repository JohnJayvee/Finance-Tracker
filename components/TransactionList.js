import React, { useState, useContext } from 'react';
import Transaction from './Transaction';
import { GlobalContext } from '../contexts/GlobalState';


export default function TransactionList(){
    const { transactions } = useContext(GlobalContext);
    

    return(
        <>
        <h3>History</h3>
		      <ul className="list">
		        {
                    transactions.filter(transaction => {
                        transaction.id !== 1;
                    }).map(transaction => {
                        return <Transaction key={transaction.id} 
                               transaction={transaction} />
                    })
                        
		        ))}
      		</ul>
        </>
    );
}

