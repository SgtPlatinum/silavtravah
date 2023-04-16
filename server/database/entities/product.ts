import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity, ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";


@Entity("product")
export class Product {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column("varchar")
  title: string;

  @Column("varchar")
  description: string;

  @Column("varchar")
  image: string;

  @Column("decimal")
  price: number;

  @Column("varchar", { array: true })
  tags: string[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Product, product => product.relatedTo)
  relatedProducts: Product[];
  @ManyToOne(() => Product, product => product.relatedProducts, { nullable: true })
  relatedTo: Product;
}
