// Refactor the following function (refactorFunc), to make it more readable.

function refactorFunc(options) {
  const {value, value2, value3, type} = options;

  if (type === 'Date') {
      if (value !== 0 ) {
          return {
              lte: [
                  String(value),
                  value2,
                  'from now',
                  'starting end of today',
              ].join(' '),
              gte: !value3 ? 'today' : 'tommorow',
          };
      } else {
          return {gte: 'today', lte: 'end of today'};
      }
  } else {
      return {lte: value};
  }
  }

  // Refactored function 
  
  function refactorFunc(options) {
    const { value, value2, value3, type } = options;
    let result = { lte: value };

    if (type === "Date" && value !== 0) {
      result = {
        lte: `${value} ${value2} from now starting end of today`,
        gte: !value3 ? "today" : "tommorow",
      };
    } else if (type === "Date" && value === 0) {
      result = { gte: "today", lte: "end of today" };
    }

    return result;
  }