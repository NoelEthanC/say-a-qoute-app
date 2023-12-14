"use client";
import { likeAction } from "@/lib/actions";
import { DbQuote } from "@/lib/types";
import { Heart } from "lucide-react";
import React, { useOptimistic, useState } from "react";
import clsx from "clsx";
import { motion, useAnimation } from "framer-motion";

const ClickableLikeButton = (props: {
  quoteID: string;
  likes: any[];
  likeCookie: string | undefined;
}) => {
  const { quoteID, likes, likeCookie } = props;
  const controls = useAnimation();
  const [transition, setTransition] = useState(false);
  const [optimisticLikes, addOptimitisticLikes] = useOptimistic<any[]>(
    likes,
    (state: any[], newLike: string) => {
      if (likeCookie) {
        return state.filter((like) => like.id !== likeCookie);
      } else {
        return [...state, { cookie: newLike }];
      }
    }
  );
  const handleLikeButtonToggling = async (quoteID: string) => {
    setTransition(true);
    addOptimitisticLikes(quoteID);
    try {
      const d = await likeAction(quoteID);
      // Trigger animation when the like button is clicked
      controls.start({
        scale: [1, 1.2, 1],
        transition: { duration: 0.3 },
      });
    } catch (error) {
      console.log("error", error);
    }
    setTimeout(() => {
      setTransition(false);
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center flex-col space-y-1 ">
      <motion.button
        onClick={() => handleLikeButtonToggling(quoteID)}
        className="flex justify-center items-center flex-col rounded-full h-10 w-10
        hover:bg-light-gray-700 hover:dark:bg-dark-gray-700 "
        animate={controls}
      >
        <Heart
          className={clsx("  cursor-pointer bg-transparent ", {
            "text-saq-green": likeCookie,
            "animate-spinner-linear-spin ": transition,
          })}
          fill={likeCookie ? "#4caf50" : "1E1E1E"}
        />
      </motion.button>
      <motion.span
        key={likeCookie + quoteID}
        className=" "
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* {optimisticLikes?.length ? optimisticLikes?.length : 0} */}
        {likes?.length ? likes?.length : 0}
      </motion.span>
    </div>
  );
};

export default ClickableLikeButton;

// const ClickableLikeButton = (props: {
//   quoteID: string;
//   likes: any[];
//   likeCookie: string | undefined;
// }) => {
//   const { quoteID, likes, likeCookie } = props;

//   const [optimisticLikes, addOptimitisticLikes] = useOptimistic<any[]>(
//     likes,
//     // Check if the user has the cookie
//     (state: any[], newLike: string) => {
//       if (likeCookie) {
//         // If the cookie is available, remove the existing element (if any) and add the new one
//         return state.filter((like) => like.id !== likeCookie);
//       } else {
//         // If the cookie is not available, just add the new element
//         return [...state, { cookie: newLike }];
//       }
//     }
//     // (state: any[], newLike: string) => [...state, { cookie: newLike }]
//   );
//   const handleLikeButtonToggling = async (quoteID: string) => {
//     // try catch block
//     // do the optimistic increment or decrement
//     // send the id to the server action
//     addOptimitisticLikes(quoteID);
//     try {
//       await likeAction(quoteID);
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center flex-col space-y-1 ">
//       <button
//         onClick={() => handleLikeButtonToggling(quoteID)}
//         className="flex justify-center items-center flex-col rounded-full h-10 w-10
//      hover:bg-light-gray-700 hover:dark:bg-dark-gray-700 "
//       >
//         {/* <Heart className=" text-saq-green cursor-pointer " fill="#4caf50" /> */}
//         <Heart
//           className={clsx("  cursor-pointer bg-transparent ", {
//             "text-saq-green": likeCookie,
//           })}
//           fill={likeCookie ? "#4caf50" : "1E1E1E"}
//         />
//       </button>
//       <span className=" ">
//         {optimisticLikes?.length ? optimisticLikes?.length : 0}
//       </span>
//     </div>
//   );
// };

// export default ClickableLikeButton;
