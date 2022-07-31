import Factory from '@ioc:Adonis/Lucid/Factory'
import Feedback from 'App/Models/Feedback'
import { UserFactory } from './UserFactory'
import { ProductFactory } from './ProductFactory'

export const FeedbackFactory = Factory.define(Feedback, ({ faker }) => {
  return {
    productId: faker.datatype.number(),
    date: faker.date.recent(),
    userId: faker.datatype.number(),
    productName: faker.commerce.product(),
    userEmail: faker.internet.email(),
    description: faker.commerce.productDescription(),
    rate: faker.datatype.number({
      min: 1,
      max: 5,
    }),
  }
})
  .relation('user', () => UserFactory)
  .relation('product', () => ProductFactory)
  .build()
