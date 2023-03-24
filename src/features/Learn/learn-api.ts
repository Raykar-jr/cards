import { UpdateGradeRequestType, UpdateGradeResponseType } from 'common/api/DataTypes'
import { instance } from 'common/api/main-api'

export const learnApi = {
  updateGrade(data: UpdateGradeRequestType) {
    return instance.put<UpdateGradeResponseType>('cards/grade', data)
  },
}
