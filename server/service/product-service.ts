import {Get, intParser, Param, Service} from "@propero/easy-api";
import {db, Product} from "../database";

@Service("/products")
export class ProductService {

  readonly repo = db.getRepository(Product);

  @Get()
  async getProducts() {
    return {
      status: 200,
      data: await this.repo.find({ withDeleted: false }),
    }
  }

  @Get("/:id")
  async getProduct(@Param("id", intParser()) id: number) {
    const product = await this.repo.findOne({ where: { id } });
    return {
      status: product ? 200 : 404,
      data: product,
    };
  }

}