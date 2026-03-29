export const BankTransactionMeta = {
  defaultFilterField: 'date',
  defaultSort: {
    sortOrder: 'DESC',
    sortField: 'date',
  },
  importable: false,
  exportable: true,
  print: {
    pageTitle: 'Bank Transactions',
  },
  fields: {
    date: {
      name: 'Date',
      column: 'date',
      fieldType: 'date',
    },
    transactionNumber: {
      name: 'Transaction Number',
      column: 'transaction_number',
      fieldType: 'text',
    },
    description: {
      name: 'Description',
      column: 'description',
      fieldType: 'text',
    },
    amount: {
      name: 'Amount',
      column: 'amount',
      fieldType: 'number',
    },
    transactionType: {
      name: 'Type',
      column: 'transaction_type',
      fieldType: 'text',
    },
  },
  columns: {
    date: {
      name: 'Date',
      type: 'text',
    },
    transactionNumber: {
      name: 'Transaction #',
      type: 'text',
    },
    description: {
      name: 'Description',
      type: 'text',
    },
    amount: {
      name: 'Amount',
      type: 'text',
    },
    transactionType: {
      name: 'Type',
      type: 'text',
    },
    status: {
      name: 'Status',
      type: 'text',
    },
  },
};
