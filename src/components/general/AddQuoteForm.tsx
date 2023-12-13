"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BackButton from "./BackButton";
import InputError from "../ui/input-error";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useFormStatus } from "react-dom";
import { addQuote } from "@/lib/actions";
import { Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { revalidatePath } from "next/cache";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      className="bg-saq-green w-full text-green-50 text-xl hover:bg-saq-green/70 "
    >
      {!pending ? (
        <>Add Quote</>
      ) : (
        <p className="flex space-x-3 ">
          <Spinner size="sm" color="white" />
          <>Submitting Quote...</>
        </p>
      )}
    </Button>
  );
};

const AddQuoteForm = () => {
  const [formState, setFormState] = useState<any>({
    author: "",
    category: "",
    quote: "",
  });

  const router = useRouter();
  const { toast } = useToast();

  const handleSubmitAction = async (formData: FormData) => {
    try {
      const data = await addQuote(null, formData);
      if ("errors" in data) {
        const newErrors = data?.errors;
        setFormState(newErrors);
        return;
      }
    } catch (error) {
      setFormState(error);
      console.log("error submitting data", error);
      return;
    }
    toast({
      variant: "default",
      title: "New Quote Added Successfully",
      description: "Thanks For using this site.",
    });

    router.back();
  };

  return (
    <>
      <form action={handleSubmitAction}>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="author">Author</Label>
            <Input name="author" placeholder="author of your quote" />
            {formState?.author && <InputError> {formState.author}</InputError>}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="framework">Category</Label>
            <Select name="category">
              <SelectTrigger>
                <SelectValue placeholder="Select" className="text-2xl" />
              </SelectTrigger>
              <SelectContent position="popper" className="text-xl">
                <SelectItem value="life">Life</SelectItem>
                <SelectItem value="wisdom">Wisdom</SelectItem>
                <SelectItem value="love">Love</SelectItem>
                <SelectItem value="motivation">Motivation</SelectItem>
                <SelectItem value="other">other</SelectItem>
              </SelectContent>
            </Select>
            {formState.category && (
              <InputError>{formState.category}</InputError>
            )}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="quote">Quote</Label>
            <Textarea name="quote" placeholder="Type your quote here...." />
            {formState.quote && <InputError>{formState.quote} </InputError>}
          </div>
        </div>

        {formState.error && <InputError> {formState.dbError} </InputError>}
        <div className="flex w-full mt-6">
          <SubmitButton />
        </div>
      </form>

      <div className=" mt-4 ">
        <BackButton />
      </div>
    </>
  );
};

export default AddQuoteForm;
