import { createElement } from 'preact';
import { Text } from 'preact-i18n';
import { ModalDialog, ActionMenuItem, NakedButton } from '@zimbra-client/components';
import { compose } from 'recompose';
import { withIntl } from '../../enhancers';
import style from './style';
import { route } from 'preact-router';

function createMore(props, context) {
   return (
      <div>
         <ActionMenuItem onClick={e => handleClick(props, context)}>
            <Text id={`zimbra-zimlet-ics-export.menuItem`} />
         </ActionMenuItem>
      </div>
   );
}

function handleClick(props, context) {
      window.open("/service/home/~/?auth=co&id="+props.eventToDisplay.id+"&mime=text/plain&noAttach=0&filename="+encodeURIComponent(props.eventToDisplay.name)+".ics");
   }

export default compose(
   withIntl()
)
   (
      createMore
   )
