import 'styles/index.css';
import ReactDOM from 'react-dom';
import bootstrap from './bootstrap';
import { getNode as $, devProd } from 'utils';

ReactDOM.render(bootstrap(true /* Strict 모드 활성화 */), $('#reactApp'));

devProd();
