# Overview

The project was developed using the create react app tool using the typescript template. I also use some dependencies like material ui for styling and axios to make network requests. The main development flow was based in test driven development writing every test before starting coding. I wrote 2 core components: the layout and the GameList

- Layout is responsible for defining the arrangement of elements on the screen. It has 2 components: navbar and footer with the sticky behavior. It also receives the main content in the children prop which allows it to scale application in the future. For example if you want to include routing you only have to pass the router as children to this component.
- The game list makes the network request and renders the list of Games. I use material ui grid components to make the list responsive. I also use some typescript features (generics) to indicate the type of response it will receive from the request and improve development experience. In the constants folder there is some interfaces and enum for declaring the DTOs

# Deployment

You can access a deployed version [here](https://react-game-list.vercel.app/).

The build command in vercel is overridden to avoid deploying invalid code.

npm run test && react-script build




