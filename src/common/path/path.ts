export const PATH = {
  LOGIN: {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    RECOVERY_PASSWORD: '/recoveryPassword',
    CREATE_NEW_PASSWORD: '/set-new-password/:token',
    CHECK_EMAIL: '/checkEmail',
  },
  PROFILE: {
    PROFILE: '/profile',
  },
  COMMON: {
    ERROR404: '/error404',
  },
  PACKS: {
    PACKS: '/packs',
    CARD: '/packs/:packId',
    LEARN: '/learn/:packId',
  },
} as const
