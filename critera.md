# Custom Frontend Criteria

## Project Rejection Criteria

The project will be rejected without review if:

- The pull request was not sent for review
- The markup was not ported into JSX
- Data from the API doesn't load or appear
- There are errors when building or running the project
- The frontend part of the application is not deployed to the server

## Performance Criteria

### Markup and JSX (25.18 points)

- Project is adapted for different screen resolutions and looks correct on all intermediate resolutions (7.4)
  - No horizontal scrolling on resolutions of 320px and up
  - Scrollbar can't be hidden using overflow: hidden
- Elements specified in the UI toolkit are used correctly (7.26)
- Classes are named according to BEM specifications (3.63)
- Semantic HTML is used (3.63)
  - Semantic tags are used appropriately
  - DOM tree structure doesn't consist only of <div> containers
- Correct approach for positioning elements has been chosen (3.63)
  - When positioning an element absolutely, its parent block is relatively positioned
- flex or grid layouts are used whenever applicable (3.63)

### Project Structure (7.26 points)

- Infrastructural project files are created using Vite or CRA (3.63)
- Project contains the following folders: (3.63)
  - images
  - components (with JS and CSS files)
  - fonts
- There are no warnings

### React Implementation (14.52 points)

- Routes are properly implemented (3.63)
  - Two separate routes: root ( / ) and one other
  - Navigation between pages works correctly
  - External links open in new tab
  - No broken links or empty anchors
- React components follow best practices (7.26)
  - Hooks are not used inside conditional statements
  - Hooks are called in component's main function
  - For class components, effects are in lifecycle methods
- Asynchronous API requests are properly handled (3.63)
  - Uses Fetch API or XMLHttpRequest (no third-party libraries)
  - API requests are in separate files
  - Promise chains end with catch()
  - First then() handler returns res.json

### Code Style (7.26 points)

- Naming conventions are followed (3.63)
  - camelCase for functions and variables
  - Variables use nouns and are descriptively named
  - Functions start with verbs and describe their action
  - Classes/components start with capital letters
  - No unclear abbreviations
  - Custom hooks start with 'use'
- Third-party libraries are used appropriately (3.63)

## Best Practices (8.26 points)

### Markup and JSX

- Components are reused where possible (1.25)
- Fonts are connected using @font-face (1.12)
- Icons are in SVG format (1.12)
- Form elements have focus states (1.15)
- Forms have placeholders and required properties (1.25)
- reset.css is not used (1.12)

### React and API Integration

- State variables have correct initial data types (1.25)
- API requests are in App component (1.25)
- Event handlers are properly cleaned up (1.25)
- API errors are handled with user feedback (1.25)
- Constants are in capital letters in config file (1.25)
- Popups have proper close functionality (1.25)
  - Can be closed via: cross button, overlay, ESC key

## Recommendations (4.17 points)

### Markup and JSX

- System fonts are alternative options (0.83)
- Images have appropriate alt attributes (0.83)
- Images are optimized (0.83)

### React and API Integration

- react-router components used for internal links (0.83)
- Components use semantically correct blocks (0.83)
- Code is clean and well-structured (0.85)
  - Clear and readable
  - Commented where needed
  - No unused code or redundant logic
  - Consistent formatting and indentation
