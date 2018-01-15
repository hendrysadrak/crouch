import test from 'ava';
import crouch from '../lib/crouch';


test( 'If outputs string', t => {
  const expected = 'string';
  const template = 'The five {0} wizards {1} quickly';
  const values   = {
    0: 'boxing',
    1: 'jump',
  };

  t.is( typeof crouch( template, values ), expected );
} );


test( 'Values as numbers', t => {
  const expected = 'The five boxing wizards jump quickly';
  const template = 'The five {0} wizards {1} quickly';
  const values   = {
    0: 'boxing',
    1: 'jump',
  };

  t.is( crouch( template, values ), expected );
} );


test( 'Values as numbers and strings', t => {
  const expected = 'Sympathizing would fix Quaker objectives';
  const template = 'Sympathizing {would} {0} {Quaker} objectives';
  const values   = {
    0:      'fix',
    would:  'would',
    Quaker: 'Quaker',
  };

  t.is( crouch( template, values ), expected );
} );


test( 'Values as numbers and strings with symbols', t => {
  const expected = '/ Many-wived -12* **** ££ #"! Jack laughs at --a-- 76 probes of ___ sex quiz.';
  const template = '/ {7} **** ££ #"! Jack laughs at --a-- {hello} probes of ___ sex quiz.';
  const values   = {
    7:     'Many-wived -12*',
    hello: 76,
  };

  t.is( crouch( template, values ), expected );
} );


test( 'Number values', t => {
  const expected = 'Turgid 6 Banana 7 saxophones blew over Mick\'s jazzy quaff';
  const template = 'Turgid {hello} {magnificent} {world} saxophones blew over Mick\'s jazzy quaff';
  const values   = {
    hello:       6,
    magnificent: 'Banana',
    world:       7,
  };

  t.is( crouch( template, values ), expected );
} );


test( 'Value positions touching together', t => {
  const expected = 'Playing 123 jazz vibe chords quickly excites my wife';
  const template = 'Playing {one}{two}{three} jazz vibe chords quickly excites my wife';
  const values   = {
    one:   1,
    two:   2,
    three: 3,
  };

  t.is( crouch( template, values ), expected );
} );


test( 'Strings and numbers', t => {
  const expected = 'A large 123 fawn jumped quickly over white zinc boxes';
  const template = 'A large {1}{2}{3} {fawn} {hello} {boxes}';
  const values   = {
    1:     1,
    2:     2,
    3:     3,
    fawn:  'fawn',
    hello: 'jumped quickly over white zinc',
    boxes: 'boxes',
  };

  t.is( crouch( template, values ), expected );
} );


test( 'Try with null as template keyword', t => {
  const expected = 'Exquisite farm wench gives body jolt to prize stinker';
  const template = '{null}';
  const values   = {
    null: 'Exquisite farm wench gives body jolt to prize stinker',
  };

  t.is( crouch( template, values ), expected );
} );


test( 'Null as value', t => {
  const expected = '';
  const template = '{null}';
  const values   = {
    null: null,
  };

  t.is( crouch( template, values ), expected );
} );


test( 'Strings', t => {
  const expected = 'Banana Exquisite farm wench gives body jolt to prize stinker James';
  const template = '{hello} {null} {world}';
  const values   = {
    hello: 'Banana',
    null:  'Exquisite farm wench gives body jolt to prize stinker',
    world: 'James',
  };

  t.is( crouch( template, values ), expected );
} );


test( 'Html', t => {
  const expected = '<div><h1>A nice title</h1><br><p>Hello world</p></div>';
  const template = '<div><h1>{title}</h1>{break}<p>{content}</p></div>';
  const values   = {
    title:   'A nice title',
    content: 'Hello world',
    break:   '<br>',
  };

  t.is( crouch( template, values ), expected );
} );
