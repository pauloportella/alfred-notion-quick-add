# alfred-notion-quick-add

> Easily capture data into a Notion database.

![Walkthrough](/walkthrough.gif)

## Install

via NPM

```
$ npm install --global @jacobsingh/alfred-notion-quick-add
```

## Config

1. Create an integration at https://www.notion.so/my-integrations.  Note the "Internal Integration Token" this is your NOTION_TOKEN.

2. Choose a Task database you want to add to. *IMPORTANT* ensure that the Title field is called "Name".  @TODO: Make this configurable

3. Click Share, and share the database with your newly created integration.

4. Click "copy link".  Take the long string of numbers and letters after http://notion.so/ and before the question mark.
i.e. https://notion.so/abcdefg?whatever (abcdefg is your DATABASE_ID)

5. Click on the configure button for this workflow (first one on the left in the top right of the screen.  Add in your NOTION_TOKEN and your DATABASE_ID.

## Usage

> Please update the keywords for something that works for you.

In Alfred, type `:` or use the keystroke to open the workflow, add your text and press <kbd>Enter</kbd> to save it to your Notion database.

After saving, you can append content (text) to the newly created page, open the page in the browser or copy the link to the clipboard.

## Related

- [alfy](https://github.com/sindresorhus/alfy) - Create Alfred workflows with ease
