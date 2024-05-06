# react-native-awesome-template

A React Native starter template to have a better product and development experience

## 📢 Introduction (Why?)

When developing a real-world application, more careful consideration is required. This becomes even more apparent when a team, comprising developers with varying levels of expertise, works on a project.

Whether collectively or individually, maintaining the application necessitates adherence to specific rules to uphold project quality and minimize issues. Therefore, the purpose of this template, which centers on the development setup, is to aid in achieving the goal by providing essential configuration and addressing concerns, ultimately resulting in a better product.

## 💫 Features

- 🐶 Configuring [husky](https://github.com/typicode/husky), a popular Git hook tool, simplifies the setup and management of pre-commit hooks. Currently, pre-commit, pre-push, and commit-msg hooks have configured.

- 💅 Configuring [lint-staged](https://github.com/lint-staged/lint-staged) allows for code linting before committing, ensuring that no errors make their way into the repository and enforcing consistent code style.

- ✍️ Configuring [commitlint](https://github.com/conventional-changelog/commitlint) enables linting of commit messages, enforcing a consistent format that promotes clarity and understanding the changes made to your project.

- 🧹 Removing logs in production mode improves performance and prevents potential concerns that may arise from logging.

- 🗂️ Setting up configuration for paths with the `@/` absolute prefix provides a better and more convenient experience when importing files.

## 📀 Installation

### Step 1

```bash
npx react-native init MyApp --template react-native-awesome-template
```

Or specific version

```bash
npx react-native init MyApp --template react-native-awesome-template@1.6.0
```

| Version | React Native |
|---|---|
| v2.1.0 | v0.74.1 |
| v2.0.0 | v0.74.0 |
| v1.7.0 | v0.73.7 |
| v1.6.0 | v0.73.6 |


### Step 2

On the terminal in the project path run the following command to initialize husky:

```bash
yarn prepare

//or

npm run prepare
```


## 🛡️ License

MIT
