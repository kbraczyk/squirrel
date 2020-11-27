import { animate, style, transition, trigger } from '@angular/animations';

export abstract class AnimationsDirective {

  public static inOutAnimations = trigger(
    'inOutAnimation',
    [
      transition(
        ':enter',
        [
          style({ height: 0, opacity: 0 }),
          animate('.4s ease-in',
            style({ height: '*', opacity: 1 })),
        ],

      ),
      transition(
        ':leave',
        [
          style({ height: '*', opacity: 1 }),
          animate('.4s ease-out',
            style({ height: 0, opacity: 0 }))
        ]
      )
    ]
  );
}
