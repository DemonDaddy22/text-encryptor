const DESCRIPTION_VALUE = `Excepteur pariatur nulla in ulla
mco aliqua ea cupidatat incididunt proident culpa sint non exercitation deserunt dolor.`;

const MESSAGE_API_URI_DEV = 'http://localhost:5050/api/v1/messages/';

const MESSAGE_API_URI_PROD =
    'https://swoosh-server.herokuapp.com/api/v1/messages/';

const MESSAGE_API_URL = process.env.NODE_ENV === 'development'
                            ? MESSAGE_API_URI_DEV
                            : MESSAGE_API_URI_PROD;

const HOMEPAGE_PATH = '/text-encryptor';

const TIME_UNIT =
    Object.freeze({MINUTE : 'Minute', HOUR : 'Hour', DAY : 'Day'});

const convertToMilliSeconds = (name, value) => {
  const minToMilliSec = 60 * 1000;
  const hourToMilliSec = 60 * minToMilliSec;
  const dayToMilliSec = 24 * hourToMilliSec;

  switch (name) {
  case TIME_UNIT.MINUTE:
    return value * minToMilliSec;
  case TIME_UNIT.HOUR:
    return value * hourToMilliSec;
  case TIME_UNIT.DAY:
    return value * dayToMilliSec;
  }
};

const VALID_FOR_OPTIONS = Object.freeze({
  MIN_15 : {
    'name' : '15 Minutes',
    'value' : convertToMilliSeconds(TIME_UNIT.MINUTE, 15)
  }, // Value is in milliseconds
  MIN_30 : {
    'name' : '30 Minutes',
    'value' : convertToMilliSeconds(TIME_UNIT.MINUTE, 30)
  },
  HOUR_1 :
      {'name' : '1 Hour', 'value' : convertToMilliSeconds(TIME_UNIT.HOUR, 1)},
  HOUR_3 :
      {'name' : '3 Hours', 'value' : convertToMilliSeconds(TIME_UNIT.HOUR, 3)},
  HOUR_6 :
      {'name' : '6 Hours', 'value' : convertToMilliSeconds(TIME_UNIT.HOUR, 6)},
  HOUR_12 : {
    'name' : '12 Hours',
    'value' : convertToMilliSeconds(TIME_UNIT.HOUR, 12)
  },
  DAY_1 : {'name' : '1 Day', 'value' : convertToMilliSeconds(TIME_UNIT.DAY, 1)}
});

const SEVERITY = Object.freeze({INFO : 1, WARNING : 2, ERROR : 3, SUCCESS : 4});

export {
  DESCRIPTION_VALUE,
  MESSAGE_API_URL,
  TIME_UNIT,
  VALID_FOR_OPTIONS,
  SEVERITY,
  HOMEPAGE_PATH,
};