/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ProductWhereUniqueInput } from "./ProductWhereUniqueInput";

@ArgsType()
class ProductFindUniqueArgs {
  @Field(() => ProductWhereUniqueInput, { nullable: false })
  where!: ProductWhereUniqueInput;
}

export { ProductFindUniqueArgs };
