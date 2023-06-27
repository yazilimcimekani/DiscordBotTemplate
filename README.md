# Discord Bot Template

A basic [Discord.js](https://github.com/discordjs/discord.js) template repository for creating discord bots.

by [Yazılımcı Mekanı](https://discord.gg/yazilimcimekani) for everyone

## Table of Contents

- [Key Features](#key-features)
    - [Latest Discord Api Support](#latest-discord-api-support)
    - [Multi Purpose](#multi-purpose)
    - [Easy to Use](#easy-to-use)
    - [Multi Language Support](#multi-language-support)
    - [Easy Database Migration](#easy-database-migration)
    - [Easy to Deploy](#easy-to-deploy)
- [Getting Started](#getting-started)
- [Installation](#installation)
    - [Dependencies](#dependencies)
    - [Starting the bot](#starting-the-bot)
- [Contributing](#contributing)
- [Support](#support)

## Key Features

- ### Latest Discord Api Support

This template repository uses the latest version of [Discord.js](https://github.com/discordjs/discord.js). Don't worry about the updates.

You can use slashCommands, buttons, selectMenus, modals and more.

- ### Multi Purpose

Structure of this template repository is designed being multi purpose.

```md
Can i do {x} with this template?
```

Yes, you can do anything with this template.

- ### Easy to Use

Easy to use and well documented. You can start coding your bot in minutes.
Don't forget to read the documentation.

- ### Multi Language Support

You can easily translate command metadatas to user's preffered language.

Interested? Please see `./src/commands/i18n/` directory.

- ### Easy Database Migration

You can use any database you want. This template repository uses [Sequelize ORM](https://sequelize.org)

Available databases are: `MySQL`,`PostgreSQL`, `MongoDB`

- ### Easy to Deploy

You can deploy your bot to any platform you want with Docker.

```shell
docker build -t my-discord-bot .
docker run -d --env-file ./.env my-discord-bot
```

## Getting Started

Clicking `Use this template` button is the best way to start your project.

But you can also use `git clone` and remove the current source control mechanism.

```shell
git clone CLONE_URL
cd DiscordBotTemplate
rm -rf .git/
```

## Installation

### Dependencies

First, you need to have [Node.js](https://nodejs.org/en) installed on your computer.

Then, you need to install the dependencies of the project.

We are using `yarn` package manager but you can use `npm` or `pnpm` too.

```shell
npm install
# or
yarn install
# or
pnpm install
```

Then, you need to create a `.env` file in the root directory of the project.

Fill in the required fields in the `.env` file.

Example .env file: `./.env.example`

### Starting the bot

Starting the bot with hot reload by [Nodemon](https://nodemon.io):

```shell
npm run dev
# or
yarn dev
# or
pnpm dev
```

And that's the result:

```md
[BOT] Bot is ready!
```

Happy coding!

## Contributing

Please read our [CONTRIBUTING.md](./CONTRIBUTING.md) before submitting a Pull Request.

## Support

You want some help? Please read the issues before submitting a new question. Someone may have already asked the same question.

Didn't find the answer? Feel free to open a new issue.

For technical support, you can join our [Discord Server](https://discord.gg/yazilimcimekani) and ask your question in our forum channels.

<p align="center">
Made with ❤️ by <a href="">Yazılımcı Mekanı</a>
</p>
