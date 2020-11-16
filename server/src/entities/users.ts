import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'users' })
export default class Users {
  @PrimaryColumn({ type: 'varchar', length: 10 })
  public id!: string;

  @Column({ type: 'varchar', length: 10 })
  public name: string = 'null';
}
