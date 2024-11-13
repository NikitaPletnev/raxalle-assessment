This is a Raxalle developer task Next.js project.

## Technologies (shared before task)

Task is a Next.js project that uses TypeScript and Tailwind for styling. These are same technologies we use for our actual services.

Make sure you have:

1. Node.js version 20 or 22
2. Development environment with terminal and code editor. AI-based editors are okay

Some tips:

1. It's useful to be familiar with Next.js 14/15 and how server actions, React Server Components, and React 19 work
   - Useful links:
     - https://react.dev/reference/rsc/server-components
     - https://react.dev/reference/rsc/server-actions
     - https://react.dev/reference/react/useActionState
2. We'll test you on basic data structures and algorithms, basic modern CSS (knowing tailwind will help), and basic full-stack MPA knowledge
   - You'll have a chance to highlight your strengths in any of these areas

## Getting Started

> NB! You should NOT be spending more than three (3) hours on this task. Please document the time spent.

Install dependencies with `npm install` and run the development server with `npm run dev`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Task

This service is a JSON template processor and accompanying gallery to view existing templates. The processor takes a JSON input and a template, and substitutes variables in the template with values from the JSON input. Your task is to implement functionality and improve the codebase in a few areas.

The service is related to our actual product in the sense that we deal with JSON templates, but it has been created from scratch for this task and does not represent any actual product.

> [!TIP]
>
> **These tasks are in rough priority order; the earlier ones are more important.** However, feel free to prioritize based on your own strengths if needed. It is not expected for you to complete everything in the allotted time so prioritization beyond first (= the most important) task is fine.

### Task 1: Fix the most important JSON template processor problems

We need the variable substitution and basic conditional objects in JSON processor to work. Make sure it works as expected with `examples/json1.input.json` and `examples/json2.input.json`.

### Task 2: Make JSON processor UI better

Current ui implementation of the json processor is lacking. Improve the UI, but do keep in mind that this is a internal tool therefore pixel perfection is not needed. There is no need to spend time on the text area since it is mostly just used to copypaste json.

### Task 3: Implement the JSON gallery

We'll want to show JSON examples so that the user knows what kind of templates they can create. Implements `/gallery` and `/gallery/[id]` pages. UI matters less here since the user will probably not spend too much time there anyway.

### Task 4: Implement for loops in the JSON processor

Current implementation does not process json with loops. Fix it so that `examples/json3.input.json` processes correctly

### Task 5: Improve error handling

Provide user with better error messages. For instance, point out the position of an error in the JSON input or warn user when they're trying to use missing variable names.

### Task 6: Something else

If there's something else you would like to improve, feel free to take a stab at it.

**If there are quick wins to be made in improving the codebase, try to prioritize those.**

### Submitting

Write your code on a separate branch. There are no commit conventions to follow, just following best practices is enough.

To submit, create a new PR from `your-branch-name` to `main`. You can use PR comments to highlight code sections that you would like to further improve upon.
