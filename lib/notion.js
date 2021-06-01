"use strict";

import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getPagesFromDatabase = async (databaseId) => {
  try {
    return await notion.databases.query({
      database_id: databaseId,
    });
  } catch (e) {
    console.error(e);
  }
};

export const addPageToDatabase = async (databaseId, text) => {
  try {
    const response = await notion.request({
      path: "pages",
      method: "POST",
      body: {
        parent: { database_id: databaseId },
        properties: {
          Task: {
            title: [
              {
                text: {
                  content: text,
                },
              },
            ],
          },
        },
      },
    });

    const pageID = response.id.replace(/-/g, "");

    response.pageURL = `https://notion.so/${databaseId}?p=${pageID}`;

    return response;
  } catch (e) {
    console.error(e);
  }
};

export const appendContentToPage = async (pageId, text) => {
  try {
    return await notion.blocks.children.append({
      block_id: pageId,
      children: [
        {
          object: "block",
          type: "paragraph",
          paragraph: {
            text: [
              {
                type: "text",
                text: {
                  content: text,
                },
              },
            ],
          },
        },
      ],
    });
  } catch (e) {
    console.error(e);
  }
};
