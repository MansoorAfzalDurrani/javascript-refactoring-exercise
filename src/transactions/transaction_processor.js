//var txr = []; // No Need to define  Globally...

function processTransactions(transActions) {
  
    if(!transActions) {
        throw new Error("Undefined collection of transactions")
    } 

    const transactionCount = countTransactions(transActions) ; 

    const sortedTransactions = sortTransactions(transactionCount);

    return formatedTransactions(sortedTransactions,transactionCount);
}

function countTransactions(transActions){
   
    const transactionObject={};

    transActions.forEach((value)=>{
        transactionObject[value]=(transactionObject[value] || 0) +1;
      
    });
    return transactionObject
}

function sortTransactions(transactionObject) {
    return Object.keys(transactionObject).sort((a, b) =>transactionObject[b] - transactionObject[a] || a.localeCompare(b)
    );
} 
function formatedTransactions(sortedTransactions, transactionCount) {
    return sortedTransactions.map((transaction) => `${transaction} ${transactionCount[transaction]}`);
}







    /*
    const numberOfTransactions = transActions.length;

    for(var i = 0; i < numberOfTransactions; i++) {
        const transaction = transActions[i];
        txCount[transaction] ? txCount[transaction] += 1 : txCount[transaction] = 1;
    } */ // Function Wrote for these statements
    
 /*
    orderedTransactions= sortByAmountThenName(transactionCount);
   // console.log(orderedTransactions);
    // Place them back in array for returning
    Object.keys(transactionCount).forEach(function (key, index) {
        transactionCount[index] = `${key} ${transactionCount[key]}`;
    });

    return orderedTransactions;
}
/*

function sortByAmountThenName(transactionCount) {
    let sortedKeys = Object.keys(transactionCount).sort(function sortingFunction(itemOne, itemTwo) {
        return  transactionCount[itemTwo] - transactionCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo)}
    );

    let sortedResults = {};
    for(let objectKey of sortedKeys) {
        sortedResults[objectKey] = transactionCount[objectKey];
    }

    return sortedResults;
}

/*
function validateTransactions(transactions) {
    
    if(transactions === undefined) {
        return false;
    } 
}*/

module.exports = processTransactions;