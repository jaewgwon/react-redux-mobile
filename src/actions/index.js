import * as countAction from './countAction';
import * as todoAction from './todoAction';
const ActionCreators = Object.assign({},
  countAction, todoAction
);

export default ActionCreators;