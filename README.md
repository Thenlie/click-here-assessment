# Click Here Digital Technical Assessment ![Project License Badge](https://img.shields.io/badge/license-MIT-brightgreen) ![Project Test Badge](https://img.shields.io/badge/tests-100%25-blue)

A technical interview assessment created for [Click Here Digital](https://www.clickheredigital.com/). I created a fully functional RESTful API from scratch using a [PostgreSQL](https://www.postgresql.org/) database, [Sequelize](https://sequelize.org/) as the ORM and [Express](https://expressjs.com/) for the server. All routes have unit tests created with [Jest](https://jestjs.io/). User authentication is handled via [JSON Web Token](https://jwt.io/). 

This is a back-end only app so it must be tested in API testing software like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/). For full instructions on running the app see [Usage](#usage).

---

<div align="center">
 
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=cyan)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

</div>

## Table of Contents:

-   [Usage](#usage)
-   [Testing](#testing)
-   [License](#license)
-   [Questions](#questions)

## Usage

To use this app first clone the repository to your local machine. To do this, navigate to the directory where you want the project to go and use the command `git clone git@github.com:Thenlie/click-here-assessment.git`. 

Next you will need to install the projects npm dependencies. Since all of the required packages are already listed as dependencies in the package.json file this is an easy task. From the root directory of the project simply run the command `npm install` or `npm i`. 

The last thing you need to do before spinning up the server is to create a `.env` file. This will contain your Postgres login credentials and the JWT secret. The variable needed are as follows:

- DB_NAME
- DB_USER
- DB_PW
- JWT_SECRET

Once dependencies have been installed you are ready to run the app! This can be done with the command `npm start` from the root directory of the project. If you would prefer to have the server update every time you make a change you can run the command `npm run watch` instead. You will see a console log stating '*App listening on port 3000!*'. This is the address for the backend express server. 

The server is now live and the API can be tested. This should be done with your favorite API testing software, like Insomnia Core. To make this process easier, I have exported my Insomnia request collection. You can follow the documentation [here](https://docs.insomnia.rest/insomnia/import-export-data) to import this collection to your own instance of Insomnia. The file can be found in the [assets](https://github.com/Thenlie/click-here-assessment/tree/main/assets) directory of this repo. 

    NOTE: When testing any route that requires a user to be logged in, you will need to paste a valid JWT in the Authorization headers of request. 

## Testing

This application features a testing suite that checks every single endpoint. From the root of the application these tests can be run with the command `npm run test`. This will start the Jest testing framework and run through every test in the `__test__` directory. The results of these tests are logged to the console upon completion. 

## License
<details>

<summary>MIT License</summary>

> Copyright (c) [2022] [Type++]
> 
> __Permission is hereby granted, free of charge, to any person obtaining a copy__
> __of this software and associated documentation files (the "Software"), to deal__
> __in the Software without restriction, including without limitation the rights__
> __to use, copy, modify, merge, publish, distribute, sublicense, and/or sell__
> __copies of the Software, and to permit persons to whom the Software is__
> __furnished to do so, subject to the following conditions:__
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

</details>

---

## Questions?

If you have any questions about the project you can reach out to me via email or GitHub with the information below. 

>Email: leithen113@gmail.com 

>GitHub Username: [Thenlie](https://github.com/Thenlie)
