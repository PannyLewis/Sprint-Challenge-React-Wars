# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

It automates repetitive tasks for large production websites. Say you are selling 100 pairs of shoes, you don't have to have to add each image. And what happens when you need to change the prices to all 100, you don't want to have to change them 100 times. Reat allows you to write one code that does all of that for you. That's what is referred to as dynamic data.

1. Describe component state.

Just like a state is part of a country, the state is an object that is part of the component. Example: card.js file is a component, in that component there is an object of images that is tucked into a state. The state holds takes the object and turns it into an array which can then be mapped through for display onto the browser.

1. Describe props.

Short for properties. Just as there are arguments/parameters for functions, props are used to call in the value of the property of a object.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?
   Effect Hook is a function called useEffect. It needs useState, the function, and a return of what it is that you want to happen in the browswer. Say you want a bunch of image to appear in the browser, you use useState to declare the variables, then useEffect to retrieve and set the axios data into arrays, after mapping through the array, return the images of the array into the HTML.
