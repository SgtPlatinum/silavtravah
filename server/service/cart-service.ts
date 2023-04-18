import { Body, Get, Post, Service, Session } from "@propero/easy-api";
import { In } from "typeorm";
import { db, Product, User } from "../database";

@Service("/cart")
export class CartService {

  readonly users = db.getRepository(User);
  readonly products = db.getRepository(Product);

  @Get()
  async getCart(@Session("user") user?: User) {
    if (!user) return { status: 200, data: [] };
    const userData = await this.users.findOneBy({ uuid: user.uuid });
    const products = await this.products.find({
      where: { id: In(Object.keys(userData.cart).map(it => parseInt(it, 10))) }
    });
    const lookup = products.reduce((map, product) => {
      map[product.id] = product;
      return map;
    }, {} as Record<number, Product>);
    return Object.entries(userData.cart).map(([id, amount]) => ({
      ...lookup[id],
      amount
    }));
  }

  @Post()
  async setCart(@Session("user") user: User, @Body() products: (Product & { amount: number })[]) {
    if (!user) return { status: 200, data: { success: true } };
    const amountMap = Object.fromEntries(products.map(it => [it.id, it.amount]));
    await this.users.update({
      uuid: user.uuid,
    }, {
      cart: amountMap,
    });
    return { status: 200, data: { success: true } };
  }

}
