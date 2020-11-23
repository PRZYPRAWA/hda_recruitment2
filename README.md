## Requirements

  Client needs simple user management page with 2 main sections:
  - search - type name (ignore case sensitivity) to get assigned value
  - add new - type name and age, validate and add to database*

## Tech stack
  FE:
  - vanilla js (es5-es11) (modern browsers only)
  - no css preprocessor
  - no html templates

  BE:
  - node.js
  - express.js

## Running app

To run the app:
1. In ``` back/ ```
    folder run in terminal
    ```bash
    $ npm install

    $ node app.js
    ```
    Optionally, create ``` .env ``` file in ``` back/ ``` folder and add
    ```
    PORT=8000
    ```
    in it.
2. In
    ```bash
    front/
    ```
    folder just open index.html file.

3. To run backend tests type in ``` back/ ``` folder in terminal
    ```bash
    npm run test
    ```
