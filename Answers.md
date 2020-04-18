# Answers

1. What is React JS and what problems does it solve? Support your answer with
   concepts introduced in class and from your personal research on the web.

   React JS is a JavaScript Library that is able to handle continually changing
   data from user input very well. It breaks up apps into smaller components to
   handle large scale data change smoothly. This is accomplished by using state,
   props, and side effects.

1. Describe component state.

   A look at the current history of the component. Every time the DOM renders,
   there is a new state for any data that has changed.

1. Describe props.

   Properties of the components. Often held in variables, the data can be shown
   as objects, arrays, etc and easily passed between components.

1. What are side effects, and how do you sync effects in a React component to
   changes of certain state or props?

   A side effect is anything that that happens outside of the component with a
   change of state occurs. You can sync effects and the changes to states or
   props by passing the state/prop in the array [] at the end of the useEffect
   hook.
