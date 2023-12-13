"use server";

import {
  Timestamp,
  addDoc,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  where,
  startAt,
  startAfter,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { DbQuote } from "./types";
import ShortUniqueId from "short-unique-id";
import { headers, cookies } from "next/headers";

const FormSchema = z.object({
  id: z.string(),
  author: z
    .string({})
    .min(1, { message: " Please provide the name of the author in full " }),
  category: z.enum(["motivation", "other", "love", "life", "wisdom"], {
    invalid_type_error: "Please select a category for the quote",
  }),
  quote: z.string().trim().min(2, { message: "Please provide the quote" }),
});

export type Quote = {
  author: string[] | null;
  category: string[] | null;
  quote: string[] | null;
};

// create and add new quote
const AddQuote = FormSchema.omit({ id: true });
export async function addQuote(prevState: Quote | null, formData: FormData) {
  // Get and validate form Data
  console.log("quote invoked");
  const validatedFields = AddQuote.safeParse({
    author: formData.get("author"),
    category: formData.get("category"),
    quote: formData.get("quote"),
  });

  // return if there is an error
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { author, category, quote } = validatedFields.data;
  // create and store the quote in db collection called quotes return errors too
  try {
    const collectionRef = collection(db, "quotes");
    const newDoc = await addDoc(collectionRef, {
      author: author,
      category: category,
      quote: quote,
      created_at: Timestamp.now(),
    });
    // const data = { id: newDoc.id };
  } catch (error) {
    console.log("failed to create to Add a new error", error);
    return { dbError: error };
  }
  revalidatePath("/");
  redirect("/");
}
// setTotalPages by fetching all data count and divide by 10

// fetch 10 documents from the db
export async function fetchPaginatedQuotes() {
  // define quotes collection ref
  const quotesCollectionRef = collection(db, "quotes");
  const getPaginatedQuotesQuery = query(
    quotesCollectionRef,
    orderBy("created_at", "desc"),
    limit(10)
  );
  try {
    // get 10 documents using,  orderby, endafter, startfrom, limit
    const quotesSnapshot = await getDocs(getPaginatedQuotesQuery);
    const parsedQuotes = quotesSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return parsedQuotes;
  } catch (error) {
    console.log("database error fetching quotes", error);
  }
}

const { randomUUID } = new ShortUniqueId();
// handle Like action
export async function likeAction(quoteID: string) {
  const cookiesList = cookies();

  const cookieName = `uid-${quoteID}`;

  const quoteRef = doc(db, "quotes", quoteID);

  const quoteLikesRef = collection(quoteRef, "quote_likes");

  if (!cookiesList.has(cookieName)) {
    const like_id = `${randomUUID(6)}-${quoteID}`;

    console.log("user dont have that cookie, adding that cookie now...");

    // const oneYear = 365 * 24 * 60 * 60 * 1000; // milliseconds in a year
    const oneMonth = 30 * 24 * 60 * 60 * 1000; // milliseconds in a year
    cookies().set(cookieName, like_id);

    await setDoc(
      doc(quoteLikesRef, like_id),
      {
        cookie: cookieName,
      },
      { merge: true }
    );
  } else {
    console.log("user  have that cookie, deleting it now...");
    const like_id = cookiesList.get(cookieName)?.value;
    await deleteDoc(doc(quoteLikesRef, like_id));
    cookies().delete(cookieName);
  }
  revalidatePath("/");
}

export async function fetchQuoteLikes(quoteID: string) {
  const quoteRef = doc(db, "quotes", quoteID);

  const quoteLikesRef = collection(quoteRef, "quote_likes");

  const likes = await getDocs(quoteLikesRef);

  const likesData = likes.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return likesData;
}
