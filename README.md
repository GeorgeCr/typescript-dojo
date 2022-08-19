[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=5577200&assignment_repo_type=AssignmentRepo)
# Typescript Coding Dojo

This is an exercise to get some familiarity with Typescript.

Remember to run `npm install` before starting.

## Structure

Inside the `src` folder we have:

- `Redis.js` - a verrrrrry basic mock of Redis
- `RedisService.js` - a service that interacts with Redis
- `RedisService.test.ts` - a test suite for the service
  - If you want to see the tests running before starting the task remove / comment the line: `"extends": "@tsconfig/recommended/tsconfig.json",` inside of `tsconfig.json`. 4 out of 5 tests should pass - remember to add it back in for the task!

## Instructions

Manually convert the files to Typescript and make the tests pass. You shouldn't have to change the tests. We should be able to store strings and numbers in our very basic redis cache. Not all redis functions are implemented (but should be).
