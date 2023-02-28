import { createProdMockServer } from './createMockServer'
import roleMock from './role'
import userMock from './user'
import inviteguide from './inviteguide'

export const mockModules = [
    ...roleMock,
    ...userMock,
    ...inviteguide
]

export function setupProdMockServer() {
  createProdMockServer(mockModules)
}