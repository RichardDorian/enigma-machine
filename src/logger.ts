import chalk from 'chalk';

export function info(message: any) {
  console.log(chalk.blue('[INFO]'), message);
}

export function calculateLog(message: any) {
  console.log(chalk.green('[CALCULATOR]'), message);
}

export function error(message: any) {
  console.log(chalk.red('[ERROR]'), message);
}

export function debug(message: any) {
  console.log(chalk.cyan('[DEBUG]'), message);
}