# Overview

The project was developed using create react app tool using the typescript template. I also use some dependencies like material ui for styling and xios to make network requests.
The main development flow was based in test driven development writing the every test before start codeing.
I wrote 2 core components the layout and the GameList

- Layout is responsible for displaying elements on the screen. It has 2 components navbar and footer with the sticky behavior. It also recieves the main content in the children prop which allows to scale application in the future. For example if you want to include routing you only have to pass router as children to this component.
- The game list makes the network request and renders the list of Games. I use material ui grid compoennts to make the list responsive. I also use some typescript features (geenrics) to indicate axios the type of response it will recieve from the request and improving development experience. In the constants folder there is some interfaces and enum for declaring the DTOs 

# Deployment

You can access a deployed version [here](https://react-game-list.vercel.app/).

The build command in vercel is overrided to avoid deploying invalid code.

npm run test && react-script build




