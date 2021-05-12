import { Resolver, Query, Mutation, Arg, Field, InputType, Int } from 'type-graphql'
import { User } from '../entity/User'

@InputType()
class UserInput {
  @Field()
  nom_usr!: string
  @Field()
  seg_nom_usr!: string
  @Field()
  ap_pat_usr!: string
  @Field()
  ap_mat_usr!: string
  @Field()
  correo_usr!: string
  @Field()
  telefono_usr!: string
  @Field()
  fecha_nac_usr!: Date
}

@InputType()
class UserUpdateInput {
  @Field(() => String, { nullable: true })
  nom_usr?: string
  @Field(() => String, { nullable: true })
  seg_nom_usr?: string
  @Field(() => String, { nullable: true })
  ap_pat_usr?: string
  @Field(() => String, { nullable: true })
  ap_mat_usr?: string
  @Field(() => String, { nullable: true })
  correo_usr?: string
  @Field(() => String, { nullable: true })
  telefono_usr?: string
  @Field(() => String, { nullable: true })
  fecha_nac_usr?: Date
}

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async createUser(
    @Arg('user_data', () => UserInput) user_data: UserInput,
  ) {
    const newUser = User.create(user_data)
    console.log(newUser)
    return await newUser.save().catch(e => console.error(e))
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg('id', () => Int) id: number) {
    await User.delete(id)
    return true
  }

  @Mutation(() => Boolean)
  async updateUser(
    @Arg('id', () => Int) id: number,
    @Arg('fields', () => UserUpdateInput) fields: UserUpdateInput
  ) {
    await User.update({ id_usr: id }, fields).catch((err) => {
      console.error(err)
      return false
    })
    return true
  }

  @Query(() => [User])
  usuarios () {
    return User.find()
  }
}