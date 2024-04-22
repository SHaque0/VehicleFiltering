/*********************************** React ***********************************/
import moment, {duration} from 'moment';
import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {isFutureDateTime} from '../../utility/dateTime';

/*********************************** Librarys ********************************/

/*********************************** Data ************************************/

/*********************************** Enum ************************************/

/*********************************** Custom Hooks ****************************/

/*********************************** Custom Components ***********************/

/*********************************** Utility *********************************/

/*********************************** Styles **********************************/

const CountDown = ({dateTimeObj, onFilished}) => {
  /********************************* Initialization **************************/
  const today = moment();

  const [countdown, setCountdown] = useState('');

  /********************************* Effects *********************************/
  useEffect(() => {
    if (isFutureDateTime(dateTimeObj)) {
      const timer = setInterval(() => {
        const duration = moment.duration(dateTimeObj.diff(today));
        const countdownFormat = `${Math.floor(duration.asDays())}d ${Math.floor(
          duration.hours(),
        )}h ${duration.minutes()}m ${duration.seconds()}s`;
        setCountdown(countdownFormat);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }

    if (countdown === '0d 0h 0m 0s') {
      onFilished();
    }
  }, [countdown]);

  /********************************* Utility Functions ***********************/

  /********************************* Handler *********************************/

  /********************************* Animated Styles *************************/

  /********************************* Partial Render **************************/

  /*********************************  Render *********************************/
  return <Text>{countdown}</Text>;
};

export default CountDown;
