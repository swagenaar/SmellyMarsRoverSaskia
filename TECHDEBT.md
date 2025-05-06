# Tech Debt

## Steps:
[X] Refactor Readability
    [X] Fix all linting errors
    [X] Fix all type errors
    [X] Fix bad naming
    [X] Fix Magic strings
    [X] Remove dead code
[X] Reduce complexity
    [X] Fix long method
[] Reorder responsibilities
    [] Fix feature envy 
    [] Fix data class
[] Refine abstractions
    [] Fix primitive obsession
[] Refactor to Design patterns    
    [] Fix switch statement, see ideas

## Smells:
[] Feature envy: Rover directly uses fields from RoverState
[] Data class: RoverState only has state
[] Primitive obsession: The Rover contstructor accepts a string as its initial state
[] Primitive obsession: The go method accepts a string as its command
[] Magic strings: There are a lot of magic strings for the commands and the headings
[] Long method: The Rover.go method is long and complex
[] Switch statement: The logic in Rover.go smells like a Switch statement
[] Dead code: G is not used

## Ideas:
[] Use the state pattern to switch to a different state based on the command
[] Use the command pattern to handle the dynamic dispatch based on the command