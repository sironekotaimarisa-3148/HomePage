import { useReducer } from 'react';

function Calculator() {
  const initialState = {
    result: '0',
    previousResult: null,
    currentOperator: null,
    isNewNumber: true,
    lastInputType: null
  };

  function calculatorReducer(state, action) {
    const { type, payload } = action;

    switch (type) {
      case 'NUMBER': {
        const newResult = state.isNewNumber ? payload : state.result + payload;
        return {
          ...state,
          result: newResult,
          isNewNumber: false,
          lastInputType: 'number'
        };
      }

      case 'OPERATOR': {
        const operator = payload;
        if (state.previousResult === null) {
          return {
            ...state,
            previousResult: state.result,
            currentOperator: operator,
            isNewNumber: true,
            lastInputType: 'operator'
          };
        }

        if (state.lastInputType === 'operator') {
          return {
            ...state,
            currentOperator: operator,
            lastInputType: 'operator'
          };
        }

        if (state.lastInputType === 'number') {
          const calcResult = performCalculation(
            state.previousResult,
            state.result,
            state.currentOperator
          );
          if (calcResult === 'Error') {
            return {
              ...state,
              result: 'Error',
              previousResult: null,
              currentOperator: null,
              isNewNumber: true
            };
          }
          return {
            ...state,
            result: String(calcResult),
            previousResult: String(calcResult),
            currentOperator: operator,
            isNewNumber: true,
            lastInputType: 'operator'
          };
        }
        return state;
      }

      case 'EQUALS': {
        if (
          state.previousResult !== null &&
          state.currentOperator !== null &&
          state.lastInputType === 'number'
        ) {
          const calcResult = performCalculation(
            state.previousResult,
            state.result,
            state.currentOperator
          );
          if (calcResult === 'Error') {
            return {
              ...state,
              result: 'Error',
              previousResult: null,
              currentOperator: null,
              isNewNumber: true,
              lastInputType: 'operator'
            };
          }
          return {
            ...state,
            result: String(calcResult),
            previousResult: String(calcResult),
            isNewNumber: true,
            lastInputType: 'operator'
          };
        }
        return state;
      }

      default:
        return state;
    }
  }

  function performCalculation(num1, num2, operator) {
    const n1 = Number(num1);
    const n2 = Number(num2);

    switch (operator) {
      case ' + ':
        return n1 + n2;
      case ' - ':
        return n1 - n2;
      case ' * ':
        return n1 * n2;
      case ' / ':
        return n2 === 0 ? 'Error' : n1 / n2;
      default:
        return n2;
    }
  }

  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const handleNumberClick = (digit) => {
    dispatch({ type: 'NUMBER', payload: digit });
  };

  const handleOperatorClick = (operator) => {
    dispatch({ type: 'OPERATOR', payload: operator });
  };

  const handleEquals = () => {
    dispatch({ type: 'EQUALS' });
  };

  return (
    <div id="main">
      <h2>電卓</h2>
      <div className="cal">
        <div className="result">
          <h3 className="card" id="result">{state.result}</h3>
        </div>
        <div className="btn_con">
          <button type="button" className="cal_btn" onClick={() => handleNumberClick('1')}>1</button>
          <button type="button" className="cal_btn" onClick={() => handleNumberClick('2')}>2</button>
          <button type="button" className="cal_btn" onClick={() => handleNumberClick('3')}>3</button>
          <button type="button" className="cal_btn" onClick={() => handleNumberClick('4')}>4</button>
          <button type="button" className="cal_btn" onClick={() => handleNumberClick('5')}>5</button>
          <button type="button" className="cal_btn" onClick={() => handleNumberClick('6')}>6</button>
          <button type="button" className="cal_btn" onClick={() => handleNumberClick('7')}>7</button>
          <button type="button" className="cal_btn" onClick={() => handleNumberClick('8')}>8</button>
          <button type="button" className="cal_btn" onClick={() => handleNumberClick('9')}>9</button>
          <button type="button" className="cal_btn" onClick={() => handleOperatorClick(' + ')}>+</button>
          <button type="button" className="cal_btn" onClick={() => handleOperatorClick(' - ')}>-</button>
          <button type="button" className="cal_btn" onClick={() => handleOperatorClick(' * ')}>*</button>
          <button type="button" className="cal_btn" onClick={() => handleOperatorClick(' / ')}>/</button>
          <button type="button" className="cal_btn" onClick={handleEquals}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
