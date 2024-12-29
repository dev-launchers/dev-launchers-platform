import { colors, getColorWithOpacity } from '../primitive/color';

interface DarkTheme {
  static: {
    core: {
      jupiter: string;
      saturn: string;
      neptune: string;
      uranus: string;
      cosmic: string;
      nebula: string;
    };
    surface: {
      brand: {
        jupiter: string;
        uranus: string;
        neptune: string;
        saturn: string;
        cosmic: string;
        nebula: string;
      };
      grey: {
        pure: string;
        brand: string;
        muted: string;
        transparent: string;
      };
      alert: {
        info: string;
        warning: string;
        success: string;
        error: string;
      };
    };
    border: {
      brand: {
        jupiter: string;
        uranus: string;
        neptune: string;
        saturn: string;
        cosmic: string;
        nebula: string;
      };
      grey: {
        pure: string;
        brand: string;
        muted: string;
      };
      alert: {
        info: string;
        warning: string;
        success: string;
        error: string;
      };
    };
    content: {
      text: {
        grey: {
          pure: string;
          brand: string;
          muted: string;
        };
        brand: {
          jupiter: string;
          uranus: string;
          neptune: string;
          saturn: string;
          cosmic: string;
          nebula: string;
        };
        alert: {
          info: string;
          warning: string;
          success: string;
          error: string;
        };
      };
      icon: {
        brand: {
          jupiter: string;
          uranus: string;
          neptune: string;
          saturn: string;
          cosmic: string;
          nebula: string;
        };
        grey: {
          pure: string;
          brand: string;
          muted: string;
        };
        alert: {
          info: string;
          warning: string;
          success: string;
          error: string;
        };
      };
    };
    effect: {
      overlay: {
        grey: {
          strong: string;
          base: string;
          muted: string;
        };
      };
      shadow: {
        brand: {
          jupiter: string;
          uranus: string;
          neptune: string;
          saturn: string;
          cosmic: string;
          nebula: string;
        };
        grey: {
          pure: string;
          brand: string;
          muted: string;
        };
        alert: {
          info: string;
          warning: string;
          success: string;
          error: string;
        };
      };
    };
  };
}

export const darkTheme: DarkTheme = {
  static: {
    core: {
      jupiter: colors.jupiter500,
      saturn: colors.saturn500,
      neptune: colors.neptune500,
      uranus: colors.uranus500,
      cosmic: colors.cosmic500,
      nebula: colors.nebula500,
    },
    surface: {
      brand: {
        jupiter: colors.jupiter800,
        uranus: colors.uranus800,
        neptune: colors.neptune800,
        saturn: colors.saturn800,
        cosmic: colors.cosmic700,
        nebula: colors.nebula700,
      },
      grey: {
        pure: colors.grey900,
        brand: colors.grey800,
        muted: colors.grey700,
        transparent: 'transparent',
      },
      alert: {
        info: colors.info800,
        warning: colors.warning800,
        success: colors.success700,
        error: colors.error700,
      },
    },
    border: {
      brand: {
        jupiter: colors.jupiter400,
        uranus: colors.uranus400,
        neptune: colors.neptune400,
        saturn: colors.saturn400,
        cosmic: colors.cosmic300,
        nebula: colors.nebula300,
      },
      grey: {
        pure: colors.grey50,
        brand: colors.grey100,
        muted: colors.grey300,
      },
      alert: {
        info: colors.info400,
        warning: colors.warning400,
        success: colors.success400,
        error: colors.error400,
      },
    },
    content: {
      text: {
        grey: {
          pure: colors.grey50,
          brand: colors.grey100,
          muted: colors.grey300,
        },
        brand: {
          jupiter: colors.jupiter400,
          uranus: colors.uranus400,
          neptune: colors.neptune400,
          saturn: colors.saturn400,
          cosmic: colors.cosmic300,
          nebula: colors.nebula200,
        },
        alert: {
          info: colors.info300,
          warning: colors.warning300,
          success: colors.success300,
          error: colors.error300,
        },
      },
      icon: {
        brand: {
          jupiter: colors.jupiter400,
          uranus: colors.uranus400,
          neptune: colors.neptune400,
          saturn: colors.saturn400,
          cosmic: colors.cosmic300,
          nebula: colors.nebula200,
        },
        grey: {
          pure: colors.grey50,
          brand: colors.grey100,
          muted: colors.grey300,
        },
        alert: {
          info: colors.info300,
          warning: colors.warning300,
          success: colors.success300,
          error: colors.error300,
        },
      },
    },
    effect: {
      overlay: {
        grey: {
          strong: getColorWithOpacity('grey500', 0.6),
          base: getColorWithOpacity('grey600', 0.4),
          muted: getColorWithOpacity('grey600', 0.25),
        },
      },
      shadow: {
        brand: {
          jupiter: colors.jupiter600,
          uranus: colors.uranus600,
          neptune: colors.neptune600,
          saturn: colors.saturn600,
          cosmic: colors.cosmic600,
          nebula: colors.nebula600,
        },
        grey: {
          pure: colors.grey700,
          brand: colors.grey600,
          muted: colors.grey500,
        },
        alert: {
          info: colors.info700,
          warning: colors.warning600,
          success: colors.success600,
          error: colors.error600,
        },
      },
    },
  },
} as const;

export type { DarkTheme };
