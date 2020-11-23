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
    Optionally create
    ```
    .env
    ```
    file in
    ```back/```
    folder and add this text:
    ```
    PORT=8000
    ```

    1. In ``` back/ ``` folder run in terminal
    ```
    $ npm install
    $ node app.js
    ```
    2. In ``` front/ ``` just open index.html file.
    3. To run backend tests type in ``` back/ ``` folder in terminal
    ```
    npm run test
    ```
