// define Customer interface
interface Customer {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  accountNumber: string;
  phone: string;
  paymentInfo: string;
  userName: string;
  userPassword: string;
  accountType: string;
}

// define Item interface
interface Item {
  id?: string;
  name?: string;
  quantity?: number;
  price?: number;
  category?: string;
  location?: string;
}

// define Order interface
interface Order {
  orderNumber: string;
  invoiceNumber: string;
  customerFullName: string;
  orderDate: string;
  orderShipDate: string;
  orderReceivedDate: string;
  shipTo: string;
  item: string;
}

// create the order objects in the orderHistory
const orderHistory: Order[] = [
  {
    orderNumber: '114-3941689-8772232',
    invoiceNumber: 'A10001',
    customerFullName: 'JS Masher',
    orderDate: '08/04/2020',
    orderShipDate: '08/05/2020',
    orderReceivedDate: '08/08/2020',
    shipTo: '123 Main St',
    item: 'book',
  },
];
