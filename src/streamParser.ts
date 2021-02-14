import bole from 'bole'
import ndjson from 'ndjson'

export type LogLevel = 'error' | 'warn' | 'info' | 'debug'

export type LogBase = ({
  level: 'debug' | 'error',
} | {
  level: 'info' | 'warn',
  prefix: string,
  message: string,
}) & { level: LogLevel }

export type Reporter = (logObj: LogBase) => void

export interface StreamParser {
  on: (event: 'data', reporter: Reporter) => void,
  removeListener: (event: 'data', reporter: Reporter) => void,
}

export default createStreamParser()

export function createStreamParser() {
  const sp: StreamParser = ndjson.parse()
  bole.output([
    {
      level: 'debug', stream: sp,
    },
  ])
  return sp
}
