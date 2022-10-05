Airport Challenge
=================

```
         ______
        __\____\___
=  = ==(____DFA____)
           \_____\__________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

```
Task
-----

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client:

### Acceptance Criteria

```
1. As an air traffic controller
   So I can get passengers to a destination
   I want to instruct the airport to land a plane
```

| Objects | Properties                      | Messages                 | Output                              |
| ------- | ------------------------------- | ------------------------ | ----------------------------------- |
| airport | planesInAirport @array[@string] | landPlane(plane @string) | @string - `{$plane.id} has landed.` |

### Tests:

1. Test that a plane is added to the planesInAirport array. 
2. Test that a specific plane is added to the planesInAirport array.
3. Test that landPlane returns a string when a plane has landed. 
------------------------------------------------------------------------------------------------------------------
```
2. As the system designer
   So that the software can be used for many different airports
   I would like a default airport capacity that can be overridden as appropriate
```
| Objects | Properties               | Messages | Output |
| ------- | ------------------------ | -------- | ------ |
| airport | default capacity @number |          |        |

### Tests:
1. Test that a default capacity is set when an airport is created. 
2. Test that the capacity can be changed. 
------------------------------------------------------------------------------------------------------------------
```
3. As an air traffic controller
   To ensure safety
   I want to prevent landing when the airport is full
```
| Objects | Properties                      | Messages                         | Output                                                          |
| ------- | ------------------------------- | -------------------------------- | --------------------------------------------------------------- |
| airport | capacity @number                | setCapacity(newCapacity @number) |                                                                 |
|         | planesInAirport @array[@string] | landPlane(plane @string)         | @string - `{$plane} has landed.`                                |
|         |                                 |                                  | or - `{$plane} cannot land because the airport is at capacity.` |

### Tests:
1. Test that if planesInAirport is at capacity, a plane doesn't land. 
2. Test that if the plane doesn't land, a string is returned to inform the traffic control officer. 
------------------------------------------------------------------------------------------------------------------
```
1. As an air traffic controller
   So I can get passengers on the way to their destination
   I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```
| Objects | Properties                      | Messages                    | Output                              |
| ------- | ------------------------------- | --------------------------- | ----------------------------------- |
| airport | planesInAirport @array[@string] | takeOffPlane(plane @string) | @string - `{$plane} has taken off.` |

### Tests:        
1. Test that the number of planes at the airport reduces when a plane takes off.
2. Confirm that when a plane takes off, that plane is no longer at the airport. 
3. Test that a string is returned when a plane takes off.
------------------------------------------------------------------------------------------------------------------
```
5. As an air traffic controller
   To avoid confusion
   I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```
| Objects | Properties                      | Messages                        | Output                                                               |
| ------- | ------------------------------- | ------------------------------- | -------------------------------------------------------------------- |
| airport | planesInAirport @array[@string] | takeOffPlane(plane @string)     | @string - `{$plane} has taken off` or `{$plane} is not in airport`  |
|         |                                 | landPlane(plane @string)        | @string - `{$plane} has landed` or `{$plane} is already in airport` |
|         |                                 | isPlaneInAirport(plane @string) | @boolean                                                             |

### Tests:
1. Test that the airport has an isPlaneInAirport function that returns true when a plane is in the airport. 
2. Test that if a plane is in the airport, it cannot land.
3. Test that if a plane is not at the airport, it cannot take off. 



------------------------------------------------------------------------------------------------------------------
#### Extended Acceptance Criteria
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```
