import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type AddressWhereInput = {
  ofek?: StringNullableFilter;
  address_1?: StringNullableFilter;
  address_2?: StringNullableFilter;
  city?: StringNullableFilter;
  state?: StringNullableFilter;
  zip?: IntNullableFilter;
  customers?: CustomerListRelationFilter;
  id?: IntFilter;
};
