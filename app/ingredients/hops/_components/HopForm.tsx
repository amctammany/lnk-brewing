import { Hop } from "@prisma/client";

export interface HopFormProps {
  hop?: Hop;
}
export const HopForm = ({ hop }: HopFormProps) => {
  console.log(hop);
  return <form>HopForm!</form>;
};
