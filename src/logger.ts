import bole = require('bole')

bole.setFastTime()

export default bole('pnpm') as Logger<object>

export interface Logger<T> {
  <Y>(name: string): Logger<Y>,
  debug: (log?: T) => void,
  info: (log: {message: string, prefix: string}) => void,
  warn: (log: {message: string, prefix: string, error?: Error}) => void,
  error: (err: Error, log?: string | Error) => void,
}
