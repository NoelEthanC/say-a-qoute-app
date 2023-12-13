import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import BackButton from "@/components/general/BackButton";
import AddQuoteForm from "@/components/general/AddQuoteForm";

const AddQuotePage = () => {
  return (
    <div className="flex items-center  justify-center bg-light-gray-900 dark:bg-dark-gray-900 h-screen ">
      <Card className="bg-light-gray-800 dark:bg-dark-gray-800 border border-light-gray-700 dark:border-dark-gray-700 lg:w-[600px]">
        <CardHeader className="text-2xl">
          <CardTitle className="text-4xl">Add A Quote</CardTitle>
          <CardDescription className="text-xl">
            Add a quote to our list of quotes with one click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AddQuoteForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default AddQuotePage;
