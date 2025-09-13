# Sprint 1: TypeScript CSV

### Task C: Proposing Enhancement

- #### Step 1: Brainstorm on your own.

- #### Step 2: Use an LLM to help expand your perspective.

- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 

    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.) 

    Functionality (From me): As a user of the parser, I can extract cleanly formatted data from parsing CSV files with double quotes, internal commas, or whitespace.

    Functionality (From LLM): As a user of the parser, I can detect and handle rows with missing or extra fields so that I’m warned about malformed data instead of silently getting broken output.

    Extensibility (from me): As a user, I can pass a Zod schema into the parser to easily validate data types.

    Extensibility (from both): As a user, I can pass an options object (e.g. { hasHeaders: true }) to the parser so that new configuration features can be added without changing the function signature in the future.

    I initially focused on handling edge-cases in my user stories. The LLM expanded on additional edge cases that I missed, but also gave me more ideas like additional support for extremely large files, extra features like configuring the output format, etc. I resonated with many of the extra features the LLM suggested, but the more advanced suggestions like streaming)felt slightly too complex for this sprint, so I decided to postpone those.


### Design Choices

### 1340 Supplement

- #### 1. Correctness
Rows are split accurately into the correct number of fields
The same number of columns should be produced for every row
Edge cases should be handled correctly
Whan an error arises (like malformed CSV data), a clear error should be produced for the user (for example with the row number)

- #### 2. Random, On-Demand Generation
We could make very large datasets to test on if we had random on-demand generation to uncover edge cases that might not appear in our hand-written test files. This would increase test coverage and increase my confidence as a developer of the CSV parser that it will work
effectively in a wide-range of real-world datasets.

- #### 3. Overall experience, Bugs encountered and resolved
This sprint was far more open-ended than other programming assignments I've done in the past, which I felt was slightly challenging at times. 
#### Errors/Bugs: I didn't encounter major bugs, but I did have some syntax errors which I resolved by googling / Stack Overflow. I think I managed to avoid bugs by keeping my code short, clear, and concise.
#### Tests: I tested for many possible edge cases in the testing suite.
#### How To…

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):
#### Total estimated time it took to complete project: 4 hrs
#### Link to GitHub Repo: https://github.com/cs0320-f25/typescript-csv-lschmidt10
