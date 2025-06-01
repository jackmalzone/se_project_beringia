# Code Editing Action Guide

Use this checklist before committing changes to maintain project quality and coherence.

## 1. Understand the Task

- Have I fully understood the requirement or bug?
- Is the purpose of this change clearly defined?

## 2. Evaluate the Solution

- Does this solution follow the design philosophy?
- Is the logic sound, scalable, and consistent with existing patterns?

## 3. Minimize Change

- Is this the least invasive solution?
- Am I avoiding unnecessary abstraction or overengineering?

## 4. Suggest Improvements

- Is there a more elegant or efficient approach?
- Can any existing utilities or components be reused?

## 5. Check Project Integration

- Does this fit seamlessly with the surrounding codebase?
- Are file names and directories consistent with conventions?

## 6. Test Thoroughly

- Does it work as expected across screen sizes and states?
- Have edge cases been considered and handled?

## 7. Maintain Clarity

- Is the code readable and well-structured?
- Are any complex sections clearly documented?

## 8. Styling Guidelines

- Are you using CSS Modules instead of Tailwind CSS?
- Is the CSS module file (e.g., `hero.module.css`) colocated with its component in the same folder?
- Is the CSS readable and follows BEM methodology?
- Are styles scoped to their components to prevent conflicts?
