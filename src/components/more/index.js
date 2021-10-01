import { createElement } from 'preact';
import { Text } from 'preact-i18n';
import { ActionMenuItem } from '@zimbra-client/components';
import { compose } from 'recompose';
import { withIntl } from '../../enhancers';

function createMore(props, context) {
   return (
      <ActionMenuItem onClick={e => handleClick(props, context)}>
         <Text id='zimbra-zimlet-ics-export.menuItem' />
      </ActionMenuItem>
   );
}

function handleClick(props, context) {
   window.open(`/service/home/~/?auth=co&id=${props.eventToDisplay.id}&mime=text/plain&noAttach=0&filename=${encodeURIComponent(props.eventToDisplay.name)}.ics`);
}

export default compose(withIntl())(createMore)
