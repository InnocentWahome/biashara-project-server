import Factory from '@ioc:Adonis/Lucid/Factory'
import Order from 'App/Models/Order'
import { UserFactory } from './UserFactory'

export const OrderFactory = Factory.define(Order, ({ faker }) => {
  return {
    productId: faker.datatype.number(),
    userId: faker.datatype.number(),
    productName: faker.commerce.product(),
    userEmail: faker.internet.email(),
    cost: faker.datatype.number(),
    quantity: faker.datatype.number({
      'min': 0,
      'max': 100,
    }),
    paymentStatus: faker.datatype.boolean(),
    dispatchStatus: faker.datatype.boolean(), 
    deliveryStatus: faker.datatype.boolean()
  }
})
.relation('user', () => UserFactory)
.build()
