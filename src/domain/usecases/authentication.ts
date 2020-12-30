import { AccountModel } from '../models/account-model'

type AuthenticationParams = {
  email: string
  password: string
}

export interface Authentication {
  func: (params: AuthenticationParams) => Promise<AccountModel>
}