export default [
  {
    name: 'show',
    uiType: 'toggle',
    valueType: 'boolean',
    key: 'show',
    value: true,
  },
  {
    name: 'name',
    uiType: 'select',
    valueType: 'string',
    key: 'name',
    value: 'line-scale-pulse-out-rapid',
    validate: {
      options: [
        'circle',
        'cube-grid',
        'wave',
        'folding-cube',
        'three-bounce',
        'double-bounce',
        'wandering-cubes',
        'chasing-dots',
        'rotating-plane',
        'pulse',
        'wordpress',
        'ball-grid-beat',
        'ball-grid-pulse',
        'line-spin-fade-loader',
        'ball-spin-fade-loader',
        'ball-pulse-rise',
        'line-scale',
        'line-scale-pulse-out',
        'line-scale-pulse-out-rapid',
        'pacman',
        'line-scale-party',
        'ball-triangle-path',
        'ball-scale-multiple',
        'ball-scale-ripple-multiple',
        'ball-pulse-sync',
        'ball-beat',
        'ball-zig-zag',
        'ball-zig-zag-deflect',
        'ball-clip-rotate-pulse',
        'ball-clip-rotate-multiple',
        'ball-clip-rotate',
        'ball-scale-ripple',
        'triangle-skew-spin',
      ],
    },
  },
  {
    name: 'color',
    uiType: 'color',
    valueType: 'color',
    key: 'color',
    value: '#5282ef',
  },
];