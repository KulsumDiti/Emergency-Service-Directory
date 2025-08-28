# Emergency-Service-Directory

## Ans To THe Question No-1:

getElementById(id) : It selects a single element based on its unique"id".This is the most direct and generally fastest method when we know the elements specific ID.

getElementsByClassName(className) : It Selects all elements that have a specific class name. It returns a collection of elements.

querySelector(selector) : It Selects the first element that matches a specified CSS selector.This offers high flexibility as it can select by ID (#id), class (.class), tag name (tag), or any other valid CSS selector combination.

querySelectorAll(selector) : It Selects all elements that match a specified CSS selector. Similar to querySelector, it provides broad selection capabilities but returns a collection of all matching elements.

## Ans To THe Question No-2:

To create and insert new element,first i use document.createElement(tagName) to create it in memory.Then i add content using textContent or innerHTML. Finally, insert it into DOM using appendChild() to add the end.

## Ans To THe Question No-3:

Event Bubbling is a procces in DOM where an event first occurs on the child and then propagates upword through it's parents.The button's listener executes first and then the container's listener executes.Means the event happens on the target element and then the event moves upwords to the parent element.

## Ans To THe Question No-4:

Event delegation is a technique in JavaScript where a single event listener is attached to a parent element to manage events from multiple child elements. This approach leverages event bubbling to catch events from child elements without adding separate listeners for each child.
It is usefull because Event delegation handling dynamically added elements,simplified code and easier to maintain etc.

## Ans To THe Question No-5:

preventDefault() is used to prevent the default action that belongs to the event, such as preventing a form from submitting.And event.stopPropagation() is used to stop the event from bubbling up to parent elements, preventing any parent event handlers from being executed.
