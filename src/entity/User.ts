import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity, getRepository } from 'typeorm'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
@Entity('users_test_danielrojas')
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id_usr!: number
  @Field(() => String)
  @Column()
  nom_usr!: string
  @Field(() => String)
  @Column()
  seg_nom_usr!: string
  @Field(() => String)
  @Column()
  ap_pat_usr!: string
  @Field(() => String)
  @Column()
  ap_mat_usr!: string
  @Field(() => String)
  @Column('timestamp')
  fecha_nac_usr!: Date
  @Field(() => String)
  @CreateDateColumn({ type: 'timestamp' })
  created_usr!: string
  @Field(() => String)
  @Column()
  correo_usr!: string
  @Field(() => String)
  @Column()
  telefono_usr!: string
}