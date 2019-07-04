module.exports = {
  addToArrayUsableMoney (quantityMoney, arrayUsableMoney, objectMoneyForChange, moneyUsed) {
    return (quantityMoney !== 0) ? arrayUsableMoney.push({ ...objectMoneyForChange, value: moneyUsed, quantity: quantityMoney }): '';
  },

  getChange (totalAmount, providedAmount) {

    if(parseFloat(providedAmount) < parseFloat(totalAmount) ){
      throw new Error(' O valor informado é menor do que o devido');
    };

    const change = parseFloat(providedAmount) - parseFloat(totalAmount);
    
    const arrayChange = change.toFixed(2).toString().split('.');

    const [notes, ...cents] = arrayChange;
    parseInt(notes);
    Math.round(parseInt(cents));

    const avaliableNotes = [ 100, 50, 20, 10, 5, 1];
    const avaliableCents = [50, 25, 10, 5, 1];

    let usableNotes = avaliableNotes.filter( item => item <= notes);
    let usableCents = avaliableCents.filter( item => item <= cents);

    let newChange = 0;

    usableNotes.forEach( ( item , index ) => {
      let noteForChange = {
        value: 0,
        quantity: 0
      };

      let quantityNotes = 0;

      if(index === 0){
        usableNotes = [];
        
        quantityNotes = Math.trunc(notes / item);
        newChange = notes - (item * quantityNotes);
      }else{
        quantityNotes = Math.trunc(newChange / item);
        newChange -= (item * quantityNotes);
      }

      this.addToArrayUsableMoney(quantityNotes, usableNotes, noteForChange, item);
    });

    usableCents.forEach( ( item , index ) => {
      let centsForChange = {
        value: 0,
        quantity: 0
      };

      let quantityCents = 0;

      if(index === 0){
        usableCents = [];
        
        quantityCents = Math.trunc(cents / item);
        newChange = cents - (item * quantityCents);
      }else{
        quantityCents = Math.trunc(newChange / item);
        newChange -= (item * quantityCents);
      }

      this.addToArrayUsableMoney(quantityCents, usableCents, centsForChange, item);
    });


    const result = [];

    result.push( `Seu troco é R$: ${parseFloat(change).toFixed(2)}`);

    usableNotes.forEach( item => {
      result.push(`Utilizar no troco: ${item.quantity} nota(s) de R$ ${item.value}`);
    });

    usableCents.forEach( item => {
      result.push(`Utilizar no troco: ${item.quantity} moeda(s) de ${item.value}`);
    });
    
    return result;
  },
};