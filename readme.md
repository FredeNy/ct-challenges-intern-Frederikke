# A set of JavaScript challenges

Here's a set of small vanilla JavaScript challenges. You have to write the code in the challenge functions, to transform the input data before returning it.

- The challenges are located inside the `/challenges` folder.
- `/data` contains a JSON file that's used for one of the challenges.
- `/test` contains the unit tests (written in [Vitest](https://vitest.dev/)), that validates the challenge have been solved correctly. It might help to look at these tests if you are unsure of the expected output from the challenge functions.

To get started, you should run:

```sh
npm install
```

### Validate the code

You can validate the result by running the tests.

```sh
npm test
```

This will validate all the tests - If you just want to validate a specific challenge, include the name of it when running the test. E.g.

```sh
npm test challenge-01
```

When you run the test, it will run in `watch` mode, so it continues to validate the code when you change it.
