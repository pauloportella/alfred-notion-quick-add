"use strict";

import alfredNotifier from "alfred-notifier";
import { addPageToDatabase } from "./lib/notion";

const DATABASE_ID = process.env.DATABASE_ID;

alfredNotifier();

const { id, pageURL } = await addPageToDatabase(DATABASE_ID, process.env.title);

// alfy.output([
//   {
//     title: "Copy to clipboard?",
//     arg: JSON.stringify({
//       alfredworkflow: {
//         arg: "copyToClipboard",
//         variables: { pageURL, pageDataId: id },
//       },
//     }),
//   },
// ]);

console.log(
  JSON.stringify({
    alfredworkflow: {
      variables: { pageURL, pageDataId: id },
    },
  })
);
