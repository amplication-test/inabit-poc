import { SortOrder } from "../../util/SortOrder";

export type AddressOrderByInput = {
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  address_1?: SortOrder;
  address_2?: SortOrder;
  city?: SortOrder;
  state?: SortOrder;
  zip?: SortOrder;
  id?: SortOrder;
};
