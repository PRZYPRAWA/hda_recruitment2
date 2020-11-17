## Requirements

  Client needs simple user management page with 2 main sections:
  - search - type name (ignore case sensitivity) to get assigned value
  - add new - type name and age, validate and add to database* 
  
  ![idea](idea.gif)

## Tech stack
  FE:
  - vanilla js (es5-es11) (modern browsers only)
  - no css preprocessor
  - no html templates

  BE:
  - node.js
  - express.js
    > If you don't have experience here, don't worry. Just open official documentation, read `Getting Started` and some examples and  15 minutes later you will be able to create proper BE .

  DB:
    - none, just create variable as a fake DB.  
  ```javascript
  // Mocked db
  const db = {
    people: [
      { name: 'John', age: 27 }, 
      { name: 'Jack', age: 19 }, 
      { name: 'Mack', age: 51 }, 
      { name: 'Sasin', age: 70 },
      { name: 'Richard', age: 34 }, 
      { name: 'Andrew', age: 42 },
    ]
  }
```

## Task 

  - Create FE

  - Create BE

  - Create README.md with description, instructions to run etc

  - Log all actions in console

  - Consider case where user types fast and send many request, not really useful from any perspective
  
  

## INFO

  - Task can be done via juniors or regulars and do not worry if you can't finish all. If so, please describe how would you do something or how you imagine something can be done. 

  - Stick to the requiements

  - Please ignore styling, no extra points for this. It should be just similarly ugly.

  -If anything is not clear, make own assumptions, which seems to be good from UX perspective. Mention that in `readme` in that case
