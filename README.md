[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/sophie-beard-9a9842222/)

<br />
<div align="center">
  <a href="https://github.com/sophiebeard/airport-challenge">

  </a>

<h3 align="center">Digital Futures Airport Challenge </h3>

  <p align="center">
    The task is to control the flow of planes at an airport. The planes can land and take-off, provided that the weather is clear. When the weather is stormy, no planes may take-off or land. 
    <br />
    <a href="https://github.com/sophiebeard/airport-challenge"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/sophiebeard/airport-challenge/issues">Report Bug</a>
    ·
    <a href="https://github.com/sophiebeard/airport-challenge/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#Project Review and Roadmap">Project Review and Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
    <li><a href="#project">Project</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
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
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

Extended Criteria:
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
Your task is to test drive the creation of a set of classes/objects to satisfy all the above user stories. You will need to use a random number generator to set the weather (it is normally sunny but on rare occasions it may be stormy). In your tests, you'll need to stub random behaviour to ensure consistent test behaviour.

Your code should defend against edge cases such as inconsistent states of the system ensuring that planes can only take off from airports they are in; planes that are already flying cannot take off and/or be in an airport; planes that are landed cannot land again and must be in an airport, etc.
<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these steps: 

### Prerequisites

* Fork this repo to clone to your local machine.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/sophiebeard/airport-challenge.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- PROJECT REVIEW AND ROADMAP -->
## Project Review and Roadmap

- [ ] Main Takeaways:
    - [ ] This was my first challenge as part of the Digital Futures Academy.
    - [ ] In this project, I practiced writing Domain Models from user stories. From these, I was able to write my own testing framework. The project was developed using Test Driven Development, first planning which tests I was planning on running, and then implementing them. 
- [ ] Next Steps:
    - [ ] If I were to attempt this project again, I would focus on decoupling the classes and tests, and writing each class so that it is single responsibility. Also, I would like to encapsulate my code, and implement getter and setter functions to allow access. I would use a testing framework, such as Jasmine, to run my tests.
    - [ ] With more time, I would have liked to fully complete the extended assessment criteria, preventing take-off during stormy weather, and writing code that would be able to count the number of planes in the airport. 


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Your Name - [Sophie Beard](https://www.linkedin.com/in/sophie-beard-9a9842222/) - beardsophie@outlook.com

Project Link: [https://github.com/sophiebeard/airport-challenge](https://github.com/sophiebeard/airport-challenge)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Bob's Bagels](https://github.com/digital-futures-academy/mse-software-design/tree/main/projects/bobs-bagels)
  * []() This was a useful resource for understanding Test Driven Development, and writing a testing framework. Some of the domain modelling and implementation of code was also similar, so acted as a useful example in many cases. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 


<!-- PROJECT -->
## Project




### User Stories, Domain Models and Test Plan

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
4. As an air traffic controller
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
| Objects | Properties                      | Messages                        | Output                                                              |
| ------- | ------------------------------- | ------------------------------- | ------------------------------------------------------------------- |
| airport | planesInAirport @array[@string] | takeOffPlane(plane @string)     | @string - `{$plane} has taken off` or `{$plane} is not in airport`  |
|         |                                 | landPlane(plane @string)        | @string - `{$plane} has landed` or `{$plane} is already in airport` |
|         |                                 | isPlaneInAirport(plane @string) | @boolean                                                            |

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
```

| Objects | Properties                      | Messages                    | Output                                                             |
| ------- | ------------------------------- | --------------------------- | ------------------------------------------------------------------ |
| airport | planesInAirport @array[@string] | takeOffPlane(plane @string) | @string - `{$plane} has taken off` or `{$plane} is not in airport` |
| weather | stormy @boolean                 |                             | @boolean                                                           |
|         |                                 |                             |

### Tests:        
1. Test that a plane cannot take-off if the weather is stormy. 
------------------------------------------------------------------------------------------------------------------
```
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy
```
| Objects | Properties                      | Messages                 | Output                                                                  |
| ------- | ------------------------------- | ------------------------ | ----------------------------------------------------------------------- |
| airport | planesInAirport @array[@string] | landPlane(plane @string) | @string - `{$plane} has landed` or `{$plane} is already in the airport` |
| weather | stormy @boolean                 |                          | @boolean                                                                |
|         |                                 |                          |

### Tests:        
1. Test that a plane cannot land if the weather is stormy. 
------------------------------------------------------------------------------------------------------------------

```
As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```
