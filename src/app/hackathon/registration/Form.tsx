"use client";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as yup from "yup";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
export type Inputs = {
  projectName: string;
  paymentReference: string;
  phoneNumber: string;
  paymentType: string;
};

const schema = yup
  .object({
    projectName: yup.string().required("Vous devez fournir le nom du projet (vous pouvez modifier plus tard)"),
    paymentReference: yup.string().required("Renseignez la ref de votre paiement"),
    phoneNumber: yup.string().required("Donnez nous votre numéro pour que nous puissions vous contacter facilement"),
    paymentType: yup.string().required("Vous avez payé sur quel opérateur"),
  })
  .required();

export type FormProps = {};


export const Form = (props: FormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    if (Object.keys(errors).length > 0) {
        console.error("Validation errors:", errors);

        toast.error("Il y a des erreurs de validation dans le formulaire. Veuillez les corriger avant de soumettre.");
        return;
      }
  }
  return (
    <Layout className="max-w-xl p-8 card mt-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* register your input into the hook by invoking the "register" function */}
        <Input type="text" label="Nom du projet" {...register("projectName")} placeholder="" />
        <Input
          type="text"
          label="Votre numéro de téléphone" placeholder=""
          {...register("phoneNumber")}
        />
        <Input
          type="text"
          label="Référence du paiement" placeholder=""
          {...register("paymentReference")}
        />
        <Select {...register("paymentType")}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selectionner le type de transfert" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Opérateurs</SelectLabel>
              <SelectItem value="ORANGE">ORANGE</SelectItem>
              <SelectItem value="TELMA">TELMA</SelectItem>
              <SelectItem value="AIRTEL">AIRTEL</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button type="submit">Envoyer</Button>
      </form>
    </Layout>
  );
};
