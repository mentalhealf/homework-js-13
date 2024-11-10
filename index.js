//Крок 1: Створення об'єкта Transaction

// Оголоси об'єкт Transaction, який зберігатиме типи транзакцій:
// - Властивість DEPOSIT для поповнення рахунку.
// - Властивість WITHDRAW для зняття коштів.

//   //Крок 2: Створення об'єкта account  

// - Створи об'єкт account, який міститиме всю інформацію про рахунок.

// - Додай властивість balance, яка зберігатиме поточний баланс рахунку,
// встанови значення 0.

// - Додай властивість transactions, яка зберігатиме історію транзакцій у вигляді масиву, встанови значення [].

// - Додай властивість transactionId, яка буде лічильником для кожної нової транзакції, початкове значення 0

//   Крок 3: Реалізація методу createTransaction

// - Додай метод createTransaction у об'єкт account.

// - Цей метод прийматиме два параметри: amount (сума) і type (тип транзакції).

// - У методі збільшуй значення transactionId на 1 і створюй об'єкт з полями:
// id – унікальний номер транзакції (значення transactionId),
// type – тип транзакції (DEPOSIT або WITHDRAW),
// amount – сума.
// Поверни цей об'єкт.

//   Крок 4: Реалізація методу deposit

// Додай метод deposit у об'єкт account.

// Метод приймає параметр amount.

// У методі збільшуй balance на значення amount.

// Викликай метод createTransaction, передаючи amount і тип транзакції Transaction.DEPOSIT.

// Додай створену транзакцію у масив transactions.
// Крок 5: Реалізація методу withdraw

// Додай метод withdraw, який приймає параметр amount.

// Перевір, чи amount не більше, ніж поточний balance:
// Якщо більше, виведи повідомлення "Недостатньо коштів для зняття".

// Якщо ні, відніми значення amount від balance.

// Викликай createTransaction, передаючи amount і тип транзакції Transaction.WITHDRAW.

// Додай створену транзакцію у масив transactions.

    //   Крок 6: Реалізація методу getBalance

   // Додай метод getBalance, який просто повертає значення balance.

//    Крок 7: Реалізація методу getTransactionDetails

// Додай метод getTransactionDetails, який приймає параметр id.

// Використовуй метод find для пошуку об'єкта транзакції у масиві transactions за id.

// Поверни знайдену транзакцію або undefined, якщо такої транзакції немає.

// Крок 8: Реалізація методу getTransactionTotal

// Додай метод getTransactionTotal, який приймає параметр type.

// За допомогою filter відфільтруй транзакції за потрібним типом.

// За допомогою reduce порахуй суму amount для всіх транзакцій потрібного типу.

// Поверни отримане значення.

// Крок 9: Перевірка роботи коду

// Тепер можна викликати методи, щоб переконатися, що об’єкт account працює правильно:

const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

const account = {
    balance: 0,
    transactions: [],
    transactionId: 0,
    createTransaction(amount, type) {
        return {
          id: ++this.transactionId,  
          type,
          amount,
        };  
      },  
      deposit(amount) {
        this.balance += amount;
        this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
      },
      withdraw(amount) {
        if (amount > this.balance) {
          console.log('Недостатньо коштів для зняття');
          return;
        }
        this.balance -= amount;
        this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
      },
      getBalance() {
        return this.balance;
      },
      getTransactionDetails(id) {
        return this.transactions.find(transaction => transaction.id === id);
      },
      getTransactionTotal(type) {
        return this.transactions
          .filter(transaction => transaction.type === type)
          .reduce((total, transaction) => total + transaction.amount, 0);
      },
     
  };  

  account.deposit(1000); // Поповнення на 1000

  account.withdraw(300); // Зняття 300
  console.log(account.getBalance()); // Перевірка балансу
  console.log(account.getTransactionDetails(1)); // Деталі транзакції з ID 1
  console.log(account.getTransactionTotal(Transaction.DEPOSIT)); // Загальна сума депозитів
  console.log(account.getTransactionTotal(Transaction.WITHDRAW)); // Загальна сума зняття