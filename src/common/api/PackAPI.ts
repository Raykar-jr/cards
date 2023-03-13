import {
  CreatePackResponseType,
  CreatePacksDataType,
  DeletePackResponseType,
  GetPacksResponseType,
  PackParamsType,
  UpdatePackDataType,
  UpdatePackResponseType,
} from 'common/api/DataTypes'
import { instance } from 'common/api/main-api'

export const packAPI = {
  getPacks(params: PackParamsType) {
    return instance.get<GetPacksResponseType>('cards/pack', { params })
  },
  createPack(data: CreatePacksDataType) {
    return instance.post<CreatePackResponseType>('cards/pack', { cardsPack: data })
  },
  updatePack(data: UpdatePackDataType) {
    return instance.put<UpdatePackResponseType>('cards/pack', { cardsPack: data })
  },
  deletePack(packId: string) {
    return instance.delete<DeletePackResponseType>(`cards/pack?id=${packId}`)
  },
}
