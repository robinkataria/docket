# [Docket](https://mydocket.herokuapp.com/)

[Docket](https://mydocket.herokuapp.com/) 📝 is a cloud-enabled, mobile-ready, NodeJS and EJS powered Todo list.
- Create independent todo lists.
- Switch between existing lists.
- Add/Delete items to the list.

### Installation

Docket requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and start the server.

> How ?
1. Clone or download https://github.com/robinkataria/docket.git
2. Open cmd/Bash/Powershell
3. cd project-Directory 
4.  ```sh
    $ npm install -d
    $ node app.js
    ```
### Requirements and recommendations

- MongoDB Atlas account for connecting the app to database, or install MongoDB Compass on your system.
- Update mongodb connection statement in app.js as per your choice(Atlas/local).
- Use VS Code for better coding experience.
- Use Azure: Cosmos DB extention for reading the database.
- VS Code extentions: Prettier, file-icons, ESLint, Live Server

### [How to setup Heroku ?](https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment)
1. [Signup](https://signup.heroku.com/) on Heroku 
2. Install Heroku CLI
3. Track your codebase in a git repository
    ```sh
    $ git init
    $ git add .
    $ git commit -m "Initial commit"
    ```
4. Add a heroku git remote
    ```sh
    $ heroku login
    $ heroku create
    ```
5. Add a Procfile (No need in this project)
    ```sh
    $ cat > Procfile
    web: node app.js
    ^C
    ```
6. Use a database or object storage instead of writing to your local filesystem
    - MongoDB Atlas
    - A managed database service (such as Heroku Postgres)
    - A managed object storage service (such as Amazon S3)
7. Deploy your app
    ```sh
    $ git push heroku master
    ```
8. Managing config vars(.env)
    - View current config var values
    ```sh
    $ heroku config
    $ heroku config:get GITHUB_USERNAME
    ```
    - Set a config var
    ```sh
    $ heroku config:set GITHUB_USERNAME=joesmith
    ```
    - Remove a config var
    ```sh
    $ heroku config:unset GITHUB_USERNAME
    ```
