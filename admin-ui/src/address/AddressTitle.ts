import { Address as TAddress } from "../api/address/Address";

export const ADDRESS_TITLE_FIELD = "ofek";

export const AddressTitle = (record: TAddress): string => {
  return record.ofek || String(record.id);
};
