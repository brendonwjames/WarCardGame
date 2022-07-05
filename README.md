# War! The Card Game
War! The Card Game is the beginning of a app designed for users to play card games, with the first game implemented being War. The current version of the application allows users to sign up for an account, play the card game War, and track wins against a computer player.

## Live Site
Link to the (soon to be) live version of War! The Card Game, hosted by Heroku: [War! The Card Game](https://warthecardgame.herokuapp.com/)

## Software
War! The Card Game is a card game site built with the following software:

Backend - Python, Flask

Frontend - React/Redux, Javascript

Database - PostgresSQL

Styling - HTML, CSS

## Installation
To install and start using War! The Card Game, follow the instructions below:

1. Clone the repository from the main branch (link directly below)

   ```bash
   git clone https://github.com/brendonwjames/WarCardGame
   ```

2. CD into root of project and install project dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file in the root of your project and add the following lines into the file:
   ```bash
   SECRET_KEY=<your-secret-key-value>
   DATABASE_URL=postgresql://<your-database-user>:<your-user-password>@localhost/<your-database-name>>
   ```

4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file. Use the following commands in your terminal:
   ```bash
   A. psql - Enter psql command line
   B. CREATE USER <your-database-user> WITH PASSWORD '<your-user-password>';
   C. CREATE DATABASE <your-database-name> WITH OWNER <your-database-user>
   D. /q - Exit psql command line
   ```

5. Enter your pipenv shell, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. Open up a second terminal, and cd into react-app directory. Use npm install to install required dependecies from package.json

   ```bash
   npm install
   ```
   *Some users may need to run the following command, depending on the node version:
   
   ```bash
   nvm use v16
   ```

7. Run the server using npm start in the second terminal. The default server runs on localhost:3000. Navigate to localhost:3000 in your browser (if it does not open automatically)

   ```bash
   npm start
   ```

8. Login to the site using the demo user, or sign up for you own account, and explore the site!

## Future Implementations
The current project was completed during a short sprint, with focus being on functionality of the card game War! and basic user authentication for the app. Though I was pleased with my start to the project, I have many additions in mind to improve the project. The first addition when I return to this project will be to incorporate images with the card values currently being displayed with text only. Using https://bicyclecards.com/how-to-play/war/ as the rules to follow, I found that they were slightly different than how I play the game, and would like to add functionality to the war state to give players the option to put additional cards face down. The file structure needs to be re-worked, as most helper functions were written in line as they were needed, as opposed to organized into a specific folder to be exported throughout the app. In terms of trade-offs, I focused on functionality, so efficiency of the functions and components could be improved. I built out the skeleton of the project with a future redux app in mind, working on implementing parts of the app using redux state management. The CSS is bare-bones at the moment, displaying the functionality with plenty of room for creativity down the road. With the current React skeleton, I intend to add additional stats to the players pages and flesh out database entries with additions such as total games played, losses, and games started. Adding a timer to the game board, as well as being able to select an opponent from the database are also in the pipeline.
