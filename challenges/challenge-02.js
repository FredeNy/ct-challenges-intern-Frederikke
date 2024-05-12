/**
 * Given a time in the format `hh:mm`, for start and end, calculate the total duration between them.
 *
 * @example
 *   durationInHours('00:00', '03:00') => 3;
 *   durationInHours('02:00', '04:00') => 2;
 *   ...
 *
 * @param start {string} Something like  `01:00`
 * @param end {string} Something like `04:00`
 * @return {number} Hours as a number (not a string), e.g. 2
 **/


        //Hjælpe funktion til at tjekke om (hours & minutes) er valid
        function validTimeSegment(minutesOrHours, maxValue) {
          const numberValue = parseInt(minutesOrHours);
          return minutesOrHours.length == 2 && numberValue >= 0 && numberValue < maxValue;
      }

      //Funktion som udregner tiden mellem to tidspunkter i timer
      function durationInHours(start, end) {
          //splitter starttiden og sluttiden til timer og minutter
          const [startH, startM] = start.split(":")
          const [endH, endM] = end.split(":")

          //Tjekker om hvert segment er valid ift max værdien
          if (!(validTimeSegment(startH, 24) &&
              validTimeSegment(startM, 60) &&
              validTimeSegment(endH, 24) &&
              validTimeSegment(endM, 60))) {
              //Hvis segmentet er invalid så vis en fejl
              return ("Invalid start or end provided. Please supply time in '00:00' format. Valid values 00:00 - 23:59");
          }

          //Retunere tiden i timer
          const durationHours = endH - startH;
          return durationHours

      }
      //console.log for at tjekke om det dur i konsolen
      console.log(durationInHours("00:00", "03:00"));

