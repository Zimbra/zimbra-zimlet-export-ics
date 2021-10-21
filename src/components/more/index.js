import { createElement } from 'preact';
import { useCallback } from 'preact/hooks';
import { Text } from 'preact-i18n';
import { ActionMenuItem } from '@zimbra-client/components';
import { compose } from 'recompose';
import { withIntl } from '../../enhancers';

function createMore(props, context) {
   //https://medium.com/@KTAsim/react-performance-event-handlers-using-usecallback-hook-9e4a06f8bb2f
   const downloadICSHandler = useCallback(() => {
      downloadICS(props, context)
   }, [props, context]);

   return (
      <ActionMenuItem onClick={downloadICSHandler}>
         <Text id='zimbra-zimlet-ics-export.menuItem' />
      </ActionMenuItem>
   );
}

function downloadICS(props, context) {
   window.open(`/service/home/~/?auth=co&id=${encodeURIComponent(props.eventToDisplay.id)}&mime=text/plain&noAttach=0&filename=${encodeURIComponent(props.eventToDisplay.name)}.ics`);
}

export default compose(withIntl())(createMore)
