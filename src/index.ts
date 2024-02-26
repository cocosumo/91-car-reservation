
import { 
	onEditOrCreate, 
	onIndexShow,
	onSubmit,
	onSubmitSuccess,
} from './helpers/events';
import {onIndexShowHandler} from './handlers/onIndexShowHandler/onIndexShowHandler';
import {onEditOrCreateHandler} from './handlers/onEditOrCreateHandler/onEditOrCreateHandler';
import {onSubmitHandler} from './handlers/onSubmitHandler/onSubmitHandler';
import {onSubmitSuccessHandler} from './handlers/onSubmitSuccessHandler/onSubmitSuccessHandler';


(() => {
	kintone.events.on(onIndexShow, onIndexShowHandler);
	kintone.events.on(onEditOrCreate, onEditOrCreateHandler);
	kintone.events.on(onSubmit, onSubmitHandler);
	kintone.events.on(onSubmitSuccess, onSubmitSuccessHandler);
})();
