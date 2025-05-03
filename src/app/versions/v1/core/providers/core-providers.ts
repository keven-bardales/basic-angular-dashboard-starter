import { CoreTokensProvider } from "../tokens/core.tokens"

export const provideCoreTokens  = ( extraProviders?: any[] | undefined ) => {
  return [
    ...CoreTokensProvider,
    ...(extraProviders || [])
  ]
}
