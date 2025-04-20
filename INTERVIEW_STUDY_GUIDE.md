# Technical Interview Study Guide

## JavaScript Fundamentals

### Core Concepts

1. **Variables & Data Types**

   - `var`, `let`, `const` - scope and hoisting differences
   - Primitive types: string, number, boolean, null, undefined, symbol, bigint
   - Reference types: object, array, function
   - Type coercion and comparison (`==` vs `===`)

2. **Functions**

   - Function declarations vs expressions
   - Arrow functions and `this` binding
   - Closures and lexical scope
   - Higher-order functions (map, filter, reduce)
   - Callbacks and promises

3. **ES6+ Features**

   - Destructuring: `const { name, age } = person;`
   - Spread/rest operators: `[...array]`, `{...object}`
   - Template literals: `` `Hello ${name}` ``
   - Optional chaining: `user?.address?.street`
   - Nullish coalescing: `value ?? defaultValue`

4. **Asynchronous JavaScript**
   - Event loop and concurrency model
   - Callbacks, promises, async/await
   - Error handling with try/catch
   - Microtasks vs macrotasks

### Project Example

In the Beringia Marine project, we use async/await for API calls:

```javascript
// Example from useSketchfabApi hook
const fetchModelData = async (modelId) => {
  try {
    const response = await fetch(
      `https://api.sketchfab.com/v3/models/${modelId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching model:", error);
    return null;
  }
};
```

## React Fundamentals

### Core Concepts

1. **Components**

   - Functional vs class components
   - Props and prop drilling
   - State management with useState
   - Lifecycle methods and useEffect
   - Custom hooks

2. **State Management**

   - Local state vs global state
   - Context API
   - Redux (if applicable)
   - State updates and immutability

3. **Performance Optimization**

   - React.memo, useMemo, useCallback
   - Virtual DOM and reconciliation
   - Code splitting and lazy loading
   - Preventing unnecessary re-renders

4. **React Patterns**
   - Render props
   - Higher-order components
   - Compound components
   - Custom hooks

### Project Example

The Beringia Marine project uses Context API for state management:

```jsx
// NavigationContext.tsx
export const NavigationProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState("home");
  const [previousSection, setPreviousSection] = useState(null);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // Functions to update state
  const setNavigationVisibility = (visible) => setIsNavVisible(visible);
  const setHeaderVisibility = (visible) => setIsHeaderVisible(visible);

  return (
    <NavigationContext.Provider
      value={{
        currentSection,
        previousSection,
        isNavVisible,
        isHeaderVisible,
        setCurrentSection,
        setPreviousSection,
        setNavigationVisibility,
        setHeaderVisibility,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
```

## HTML & CSS

### HTML Fundamentals

1. **Semantic HTML**

   - `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`
   - Accessibility considerations
   - ARIA attributes

2. **Forms**
   - Input types and validation
   - Form submission handling
   - Accessibility for forms

### CSS Fundamentals

1. **Layout**

   - Box model
   - Flexbox
   - Grid
   - Position properties

2. **Responsive Design**

   - Media queries
   - Viewport units
   - Mobile-first approach
   - Breakpoints

3. **CSS Preprocessors**
   - SASS/SCSS variables, mixins, nesting
   - CSS-in-JS approaches

### Project Example

The Beringia Marine project uses responsive design:

```css
/* Example of responsive design in the project */
@media (max-width: 768px) {
  .header {
    padding: 1rem;
  }

  .nav-menu {
    display: none;
  }

  .mobile-menu {
    display: block;
  }
}
```

## Node.js & Express

### Node.js Fundamentals

1. **Core Modules**

   - fs (file system)
   - path
   - http/https
   - events

2. **Asynchronous Programming**

   - Event-driven architecture
   - Streams and buffers
   - Error handling

3. **NPM**
   - Package management
   - Scripts
   - Dependencies vs devDependencies

### Express Fundamentals

1. **Routing**

   - Route parameters
   - Query strings
   - Middleware

2. **Middleware**

   - Custom middleware
   - Error handling middleware
   - Third-party middleware (cors, body-parser)

3. **API Design**
   - RESTful principles
   - Status codes
   - Request/response handling

### Project Example

While the Beringia Marine project is primarily frontend, it interacts with APIs:

```javascript
// Example of API interaction in the project
const sendContactForm = async (formData) => {
  try {
    const response = await emailjs.send(
      "service_id",
      "template_id",
      formData,
      "user_id"
    );
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
```

## Common Interview Questions

### JavaScript

1. **Explain closures**

   - A closure is a function that has access to variables in its outer scope
   - Example: Functions that remember variables from their creation context

2. **Explain `this` keyword**

   - Refers to the object that's currently executing the code
   - Value depends on how the function is called
   - Arrow functions don't have their own `this`

3. **Explain event delegation**
   - Attaching event listeners to parent elements
   - Benefits for performance and dynamic content
   - How event bubbling works

### React

1. **Explain React's virtual DOM**

   - Virtual representation of UI in memory
   - Diffing algorithm for efficient updates
   - Reconciliation process

2. **Explain React hooks**

   - useState for state management
   - useEffect for side effects
   - Custom hooks for reusable logic

3. **Explain controlled vs uncontrolled components**
   - Controlled: React state controls the input
   - Uncontrolled: DOM handles the input state
   - When to use each approach

### CSS

1. **Explain box model**

   - Content, padding, border, margin
   - Box-sizing property
   - How to calculate element dimensions

2. **Explain flexbox vs grid**

   - Flexbox: One-dimensional layout
   - Grid: Two-dimensional layout
   - When to use each

3. **Explain CSS specificity**
   - How specificity is calculated
   - !important rule
   - Best practices for specificity

## Problem-Solving Approach

1. **Understand the problem**

   - Clarify requirements
   - Identify edge cases
   - Ask clarifying questions

2. **Plan your solution**

   - Break down into smaller parts
   - Consider time and space complexity
   - Discuss trade-offs

3. **Implement your solution**

   - Write clean, readable code
   - Use meaningful variable names
   - Add comments for complex logic

4. **Test your solution**
   - Check edge cases
   - Verify correctness
   - Discuss potential improvements

## Project-Specific Knowledge

### Beringia Marine Project Architecture

1. **Component Structure**

   - Root components (App, Header, Main, Footer)
   - Page components (Home, About, Client, Artist, Contact)
   - Modal system (ModalContact, PdfModal)

2. **State Management**

   - Context providers (Modal, Navigation, Scroll, Viewport)
   - Custom hooks (useScroll, useViewport, useForm)
   - Data flow between components

3. **Responsive Design**

   - Mobile-first approach
   - Breakpoints for different devices
   - Adaptive layouts and components

4. **Performance Considerations**
   - Lazy loading for components
   - Image optimization
   - Code splitting

## Final Tips

1. **Communication**

   - Explain your thought process
   - Ask clarifying questions
   - Discuss trade-offs in your decisions

2. **Technical Depth**

   - Understand core concepts deeply
   - Be able to explain complex topics simply
   - Know when to use different approaches

3. **Problem-Solving**

   - Start with a simple solution
   - Iterate and improve
   - Consider edge cases

4. **Project Knowledge**
   - Be ready to discuss your project's architecture
   - Explain technical decisions
   - Discuss challenges and how you overcame them

Good luck with your interview!
