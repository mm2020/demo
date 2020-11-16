import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'account' })
export default class Account {
  @PrimaryColumn({ type: 'varchar', length: 10 })
  public id!: string;

  @Column({ type: 'varchar', length: 10 })
  public password!: string;
}
