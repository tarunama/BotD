import { BotdError, State } from '../types'

export default function getErrorTrace(): string {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    null[0]()
  } catch (error) {
    return error.stack.toString()
  }
  throw new BotdError(State.UnexpectedBehaviour, 'errorTrace signal unexpected behaviour')
}
